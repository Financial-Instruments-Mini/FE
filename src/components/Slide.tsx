import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import banner_1 from '../assets/images/banner_img_1.jpg';
import banner_2 from '../assets/images/banner_img_2.jpg';
import banner_3 from '../assets/images/banner_img_3.jpg';
import { useNavigate } from 'react-router-dom';
import items from '../assets/data.json';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 350 : -350,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 350 : -350,
    };
  },
};

const slide = [
  { img: banner_1, bgColor: 'bg-[#C5D6F4]' },
  { img: banner_2, bgColor: 'bg-[#F9EFF0]' },
  { img: banner_3, bgColor: 'bg-[#BCA1E4]' },
];

const Slide = () => {
  const navigate = useNavigate();
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
  return (
    <div className='overflow-x-hidden relative flex justify-center items-center my-4 rounded-2xl -shadow-basic'>
      <AnimatePresence initial={false} custom={direction} mode='popLayout'>
        <motion.div
          key={page}
          className={`${slide[page].bgColor} rounded-2xl h-52 w-full py-10 px-12`}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { duration: 0.4 },
          }}
        >
          {items && (
            <div className='w-full h-full flex flex-col gap-2'>
              <h3 className='font-extrabold text-xl text-[#333333] truncate'>{items.data[page].productName} </h3>
              <p className='text-xs w-2/3 leading-4 text-[#333333]'>{items.data[page].content.slice(0, 40)} ...</p>
              <p className='text-base'>
                최고 연 <span className='font-bold text-xl'>{items.data[page].interestList[1].rate}</span>%{' '}
                <span className='text-xs align-[2px]'>(24개월)</span>
              </p>
              <p
                className='text-sm underline underline-offset-4 cursor-pointer absolute bottom-11'
                onClick={() => navigate(`/detail/${items.data[1].id}`)}
              >
                자세히 보기
              </p>
              <img className='w-1/2 h-36 absolute right-1 bottom-1 -z-10' src={slide[page].img} alt='배너이미지' />
            </div>
          )}
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
