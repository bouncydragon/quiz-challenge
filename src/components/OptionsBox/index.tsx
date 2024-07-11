import { useState } from 'react';

type BoxProps = {
  option: string;
  optionLetter: string;
};

export const OptionsBox: React.FC<BoxProps> = ({ option, optionLetter }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    console.log(optionLetter);
  };

  return (
    <div className="group/box max-w-[35.938rem] m-auto">
      <label
        className={`cursor-pointer flex items-center ${isSelected ? 'bg-blue-800' : 'bg-gray-200'} border border-blue-700 p-7 group-hover/box:bg-blue-800`}
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
      </label>
    </div>
  );
};
