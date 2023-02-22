import React from 'react';
import { IQuestProps } from '../@types/IProps';

const check: string[] = ['예금', '적금'];

const RadioQ = ({ question, loginData, value, setLoginData, type, replace }: IQuestProps) => {
  const checkClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked && setLoginData !== undefined) {
      setLoginData({ ...loginData, productType: loginData.productType + event.target.value });
    } else if (!event.target.checked && setLoginData !== undefined) {
      setLoginData({ ...loginData, productType: loginData.productType.replace(event.target.value, '') });
    }
  };

  return (
    <div className='flex justify-evenly p-5'>
      <div className='font-bold text-base'>{question}</div>
      <div className='grow flex justify-evenly'>
        {check.map(checkItem => {
          return (
            <div key={checkItem}>
              <input
                className='accent-main-green'
                onChange={checkClick}
                type={type}
                id={checkItem}
                value={checkItem}
                name={checkItem}
                checked={value !== undefined && value.includes(checkItem) ? true : false}
                disabled={replace ? false : true}
              />
              <label htmlFor={checkItem} className='font-bold text-base'>
                {checkItem}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioQ;
