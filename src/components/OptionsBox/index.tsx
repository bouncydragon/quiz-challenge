type BoxProps = {
  option: string;
  optionLetter: string;
};

export const OptionsBox: React.FC<BoxProps> = ({ option, optionLetter }) => {
  return (
    <div className="group/box max-w-[35.938rem] m-auto">
      <div className="cursor-pointer flex items-center bg-gray-200 border border-blue-700 p-7 group-hover/box:bg-blue-800">
        <div className="bg-blue-700 text-xl text-white rounded-full w-9 h-9 inline-flex items-center justify-center group-hover/box:border-white group-hover/box:border-2">
          {optionLetter}
        </div>
        <p className="group-hover/box:text-white text-blue-700 text-lg ml-8">
          {option}
        </p>
      </div>
    </div>
  );
};
