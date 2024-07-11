type QuestionProps = {
  question: string;
};

export const Question: React.FC<QuestionProps> = ({
  question,
}: QuestionProps): JSX.Element => {
  return (
    <div className="m-auto max-w-[31.5rem] mb-12 mt-5">
      <p className="text-blue-700 text-2xl">{question}</p>
    </div>
  );
};
