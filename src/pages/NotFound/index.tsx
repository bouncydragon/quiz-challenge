import { Link } from 'react-router-dom';

export const NotFound: React.FC = (): JSX.Element => {
  return (
    <div id="error-main" className="bg-oceanBlue-700 dark:bg-darkGray-200">
      <div className="flex text-center justify-evenly max-w-[73rem] m-auto">
        <div className="h-[100vh] flex flex-col justify-center items-center z-10">
          <h1 className="text-stoneGray-400 font-normal 3xs:text-6xl md:text-8xl uppercase">
            Are you lost?
          </h1>
          <p className="text-stoneGray-400 3xs:text-xl md:text-4xl font-normal mt-6">
            The page you&apos;re looking doesn&apos;t exist.
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
