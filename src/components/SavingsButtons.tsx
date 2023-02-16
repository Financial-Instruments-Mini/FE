import React, { useState } from 'react';

const SavingsButtons = () => {
  const savingsTypes = ['전체', '예금', '적금'];
  const [type, setType] = useState('전체');
  const onClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.dataset.name);
    // const typeName = event.currentTarget.dataset.name;
    // typeName && setType(typeName);
    // if (event !== null && event.target instanceof HTMLElement) {
    //   console.log(event.target.dataset.name);
    // }
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
