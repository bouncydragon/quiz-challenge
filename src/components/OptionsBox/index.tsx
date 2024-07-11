type BoxProps = {
  option: string;
  optionLetter: string;
  onSelect: (option: string) => void;
  isSelected: boolean;
};

export const OptionsBox: React.FC<BoxProps> = ({
  option,
  optionLetter,
  onSelect,
  isSelected,
}): JSX.Element => {
  const handleClick = () => {
    onSelect(optionLetter);
    console.log(optionLetter);
  };

  return (
    <div className="group/box max-w-[38rem] m-auto flex">
      <label className="w-full">
        <div
          className={`cursor-pointer flex items-center ${isSelected ? 'bg-blue-700' : 'bg-gray-200'} border border-blue-700 p-7 group-hover/box:bg-blue-700`}
        >
          <input type="checkbox" className="hidden" onClick={handleClick} />
          <div
            className={`bg-blue-700 text-xl text-white rounded-full w-9 h-9 inline-flex items-center justify-center group-hover/box:border-white group-hover/box:border-2 ${isSelected && 'border-2 border-white'}`}
          >
            {optionLetter.charAt(optionLetter.length - 1).toUpperCase()}
          </div>
          <p
            className={`group-hover/box:text-white ${isSelected ? 'text-white' : 'text-blue-700'} text-lg ml-8`}
          >
            {option}
          </p>
        </div>
      </label>
    </div>
  );
};
