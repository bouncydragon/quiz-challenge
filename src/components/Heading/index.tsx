type THeading = {
  currentCount: number;
  totalNo: number;
};

export const Heading = ({ currentCount, totalNo }: THeading) => {
  return (
    <h1 className="text-blue-700 text-5xl uppercase ">
      Question {currentCount + 1}/{totalNo}
    </h1>
  );
};
