import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';
import useData from '../hooks/useData';
import { OptionsBox } from '../components/OptionsBox';
import { Heading } from '../components/Heading';
import { Question } from '../components/Question';
import { removeNullAndFalseEntities } from '../helpers/removeNullAndFalseEntities';

const QuestionsPage = () => {
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
      console.log('FINAL DATA: ', cleanedAnswers);
      setQuestions(cleanedAnswers);
    }
  }, [data, setQuestions]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
    <>
      <header className="flex justify-end px-10 py-4">
        <img
          src="./src/assets/forge-logo.png"
          alt="forge logo"
          width={100}
          height={100}
        />
      </header>
      <div className="max-w-[67.5rem] p-2 m-auto text-center">
        <div>
          <Heading currentCount={currentQuestion} totalNo={questions.length} />
          <Question question={questions[currentQuestion]?.question} />
          <div className="space-y-4 mb-10">{renderChoices()}</div>
          <button
            className="disabled:bg-gray-200 disabled:text-gray-300 disabled:cursor-not-allowed text-white bg-blue-700 capitalize h-[4rem] w-[8rem] text-[1.5rem] "
            onClick={handleNext}
            disabled={answers[currentQuestion] === undefined}
          >
            {isLastQuestion ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </>
  );
};

export default QuestionsPage;
