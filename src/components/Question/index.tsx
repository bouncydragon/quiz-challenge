type QuestionProps = {
  question: string;
};

export const Question: React.FC<QuestionProps> = ({
  question,
}: QuestionProps): JSX.Element => {
  return (
    <div className="m-auto max-w-[31.5rem] mb-12 mt-5">
      <p className="text-blue-700 dark:text-gray-400 font-normal text-2xl">
        {question}
      </p>
    </div>
  );
};
