type BoxProps = {
  option: string;
  className?: string;
};

export const OptionsBox: React.FC<BoxProps> = ({ option }) => {
  return (
    <div className="flex items-center space-x-5 bg-gray-200 border border-blue-700 rounded p-7 max-w-[35.938rem] h-24">
      <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center">
        A
      </div>
      <span className="text-blue-700 text-lg">{option}</span>
    </div>
  );
};
