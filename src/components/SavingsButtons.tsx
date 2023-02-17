import React, { useState } from 'react';

const SavingsButtons = () => {
  const savingsTypes = ['전체', '예금', '적금'];
  const [type, setType] = useState('전체');
  const onClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    const typeName = event.currentTarget.dataset.name;
    typeName && setType(typeName);
  };

  return (
    <div className='flex gap-2 text-gray font-bold text-base'>
      {savingsTypes.map(savingType => (
        <button
          key={savingType}
          data-name={savingType}
          onClick={onClick}
          className={`p-1 ${type === savingType ? ' text-main-blue font-bold' : ' text-sub-gray'}`}
        >
          {savingType}
        </button>
      ))}
    </div>
  );
};

export default SavingsButtons;
