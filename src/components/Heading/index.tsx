type HeadingProps = {
  currentCount: number;
  totalNo: number;
};

export const Heading: React.FC<HeadingProps> = ({
  currentCount,
  totalNo,
}: HeadingProps): JSX.Element => {
  return (
    <h1 className="text-blue-700 text-5xl uppercase ">
      Question {currentCount + 1}/{totalNo}
    </h1>
  );
};
