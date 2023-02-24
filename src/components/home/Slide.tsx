import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { slideImgColor, slideProducts, slideVars } from '../../data/constant';
import SlideContent from './SlideContent';

const Slide = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    if (page === 2 && newDirection === 1) {
      setPage([0, 1]);
      return;
    }
    if (page === 0 && newDirection === -1) {
      setPage([2, -1]);
      return;
    }
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (page === 2) {
        setPage([0, 1]);
      } else {
        setPage([page + 1, 1]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [page]);

  return (
    <div className='overflow-x-hidden relative flex justify-center items-center my-4 rounded-2xl -shadow-basic'>
      <AnimatePresence initial={false} custom={direction} mode='popLayout'>
        <motion.div
          key={page}
          className={`${slideImgColor[page].bgColor} rounded-2xl h-52 w-full py-10 px-12`}
          custom={direction}
          variants={slideVars}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { duration: 0.4 },
          }}
        >
          <SlideContent products={slideProducts} page={page} />
        </motion.div>
      </AnimatePresence>
      <button className='absolute left-1 inset-y-0 my-auto z-10' onClick={() => paginate(-1)}>
        <IoIosArrowBack size={35} className='fill-white' />
      </button>
      <button className='absolute right-1 inset-y-0 my-auto z-10' onClick={() => paginate(1)}>
        <IoIosArrowForward size={35} className='fill-white' />
      </button>
      <div
        className='absolute bottom-4 mx-auto z-10 flex gap-1'
        onClick={event => {
          if (event.target instanceof HTMLElement && event.target.dataset.num)
            setPage([Number(event.target.dataset.num), 1]);
        }}
      >
        <button
          className={`bg-white ${page === 0 ? 'w-[9px]' : 'w-[6px]'} h-[6px] rounded-full opacity-90`}
          data-num={0}
        ></button>
        <button
          className={`bg-white ${page === 1 ? 'w-[9px]' : 'w-[6px]'} h-[6px] rounded-full opacity-90`}
          data-num={1}
        ></button>
        <button
          className={`bg-white ${page === 2 ? 'w-[9px]' : 'w-[6px]'} h-[6px] rounded-full opacity-90`}
          data-num={2}
        ></button>
      </div>
    </div>
  );
};

export default Slide;
