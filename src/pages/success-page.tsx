type TSuccessPage = {
  score?: string;
  total?: string;
};

const SuccessPage = ({ score, total }: TSuccessPage): JSX.Element => {
  return (
    <div className="flex justify-evenly max-w-[73rem] m-auto">
      <div className="bg-white h-[100vh] w-full max-w-xl flex justify-center items-center order-2">
        <h1 className="text-blue-700 text-9xl font-extrabold">
          {score}/{total}
        </h1>
      </div>
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <h1 className="text-white text-9xl font-extrabold uppercase">BRAVO!</h1>
        <h3 className="text-white text-5xl font-extrabold uppercase">
          You have scored
        </h3>
        <a
          href="/"
          className="text-white text-md font-normal underline ml-auto mr-3"
        >
          Wanna Play Again?
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
