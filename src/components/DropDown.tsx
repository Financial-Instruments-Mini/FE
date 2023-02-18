import React, { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { AnimatePresence, motion } from 'framer-motion';

const DropDown = () => {
  const bankList = ['모든은행', '국민은행', '신한은행', '우리은행', '하나은행'];
  const [dropdown, setDropdown] = useState(false);
  const [bank, setBank] = useState('모든은행');

  return (
    <>
      <div className='relative w-24'>
        <button
          type='button'
          className='flex justify-center items-center rounded-lg border-2 border-main-blue px-2 py-3 text-sm text-main-blue font-bold gap-1'
          id='menu-button'
          onClick={() => {
            setDropdown(!dropdown);
          }}
        >
          {bank}
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
                    onClick={() => {
                      setBank(bank);
                      setDropdown(false);
                    }}
                    className='hover:bg-main-blue hover:bg-opacity-40 w-full flex justify-center py-3 overflow-hidden'
                  >
                    <button>{bank}</button>
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
