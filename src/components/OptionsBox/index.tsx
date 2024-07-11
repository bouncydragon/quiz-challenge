type BoxProps = {
  option: string;
  optionLetter: string;
  onSelect: (option: string) => void;
  isSelected: boolean;
};

export const OptionsBox = ({
  option,
  optionLetter,
  onSelect,
  isSelected,
}: BoxProps): JSX.Element => {
  const handleClick = () => {
    onSelect(optionLetter);
  };

  return (
    <div className="group/box max-w-[38rem] mx-auto flex justify-center">
      <label
        className={`cursor-pointer border p-7 w-full
          ${isSelected ? 'bg-oceanBlue-700 dark:bg-stoneGray-400' : 'bg-transparent'}
          border-oceanBlue-700 dark:border-stoneGray-400
          group-hover/box:bg-oceanBlue-700 group-hover/box:dark:bg-stoneGray-400`}
      >
        <div className="flex items-center">
          <input type="checkbox" className="hidden" onClick={handleClick} />
          <h6
            className={`bg-oceanBlue-700 ${!isSelected && 'dark:bg-stoneGray-500'} text-xl text-stoneGray-400 dark:text-darkGray-200
              rounded-full w-9 h-9 inline-flex items-center justify-center
              group-hover/box:border-stoneGray-400 group-hover/box:bg-stoneGray-400
              group-hover/box:dark:border-darkGray-200 group-hover/box:border-2
              ${isSelected && 'border-2 border-stoneGray-400 dark:border-darkGray-100 dark:bg-stoneGray-400'}`}
          >
            {optionLetter.charAt(optionLetter.length - 1).toUpperCase()}
          </h6>
          <p
            className={`text-lg ml-8 w-[90%]
              group-hover/box:text-stoneGray-400 group-hover/box:dark:text-darkGray-200
              ${isSelected ? 'text-stoneGray-400 dark:text-darkGray-200' : 'text-oceanBlue-700 dark:text-stoneGray-400'}`}
          >
            {option}
          </p>
        </div>
      </label>
    </div>
  );
};
