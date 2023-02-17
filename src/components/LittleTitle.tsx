import React from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ISubtitleProps } from '../@types/IProps';

const LittleTitle = ({ title, move }: ISubtitleProps) => {
  const navigate = useNavigate();
  return (
    <div className='flex p-7'>
      <div className='flex align-center shrink-0 grow'>
        {move === 'true' && (
          <MdArrowBackIosNew
            className='h-6 w-6 cursor-pointer'
            onClick={() => {
              navigate(-1);
            }}
          />
        )}
        <div className='  shrink-0 grow flex justify-center'>
          <div className='font-bold text-xl'>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default LittleTitle;
