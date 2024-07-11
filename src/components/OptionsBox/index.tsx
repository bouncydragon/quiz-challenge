type BoxProps = {
  option: string;
  className?: string;
};

export const OptionsBox: React.FC<BoxProps> = ({ option }) => {
  return (
    <div className="group/box max-w-[35.938rem] m-auto">
      <div className="cursor-pointer flex items-center space-x-5 bg-gray-200 border border-blue-700 rounded p-7 h-20 group-hover/box:bg-blue-800">
        <div className="text-xl bg-blue-700 text-white rounded-full w-9 h-9 flex items-center justify-center group-hover/box:border-white group-hover/box:border-2">
          A
        </div>
        <span className="group-hover/box:text-white text-blue-700 text-lg">
          {option}
        </span>
      </div>
    </div>
  );
};
