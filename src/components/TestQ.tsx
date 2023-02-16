import React, { useState } from 'react';
import { ITextQuestProps } from '../@types/IProps';

const TestQ = ({ question, type, value, replace, placeHolder }: ITextQuestProps) => {
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
          readOnly={replace ? false : true}
        />
      </div>
    </div>
  );
};

export default TestQ;
