import { Link } from 'react-router-dom';

export const ErrorPage: React.FC = (): JSX.Element => {
  return (
    <div id="error-main" className="wrapper">
      <div className="flex justify-evenly max-w-[73rem] m-auto">
        <div className="h-[100vh] flex flex-col justify-center items-center z-10">
          <h1 className="text-stoneGray-400 font-normal text-8xl uppercase">
            Something went wrong.
          </h1>
          <p className="text-stoneGray-400 text-4xl font-normal mt-6">
            Please refresh the page.
          </p>
          <Link
            to="/"
            className="text-stoneGray-400 text-lg font-normal underline mt-32"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
