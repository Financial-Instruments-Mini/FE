import React from 'react';
import { IKeyWordButtonProps } from '../@types/IProps';

const KeywordButton = ({ keyword }: IKeyWordButtonProps) => {
  return (
    <button className='h-3 bg-main-blue opacity-70 py-4 px-3 flex justify-center items-center rounded-full text-xs font-bold'>
      {keyword}
    </button>
  );
};

export default KeywordButton;
