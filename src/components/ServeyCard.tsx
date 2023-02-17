import React from 'react';

interface IServeyCardPops {
  text: number;
}

const ServeyCard = ({ text }: IServeyCardPops) => {
  return (
    <div className='w-[98%] flex flex-col items-center justify-center pt-14 pb-20 bg-white rounded-3xl -shadow-basic'>
      ServeyCard {text}
    </div>
  );
};

export default ServeyCard;
