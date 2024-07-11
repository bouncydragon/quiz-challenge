type QuestionProps = {
  question: string;
};

export const Question = ({ question }: QuestionProps): JSX.Element => {
  return (
    <div className="m-auto max-w-[31.5rem] mb-12 mt-5">
      <p className="text-oceanBlue-700 dark:text-stoneGray-400 font-normal text-2xl">
        {question}
      </p>
    </div>
  );
};
