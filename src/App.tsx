import { useEffect } from 'react';
import { useQuizStore } from './store/quizStore';
import useData from './hooks/useData';
import './App.css';
import { OptionsBox } from './components/OptionsBox';

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
      <OptionsBox option="Gauze grievance disorder" />
      {/* {questions.map((q) => (
        <div>{q.question}</div>
      ))} */}
    </>
  );
};

export default App;
