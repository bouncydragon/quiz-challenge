type HeadingProps = {
  currentCount: number;
  totalNo: number;
};

export const Heading = ({
  currentCount,
  totalNo,
}: HeadingProps): JSX.Element => {
  return (
    <h1 className="text-oceanBlue-700 dark:text-stoneGray-400 text-7xl font-normal uppercase ">
      Question {currentCount + 1}/{totalNo}
    </h1>
  );
};
