import React from 'react';
import { ITextQProps } from '../@types/IProps';

const TestQ = ({ question, name, type, loginData, setLoginData, value, replace, placeHolder }: ITextQProps) => {
  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setLoginData !== undefined && loginData !== undefined) {
      setLoginData({
        ...loginData,
        [name as string]: event.target.value,
      });
    }
  };

  // const passwordValue = () => {
  //   if (name === 'password' && setLoginData !== undefined && loginData !== undefined) {
  //     setLoginData({
  //       ...loginData,
  //       password: '',
  //     });
  //     return loginData.password;
  //   } else return value as string;
  // };

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
