import React, { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';

const DropDown = () => {
  const bankList = ['모든은행', '기업은행', '국민은행', '제일은행', '농협은행', '신한은행', '우리은행', '하나은행'];
  const [dropdown, setDropdown] = useState(false);
  const [bank, setBank] = useState('모든은행');
  console.log(dropdown);
  return (
    <>
      <div className='relative w-28'>
        <button
          type='button'
          className='flex justify-center items-center rounded-xl border-2 border-main-blue px-4 py-3 text-sm text-gray-700 shadow-sm gap-2'
          id='menu-button'
          onClick={() => {
            setDropdown(!dropdown);
          }}
        >
          {bank}
          <SlArrowDown size={10} className='fill-main-blue' />
        </button>
        {dropdown ? (
          <div className='absolute w-full p-1'>
            <ul className='w-full py-4 bg-gray bg-opacity-25 border rounded-2xl text-sm flex flex-col items-center text-gray font-bold'>
              {bankList.map(bank => (
                <li
                  onClick={() => {
                    setBank(bank);
                    setDropdown(false);
                  }}
                  className='hover:bg-white w-full flex justify-center py-2'
                >
                  <button>{bank}</button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DropDown;
