import { Link } from 'react-router-dom';
import { useQuizStore } from '../../store/quizStore';

export const SuccessPage = () => {
  const { totalCorrectAnswers, questions } = useQuizStore();
  return (
    <div id="success-main" className="bg-oceanBlue-700 dark:bg-darkGray-200">
      <div className="flex 3xs:flex-col lg:flex-row justify-evenly max-w-[73rem] m-auto 3xs:h-lvh lg:h-full">
        <div className="bg-white 3xs:h-2/4 lg:h-[100vh] w-full lg:w-[50%] flex justify-center items-center order-2 z-10">
          <h1 className="text-oceanBlue-700 dark:text-darkGray-200 3xs:text-11xl lg:text-12xl font-extrabold">
            {totalCorrectAnswers}/{questions.length}
          </h1>
        </div>
        <div className="3xs:h-2/4 lg:h-[100vh] lg:w-[50%]  flex flex-col justify-center items-center z-10 lg:p-5">
          <h1 className="text-stoneGray-400 3xs:text-9xl lg:text-11xl uppercase">
            BRAVO!
          </h1>
          <h3 className="text-stoneGray-400 3xs:text-4xl lg:text-7xl uppercase relative lg:bottom-7">
            You have scored
          </h3>
          <Link
            to="/"
            className="text-stoneGray-400 3xs:text-sm lg:text-xl font-normal underline lg:ml-auto relative 3xs:my-5 lg:bottom-5 lg:mr-16"
          >
            Wanna Play Again?
          </Link>
        </div>
      </div>
    </div>
  );
};
