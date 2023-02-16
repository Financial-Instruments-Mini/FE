import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import banner_1 from '../assets/images/banner_img_1.jpg';
import banner_2 from '../assets/images/banner_img_2.jpg';
import banner_3 from '../assets/images/banner_img_3.jpg';
import items from '../assets/data.json';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 500 : -500,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
    };
  },
};

const Slide = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const slideImg = [
    { img: banner_1, bgColor: '#C5D6F4' },
    { img: banner_2, bgColor: '#F9EFF0' },
    { img: banner_3, bgColor: '#BCA1E4' },
  ];
  // console.log(items);
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
  return (
    <div className='overflow-x-hidden relative flex justify-center items-center my-6 rounded-2xl -shadow-basic'>
      <AnimatePresence initial={false} custom={direction} mode='popLayout'>
        <motion.div
          key={page}
          className={`bg-[${slideImg[page].bgColor}] rounded-2xl h-72 w-full p-5`}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { duration: 0.4 },
          }}
        >
          <p>청년우대적금 </p>
          <p>우리은행</p>
          <img className='w-1/2 absolute right-0 bottom-0' src={slideImg[page].img} alt='배너이미지' />
        </motion.div>
      </AnimatePresence>
      <button className='absolute left-1 inset-y-0 my-auto z-10' onClick={() => paginate(-1)}>
        <IoIosArrowBack size={35} className='fill-white' />
      </button>
      <button className='absolute right-1 inset-y-0 my-auto z-10' onClick={() => paginate(1)}>
        <IoIosArrowForward size={35} className='fill-white' />
      </button>
    </div>
  );
};

export default Slide;
