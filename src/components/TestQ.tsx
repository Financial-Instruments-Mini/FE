import React from 'react';
import { atom, useRecoilState } from 'recoil';

interface Quest {
  readonly question: string;
  value: string;
  readonly type: string;
  reReplace?: boolean;
  id: string;
  placeHolder?: string;
}

const TestQ = ({ question, type, value, id, reReplace, placeHolder }: Quest) => {
  const replaceValue = atom({
    key: id,
    default: value,
  });

  const [revalue, setRevalue] = useRecoilState(replaceValue);
  console.log(revalue, setRevalue);

  return (
    <div className='flex justify-evenly p-5'>
      <div className='pl-5 w-28 font-bold text-base'>{question}</div>
      <div className='grow'>
        {reReplace ? (
          <input
            type={type}
            value={revalue}
            onChange={event => {
              setRevalue(event.target.value);
            }}
            placeholder={placeHolder}
            className='w-full placeholder:text-xxs focus:outline-none border-b-2 border-sub-gray px-2'
          />
        ) : (
          <input
            type={type}
            value={revalue}
            onChange={event => {
              setRevalue(event.target.value);
            }}
            readOnly
            className='w-full focus:outline-none border-b-2 border-sub-gray px-2 '
          />
        )}
      </div>
    </div>
  );
};

export default TestQ;
