import React from 'react';
import { IKeyWordButtonProps } from '../../@types/IProps';

const KeywordButton = ({ keyword, selectedKeyword, setSelectedKeyword }: IKeyWordButtonProps) => {
  return (
    <button
      className={`h-3 font-bold py-4 px-3 flex justify-center items-center rounded-lg text-xs
    ${selectedKeyword === keyword ? `bg-main-blue ` : `bg-sub-gray`}
    `}
      onClick={() => setSelectedKeyword(keyword)}
    >
      {keyword}
    </button>
  );
};

export default KeywordButton;
