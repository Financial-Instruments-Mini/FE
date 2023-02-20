import React, { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { AnimatePresence, motion } from 'framer-motion';
import { IbanksProps } from '../@types/IProps';

const DropDown = ({ bank, setBank }: IbanksProps) => {
  const bankList = [
    { title: '모든은행', value: 'KB신한우리하나' },
    { title: '국민은행', value: 'KB' },
    { title: '신한은행', value: '신한' },
    { title: '우리은행', value: '우리' },
    { title: '하나은행', value: '하나' },
  ];
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className='relative shrink-0'>
        <button
          type='button'
          className='flex justify-center items-center rounded-lg border-2 border-main-blue px-2 py-3 text-sm text-main-blue font-bold gap-1'
          id='menu-button'
          onClick={() => {
            setDropdown(!dropdown);
          }}
        >
          {bank !== undefined && bank.title}
          <SlArrowDown size={10} className='fill-main-blue' />
        </button>
        <AnimatePresence>
          {dropdown ? (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1, transition: { ease: 'easeIn', duration: 0.3 } }}
              exit={{ scale: 0, transition: { type: 'spring', bounce: 0, duration: 0.2 } }}
              style={{ originY: 0 }}
              className='absolute w-full top-12 overflow-hidden rounded-2xl -shadow-basic z-20'
            >
              <ul className='w-full h-fit bg-sub-gray border overflow-hidden text-sm flex flex-col items-center text-white font-bold -shadow-basic'>
                {bankList.map(bank => (
                  <li
                    key={bank.title}
                    onClick={() => {
                      if (setBank !== undefined) {
                        setBank(bank);
                      }
                      setDropdown(false);
                    }}
                    className='hover:bg-main-blue hover:bg-opacity-40 w-full flex justify-center py-3 overflow-hidden'
                  >
                    <button>{bank.title}</button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};

export default DropDown;
