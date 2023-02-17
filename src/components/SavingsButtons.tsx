import React, { useState } from 'react';

const SavingsButtons = () => {
  const savingsTypes = ['전체', '예금', '적금'];
  const [type, setType] = useState('전체');
  const onClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    const typeName = event.currentTarget.dataset.name;
    typeName && setType(typeName);
  };

  return (
    <div className='flex gap-3 mr-12 text-gray font-bold text-lg'>
      {savingsTypes.map(savingType => (
        <button
          key={savingType}
          data-name={savingType}
          onClick={onClick}
          className={type === savingType ? 'pb-2 pt-3 px-3 text-main-blue font-bold' : 'pb-2 pt-3 px-3 text-sub-gray'}
        >
          {savingType}
        </button>
      ))}
    </div>
  );
};

export default SavingsButtons;
