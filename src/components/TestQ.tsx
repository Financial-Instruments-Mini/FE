import React, { useState } from 'react';

interface Quest {
  readonly question: string;
  value: string;
  readonly type: string;
  reReplace?: boolean;
  placeHolder?: string;
}

const TestQ = ({ question, type, value, reReplace, placeHolder }: Quest) => {
  const [revalue, setRevalue] = useState(value);

  return (
    <div className='flex justify-evenly p-5'>
      <div className='pl-5 w-28 font-bold text-base'>{question}</div>
      <div className='grow'>
        <input
          type={type}
          value={revalue}
          onChange={event => {
            setRevalue(event.target.value);
          }}
          placeholder={placeHolder}
          className='w-full placeholder:text-xxs focus:outline-none border-b-2 border-sub-gray px-2'
          readOnly={reReplace ? false : true}
        />
      </div>
    </div>
  );
};

export default TestQ;
