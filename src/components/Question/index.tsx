type TQuestion = {
  question: string;
};

export const Question = ({ question }: TQuestion) => {
  return (
    <div className="m-auto max-w-[31.5rem] mb-12 mt-5">
      <p className="text-blue-700 text-2xl">{question}</p>
    </div>
  );
};
