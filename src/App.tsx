import { useEffect } from 'react';
import { useQuizStore } from './store/quizStore';
import useData from './hooks/useData';
import { OptionsBox } from './components/OptionsBox';
import { Heading } from './components/Heading';
import './App.css';

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
    <>
      <Heading />
      <OptionsBox option="Gauze grievance disorder" />
      {/* {questions.map((q) => (
        <div>{q.question}</div>
      ))} */}
    </>
  );
};

export default App;
