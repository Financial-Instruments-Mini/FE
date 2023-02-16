import React from 'react';
import { atom, useRecoilState } from 'recoil';

interface Quest {
  question: string;
  value: string[];
  type: string;
  reReplace?: boolean;
}

interface item {
  id: string;
  title: string;
  name: string;
}

const list: item[] = [
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

const check: item[] = [
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

const RadioQ = ({ question, value, type, reReplace }: Quest) => {
  const product = atom({
    key: 'product',
    default: value,
  });

  const [reValue, setReValue] = useRecoilState(product);
  console.log(reValue);

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
              if (listItem.id === value[0]) {
                return (
                  <div key={listItem.id}>
                    <input disabled type={type} id={listItem.id} value={listItem.id} name={listItem.name} checked />
                    <label htmlFor={listItem.id} className='font-bold text-base'>
                      {listItem.title}
                    </label>
                  </div>
                );
              } else {
                return (
                  <div key={listItem.id}>
                    <input disabled type={type} id={listItem.id} value={listItem.id} name={listItem.name} />
                    <label htmlFor={listItem.id} className='font-bold text-base'>
                      {listItem.title}
                    </label>
                  </div>
                );
              }
            })
          : check.map(checkItem => {
              if (reValue.includes(checkItem.id)) {
                return (
                  <div key={checkItem.id}>
                    {reReplace ? (
                      <input
                        className='accent-main-green'
                        onChange={checkClick}
                        type={type}
                        id={checkItem.id}
                        value={checkItem.id}
                        name={checkItem.name}
                        checked
                      />
                    ) : (
                      <input
                        disabled
                        type={type}
                        id={checkItem.id}
                        value={checkItem.id}
                        name={checkItem.name}
                        checked
                      />
                    )}

                    <label htmlFor={checkItem.id} className='font-bold text-base'>
                      {checkItem.title}
                    </label>
                  </div>
                );
              } else {
                return (
                  <div key={checkItem.id}>
                    {reReplace ? (
                      <input
                        type={type}
                        onChange={checkClick}
                        id={checkItem.id}
                        value={checkItem.id}
                        name={checkItem.name}
                      />
                    ) : (
                      <input disabled type={type} id={checkItem.id} value={checkItem.id} name={checkItem.name} />
                    )}
                    <label className='font-bold text-base' htmlFor={checkItem.id}>
                      {checkItem.title}
                    </label>
                  </div>
                );
              }
            })}
      </div>
    </div>
  );
};

export default RadioQ;
