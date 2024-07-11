import { useEffect } from 'react';
import { useQuizStore } from './store/quizStore';
import useData from './hooks/useData';
import { OptionsBox } from './components/OptionsBox';
import { Heading } from './components/Heading';
import './App.css';
import { NextButton } from './components/Button';
import { Question } from './components/Question';

const App = () => {
  const { setQuestions, questions } = useQuizStore();
  const { data, error, isLoading } = useData('', {
    limit: 10,
    category: 'Linux',
    difficulty: 'easy',
  });

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setQuestions(data);
    }
  }, [data, setQuestions]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
        <Heading />
        <Question />
        <div className="space-y-4 mb-10">
          <OptionsBox option="Gauze grievance disorder" />
          <OptionsBox option="Gauze grievance disorder" />
          <OptionsBox option="Gauze grievance disorder" />
          <OptionsBox option="Gauze grievance disorder" />
        </div>
        <NextButton />
      </div>

      {/* {questions.map((q) => (
        <div>{q.question}</div>
      ))} */}
    </div>
  );
};

export default App;
