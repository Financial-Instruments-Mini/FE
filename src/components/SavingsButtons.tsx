import React from 'react';
import { ISavingButtonsProps } from '../@types/IProps';

const SavingsButtons = ({ savingValue, setSavingValue }: ISavingButtonsProps) => {
  const savingTypes = [
    { title: '전체', value: '예금적금' },
    { title: '예금', value: '예금' },
    { title: '적금', value: '적금' },
  ];

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newType = event.currentTarget.dataset.name;
    newType && setSavingValue(newType);
  };

  return (
    <div className='flex gap-2 text-gray font-bold text-base'>
      {savingTypes.map(savingType => (
        <button
          key={savingType.title}
          data-name={savingType.value}
          onClick={onClick}
          className={
            savingValue === savingType.value
              ? 'pb-2 pt-3 px-3 text-main-blue font-bold'
              : 'pb-2 pt-3 px-3 text-sub-gray'
          }
        >
          {savingType.title}
        </button>
      ))}
    </div>
  );
};

export default SavingsButtons;
