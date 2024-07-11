import { Link } from 'react-router-dom';

const LandingPage: React.FC = (): JSX.Element => {
  return (
    <div
      id="landing-main"
      className="flex flex-col justify-center items-end h-[100vh] pr-64 bg-blue-700"
    >
      <h1 className="text-9xl font-black text-white">QUIZZLER</h1>
      <div className="flex flex-col items-end z-10">
        <div className="inline-flex mb-12">
          <p className="mr-4 text-xs font-normal text-white">BY:</p>
          <img
            src="./src/assets/logo.png"
            alt="forge logo"
            width={100}
            height={100}
          />
        </div>
        <Link to="/questions" className="mr-4 text-lg font-normal text-white">
          Let&apos;s start the quiz&#8594;
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
