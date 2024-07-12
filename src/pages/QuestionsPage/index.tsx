import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heading, OptionsBox, Question, Spinner } from '../../components';
import { useData } from '../../hooks';
import { removeNullAndFalseEntities } from '../../helpers';
import { useQuizStore } from '../../store/quizStore';
import forgeLogo from '../../assets/forge-logo.png';
import { ErrorPage } from '../ErrorPage';

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
    return <ErrorPage />;
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
    <div id="question-main" className="bg-stoneGray-600 dark:bg-darkGray-200">
      <header className="flex 3xs:justify-center md:justify-end px-10 py-4">
        <Link reloadDocument to="/" className="z-10">
          <img src={forgeLogo} alt="forge logo" width={100} height={100} />
        </Link>
      </header>
      <div className="flex items-center flex-col justify-center min-h-[calc(100vh-63.40px)] pb-10 m-auto z-10">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="text-center 3xs:px-4 md:px-0 z-10">
              <Heading
                currentCount={currentQuestion}
                totalNo={questions.length}
              />
              <Question question={questions[currentQuestion]?.question} />
            </div>
            <div className="mb-10 space-y-4 w-full z-10">{renderChoices()}</div>
            <button
              className="
                h-[4rem] w-[8rem] text-[1.5rem] text-stoneGray-400 bg-oceanBlue-700 
                dark:bg-stoneGray-500 dark:text-darkGray-200 disabled:dark:text-stoneGray-600 
                disabled:bg-warmstoneGray-400 capitalize disabled:bg-gray-200 
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
