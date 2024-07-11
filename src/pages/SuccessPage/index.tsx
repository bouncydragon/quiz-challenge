import { Link } from 'react-router-dom';
import { useQuizStore } from '../../store/quizStore';

export const SuccessPage: React.FC = (): JSX.Element => {
  const { totalCorrectAnswers, questions } = useQuizStore();
  return (
    <div id="success-main" className="wrapper">
      <div className="flex justify-evenly max-w-[73rem] m-auto">
        <div className="bg-white h-[100vh] w-full max-w-xl flex justify-center items-center order-2 z-10">
          <h1 className="text-blue-700 text-11xl font-extrabold">
            {totalCorrectAnswers}/{questions.length}
          </h1>
        </div>
        <div className="h-[100vh] flex flex-col justify-center items-center z-10">
          <h1 className="text-gray-400 text-10xl uppercase">BRAVO!</h1>
          <h3 className="text-gray-400 text-8xl uppercase relative bottom-[5.313rem]">
            You have scored
          </h3>
          <Link
            to="/"
            className="text-gray-400 text-xl font-normal underline ml-auto mr-3 relative bottom-16"
          >
            Wanna Play Again?
          </Link>
        </div>
      </div>
    </div>
  );
};
