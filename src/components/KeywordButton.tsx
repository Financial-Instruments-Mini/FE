import React from 'react';
import { IKeyWordButtonProps } from '../@types/IProps';

const KeywordButton = ({ keyword }: IKeyWordButtonProps) => {
  return (
    <button className='h-6 bg-main-blue opacity-70 py-5 px-4 flex justify-center items-center rounded-full text-sm font-bold'>
      {keyword}
    </button>
  );
};

export default KeywordButton;
