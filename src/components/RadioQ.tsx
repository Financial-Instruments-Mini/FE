import React, { useState } from 'react';
import { IItemProps, IQuestProps } from '../@types/IProps';

const list: IItemProps[] = [
  {
    id: 'woman',
    title: '여성',
    name: 'sex',
  },
  {
    id: 'man',
    title: '남성',
    name: 'sex',
  },
];

const check: IItemProps[] = [
  {
    id: 'deposit',
    title: '예금',
    name: 'deposit',
  },
  {
    id: 'saving',
    title: '적금',
    name: 'deposit',
  },
];

const RadioQ = ({ question, value, type, replace }: IQuestProps) => {
  const [reValue, setReValue] = useState(value);

  const checkClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setReValue(prev => {
        return [...prev, event.target.value];
      });
    } else {
      setReValue(() => {
        return reValue.filter(arr => arr !== event.target.value);
      });
    }
  };

  return (
    <div className='flex justify-evenly p-5'>
      <div className='pl-5 w-28 font-bold text-base'>{question}</div>
      <div className='grow flex justify-evenly'>
        {type === 'radio'
          ? list.map(listItem => {
              return (
                <div key={listItem.id}>
                  <input
                    disabled
                    type={type}
                    id={listItem.id}
                    value={listItem.id}
                    name={listItem.name}
                    checked={listItem.id === value[0] ? true : false}
                  />
                  <label htmlFor={listItem.id} className='font-bold text-base'>
                    {listItem.title}
                  </label>
                </div>
              );
            })
          : check.map(checkItem => {
              return (
                <div key={checkItem.id}>
                  <input
                    className='accent-main-green'
                    onChange={checkClick}
                    type={type}
                    id={checkItem.id}
                    value={checkItem.id}
                    name={checkItem.name}
                    checked={reValue.includes(checkItem.id) ? true : false}
                    disabled={replace ? false : true}
                  />
                  <label htmlFor={checkItem.id} className='font-bold text-base'>
                    {checkItem.title}
                  </label>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default RadioQ;
