import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, OptionsBox, Question, Spinner } from '../components';
import { useData } from '../hooks';
import { removeNullAndFalseEntities } from '../helpers';
import { useQuizStore } from '../store/quizStore';

const QuestionsPage: React.FC = (): JSX.Element => {
  const {
    setQuestions,
    questions,
    setAnswer,
    answers,
    calculateTotalCorrectAnswers,
  } = useQuizStore();
  const { data, error, isLoading } = useData('', {
    limit: 2,
    category: 'Linux',
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
    <div id="question-main">
      <header className="flex justify-end px-10 py-4">
        <img
          src="./src/assets/forge-logo.png"
          alt="forge logo"
          width={100}
          height={100}
        />
      </header>
      <div className="flex items-center justify-center h-[calc(100vh-63.40px)] max-w-[67.5rem] p-2 m-auto text-center">
        <div>
          {isLoading ? (
            <Spinner />
          ) : (
            <div>
              <Heading
                currentCount={currentQuestion}
                totalNo={questions.length}
              />
              <Question question={questions[currentQuestion]?.question} />
              <div className="mb-10 space-y-4">{renderChoices()}</div>
              <button
                className="h-[4rem] w-[8rem] text-[1.5rem] text-white bg-blue-700 capitalize disabled:bg-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed"
                onClick={handleNext}
                disabled={answers[currentQuestion] === undefined}
              >
                {isLastQuestion ? 'Submit' : 'Next'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
