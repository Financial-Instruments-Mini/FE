import React from 'react';
import { ITextQuestProps } from '../@types/IProps';

const TestQ = ({ question, name, type, loginData, setLoginData, replace, placeHolder, value }: ITextQuestProps) => {
  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setLoginData !== undefined) {
      setLoginData({ ...loginData, [name]: event.target.value });
    }
  };

  return (
    <div className='flex justify-evenly p-5'>
      <div className='w-20 font-bold text-base'>{question}</div>
      <div className='grow'>
        <input
          type={type}
          value={value}
          onChange={onchange}
          placeholder={placeHolder}
          className='w-full placeholder:text-xxs focus:outline-none border-b-2 border-sub-gray px-2'
          readOnly={replace ? false : true}
        />
      </div>
    </div>
  );
};

export default TestQ;
