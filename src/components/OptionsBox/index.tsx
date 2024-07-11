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
    <div className="group/box max-w-[38rem] mx-auto flex justify-center">
      <label
        className={`cursor-pointer border p-7 w-full
          ${isSelected ? 'bg-blue-700 dark:bg-gray-400' : 'bg-transparent'}
          border-blue-700 dark:border-gray-400
          group-hover/box:bg-blue-700 group-hover/box:dark:bg-gray-400`}
      >
        <div className="flex items-center">
          <input type="checkbox" className="hidden" onClick={handleClick} />
          <h6
            className={`bg-blue-700 ${!isSelected && 'dark:bg-gray-500'} text-xl text-gray-400 dark:text-darkGray-200
              rounded-full w-9 h-9 inline-flex items-center justify-center
              group-hover/box:border-gray-400 group-hover/box:bg-gray-400
              group-hover/box:dark:border-darkGray-200 group-hover/box:border-2
              ${isSelected && 'border-2 border-gray-400 dark:border-darkGray-100 dark:bg-gray-400'}`}
          >
            {optionLetter.charAt(optionLetter.length - 1).toUpperCase()}
          </h6>
          <p
            className={`text-lg ml-8 w-[90%]
              group-hover/box:text-gray-400 group-hover/box:dark:text-darkGray-200
              ${isSelected ? 'text-gray-400 dark:text-darkGray-200' : 'text-blue-700 dark:text-gray-400'}`}
          >
            {option}
          </p>
        </div>
      </label>
    </div>
  );
};