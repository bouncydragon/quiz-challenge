import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, OptionsBox, Question, Spinner } from '../components';
import { useData } from '../hooks';
import { removeNullAndFalseEntities } from '../helpers';
import { useQuizStore } from '../store/quizStore';

export const QuestionsPage: React.FC = (): JSX.Element => {
  const {
    setQuestions,
    questions,
    setAnswer,
    answers,
    calculateTotalCorrectAnswers,
  } = useQuizStore();
  const { data, error, isLoading } = useData('', {
    limit: 10,
    category: 'Code',
    difficulty: 'easy',
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const isLastQuestion = currentQuestion + 1 === questions?.length;

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const cleanedAnswers = data.map(removeNullAndFalseEntities);
      setQuestions(cleanedAnswers);
    }
  }, [data, setQuestions]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSelect = (option: string) => {
    setAnswer(currentQuestion, option);
  };

  const handleNext = () => {
    if (answers[currentQuestion]?.length > 0 && !isLastQuestion) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      calculateTotalCorrectAnswers();
      navigate('/success');
    }
  };

  const renderChoices = () => {
    if (questions.length > 0) {
      return Object.entries(questions[currentQuestion]?.answers).map(
        ([key, value], indx) => (
          <OptionsBox
            key={indx}
            option={value || ''}
            optionLetter={key}
            onSelect={handleSelect}
            isSelected={answers[currentQuestion]?.includes(key || '')}
          />
        )
      );
    }
  };

  return (
    <div id="question-main" className="bg-gray-600 dark:bg-darkGray-200">
      <header className="flex justify-end px-10 py-4">
        <img
          src="./src/assets/forge-logo.png"
          alt="forge logo"
          width={100}
          height={100}
        />
      </header>
      <div className="flex items-center flex-col justify-center min-h-[calc(100vh-63.40px)] max-w-[67.5rem] pb-10 m-auto z-10">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="text-center z-10">
              <Heading
                currentCount={currentQuestion}
                totalNo={questions.length}
              />
              <Question question={questions[currentQuestion]?.question} />
            </div>
            <div className="mb-10 space-y-4 w-full z-10">{renderChoices()}</div>
            <button
              className="
                h-[4rem] w-[8rem] text-[1.5rem] text-gray-400 bg-blue-700 
                dark:bg-gray-500 dark:text-darkGray-200 disabled:dark:text-gray-600 
                disabled:bg-warmGray-400 capitalize disabled:bg-gray-200 
                disabled:text-gray-300 disabled:cursor-not-allowed z-10
              "
              onClick={handleNext}
              disabled={answers[currentQuestion] === undefined}
            >
              {isLastQuestion ? 'Submit' : 'Next'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};