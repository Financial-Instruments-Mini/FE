import React from 'react';
import { IButtonProps } from '../../@types/IProps';

const MainButton = ({ text, select = false, page, onClick }: IButtonProps) => {
  return (
    <button
      name={text}
      onClick={onClick}
      className={`relative h-16 px-1 shrink-0 rounded-3xl text-md font-bold -shadow-basic text-lg flex-grow
      ${select ? 'bg-main-green text-sub-green' : 'bg-sub-green text-main-green'}
      ${page === 'servey' ? '' : ' w-5/12'}
      ${page === 'success' ? 'w-3/12' : null}
      ${page === 'detail/:id' ? 'w-36' : null}
      `}
    >
      {page === 'login/register' ? (
        <span className='absolute top-16 left-2/4 translate-x-[-50%] w-0 h-0 border-t-[15px] border-t-main-green border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-solid'></span>
      ) : null}
      {text}
    </button>
  );
};

export default MainButton;
