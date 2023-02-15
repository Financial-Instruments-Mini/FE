import React from 'react';
import { atom, useRecoilState } from 'recoil';

interface Quest {
  readonly question: string;
  value: string;
  readonly type: string;
  reReplace?: boolean;
  id: string;
}

const TestQ = ({ question, type, value, id, reReplace }: Quest) => {
  const replaceValue = atom({
    key: id,
    default: value,
  });

  const [revalue, setRevalue] = useRecoilState(replaceValue);
  console.log(revalue, setRevalue);

  return (
    <div>
      <div>{question}</div>
      <div>
        {reReplace ? (
          <input
            type={type}
            value={revalue}
            onChange={event => {
              setRevalue(event.target.value);
            }}
          />
        ) : (
          <input
            type={type}
            value={revalue}
            onChange={event => {
              setRevalue(event.target.value);
            }}
            readOnly
          />
        )}
      </div>
    </div>
  );
};

export default TestQ;
