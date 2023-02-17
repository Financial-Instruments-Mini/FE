import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ServeyCard from './../components/ServeyCard';

const options = [
  {
    title: '어떤 종류의 /상품/을 원하시나요?',
    contents: ['예금', '적금'],
  },
  {
    title: '/주거래 은행/은 어떻게 되시나요?',
    contents: [
      '우리은행',
      '대구은행',
      '부산은행',
      '광주은행',
      '제주은행',
      '전북은행',
      '경남은행',
      '중소기업은행',
      '국민은행',
      '신한은행',
      '농협은행',
      '하나은행',
      '케이뱅크',
      '수협은행',
      '카카오뱅크',
      '토스뱅크',
    ],
  },
  {
    title: '/직업/은 어떻게 되시나요?',
    contents: [
      '직장인',
      '공무원',
      '전문직',
      '농축수산업 종사자',
      '개인사업자/자영업자',
      '자유직/프리랜서',
      '전업주부',
      '학생',
      '군인',
      '무직',
    ],
  },
];

const Servey = () => {
  const [visible, setVisible] = useState(0);
  const [isBack, setIsBack] = useState(false);

  return (
    <div className='flex flex-col justify-center items-center overflow-hidden'>
      <p className='my-16 text-lg font-bold'>
        상품을 <span className='text-main-green'>추천</span>받고 싶다면 선택해주세요!
      </p>
      <div className='w-full flex items-center justify-center'>
        <AnimatePresence custom={isBack}>
          {options.map((item, index) =>
            index === visible ? (
              <motion.div
                className='w-full flex items-center justify-center'
                custom={isBack}
                variants={boxVars}
                initial='initial'
                animate='animate'
                exit='exit'
                key={index}
              >
                <ServeyCard {...item} order={index} setVisible={setVisible} />
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const boxVars = {
  initial: (isBack: boolean) => ({
    x: isBack ? -800 : 800,
    opacity: 0,
    scale: 0,
    display: 'none',
    transition: {
      duration: 1,
    },
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    display: 'flex',
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 800 : -800,
    opacity: 0,
    scale: 0,
    display: 'none',
    transition: {
      duration: 1,
    },
  }),
};

export default Servey;
