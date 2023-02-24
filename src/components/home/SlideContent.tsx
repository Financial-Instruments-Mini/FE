import React from 'react';
import { motion } from 'framer-motion';
import { ISlideContentProps } from '../../@types/IProps';
import { slideImgColor } from '../../data/constant';
import { useNavigate } from 'react-router-dom';

const SlideContent = ({ products, page }: ISlideContentProps) => {
  const navigate = useNavigate();

  return (
    <motion.div className='w-full h-full flex flex-col gap-2'>
      <motion.h3 className='font-extrabold text-xl text-[#333333] truncate'>{products[page].productName} </motion.h3>
      <motion.p className='text-xs w-2/3 leading-4 text-[#333333]'>{products[page].content.slice(0, 40)} ...</motion.p>
      <motion.p className='text-base'>
        최고 연 <span className='font-bold text-xl'>{products[page].interests[1].rate}</span>%{' '}
        <motion.span className='text-xs align-[2px]'>(24개월)</motion.span>
      </motion.p>
      <motion.p
        className='text-sm underline underline-offset-4 cursor-pointer absolute bottom-11'
        onClick={() => navigate(`/detail/${products[page].id}`)}
      >
        자세히 보기
      </motion.p>
      <motion.img
        className='w-1/2 h-36 absolute right-1 bottom-1 -z-10'
        src={slideImgColor[page].img}
        alt='배너이미지'
      />
    </motion.div>
  );
};

export default SlideContent;
