import { useEffect, useState } from 'react';
import { useQuizStore } from './store/quizStore';
import useData from './hooks/useData';
import { OptionsBox } from './components/OptionsBox';
import { Heading } from './components/Heading';
import './App.css';
import { Question } from './components/Question';
import { removeNullAndFalseEntities } from './helpers/removeNullAndFalseEntities';

const App = () => {
  const { setQuestions, questions, setAnswer, answers } = useQuizStore();
  const { data, error, isLoading } = useData('', {
    limit: 2,
    category: 'Linux',
    difficulty: 'easy',
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const isLastQuestion = currentQuestion + 1 === questions?.length;

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const cleanedAnswers = data.map(removeNullAndFalseEntities);
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
    if (
      answers[currentQuestion]?.length > 0 &&
      !isLastQuestion
    ) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const renderChoices = () => {
    if (questions.length > 0) {
      return Object.entries(questions[currentQuestion].answers).map(
        ([key, value]) => (
          <OptionsBox
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
    <div className="">
      <header className="flex justify-end">
        <img
          src="./src/assets/forge-logo.png"
          alt="forge logo"
          width={100}
          height={100}
        />
      </header>
      <div>
        <Heading currentCount={currentQuestion} totalNo={questions.length} />
        <Question question={questions[currentQuestion]?.question} />
        <div className="space-y-4 mb-10">{renderChoices()}</div>
        <button
          className="capitalize bg-gray-200 h-[4rem] w-[8rem] text-[1.5rem] text-gray-400"
          onClick={handleNext}
        >
          { isLastQuestion ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default App;
