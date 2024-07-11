export const Spinner: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="flex space-x-2 justify-center items-center h-full z-10">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-oceanBlue-700 dark:bg-stoneGray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-oceanBlue-700 dark:bg-stoneGray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-oceanBlue-700 dark:bg-stoneGray-400 rounded-full animate-bounce"></div>
      </div>
    </>
  );
};
