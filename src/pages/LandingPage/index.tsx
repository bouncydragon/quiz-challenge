import { Link } from 'react-router-dom';
import forgeLogo from '../../assets/logo.png';

export const LandingPage: React.FC = (): JSX.Element => {
  return (
    <div
      id="landing-main"
      className="flex flex-col justify-center items-end h-[100vh] pr-64 bg-oceanBlue-700"
    >
      <h1 className="text-10xl font-normal text-stoneGray-400">QUIZZLER</h1>
      <div className="flex flex-col items-end z-10">
        <div className="inline-flex mb-12 relative bottom-24">
          <p className="mr-4 text-xs font-normal text-stoneGray-400">BY:</p>
          <img src={forgeLogo} alt="forge logo" width={100} height={100} />
        </div>
        <Link
          reloadDocument
          to="/questions"
          className="mr-4 text-2xl font-normal text-stoneGray-400 relative bottom-14"
        >
          Let&apos;s start the quiz&#8594;
        </Link>
      </div>
    </div>
  );
};
