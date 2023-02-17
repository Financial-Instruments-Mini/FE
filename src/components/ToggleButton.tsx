import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ToggleButton = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className='relative w-32 h-9 flex justify-around items-center bg-sub-gray bg-opacity-40 text-gray p-3 rounded-full text-sm font-bold'>
      <button className='h-full w-1/2' onClick={() => setToggle(!toggle)}>
        <p className='absolute inset-y-0 left-1 my-2.5 mx-2 z-10'>금리순</p>
        {toggle ? (
          <motion.div
            layoutId='selected'
            className='absolute top-1 bottom-1 left-1 py-3 px-7 m-auto bg-white rounded-full'
          ></motion.div>
        ) : null}
      </button>
      <button className='h-full w-1/2' onClick={() => setToggle(!toggle)}>
        <p className='absolute inset-y-0 right-1 my-2.5 mx-2 z-10 '>최신순</p>
        {!toggle ? (
          <motion.div
            layoutId='selected'
            className='absolute top-1 bottom-1 right-1 py-3 px-7 m-auto bg-white rounded-full'
          ></motion.div>
        ) : null}
      </button>
    </div>
  );
};

export default ToggleButton;
