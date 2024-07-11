import './App.css';
import useData from './hooks/useData';

function App() {
  const { data, error, isLoading } = useData('', {
    limit: 10,
    category: 'Linux',
    difficulty: 'easy',
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error encountered</p>;

  return (
    <h1 className="text-3xl font-bold underline">
      Happy coding and good luck! 🌟
    </h1>
  );
}

export default App;
