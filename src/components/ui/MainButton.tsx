import React from 'react';
import { IButtonProps } from '../../@types/IProps';

const MainButton = ({ text, select = false, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-[4.75rem] py-6 rounded-3xl text-md font-bold -shadow-basic text-lg hover:text-sub-green hover:bg-main-green hover:transition hover:duration-500 
      ${select ? 'bg-main-green text-sub-green' : 'bg-sub-green text-main-green'}`}
    >
      {text}
    </button>
  );
};

export default MainButton;
