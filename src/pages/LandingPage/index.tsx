import { Link } from 'react-router-dom';
import forgeLogo from '../../assets/logo.png';
import React from 'react';

export const LandingPage: React.FC = (): JSX.Element => {
  return (
    <div
      id="landing-main"
      className="flex flex-col justify-center 3xs:items-center lg:items-end h-[100vh] lg:pr-32 xl:pr-64 bg-oceanBlue-700 dark:bg-darkGray-200"
    >
      <div className="mb-24">
        <h1 className="3xs:text-8xl md:text-10xl font-normal text-stoneGray-400">
          QUIZZLER
        </h1>
        <div className="flex flex-col items-end z-10">
          <div className="inline-flex relative 3xs:bottom-4 md:self-end md:bottom-7">
            <p className="lg:mr-4 text-xs font-normal text-stoneGray-400">
              BY:
            </p>
            <img src={forgeLogo} alt="forge logo" width={100} height={100} />
          </div>
        </div>
      </div>
      <Link
        reloadDocument
        to="/questions"
        className="text-2xl font-normal text-stoneGray-400 relative bottom-14 z-10"
      >
        Let&apos;s start the quiz&#8594;
      </Link>
    </div>
  );
};
