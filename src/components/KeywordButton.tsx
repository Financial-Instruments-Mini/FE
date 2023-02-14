import React from 'react';
import { IKeyWordButtonProps } from '../@types/IProps';

const KeywordButton = ({ keyword }: IKeyWordButtonProps) => {
  return (
    <button className='h-5 bg-main-blue opacity-70 p-4 py-5 flex justify-center items-center rounded-full text-sm'>
      {keyword}
    </button>
  );
};

export default KeywordButton;
