import React from 'react';
import 기업은행 from '../assets/bankicons/금융아이콘_PNG_IBK.png';
import 국민은행 from '../assets/bankicons/금융아이콘_PNG_KB.png';
import 제일은행 from '../assets/bankicons/금융아이콘_PNG_SC제일.png';
import 농협은행 from '../assets/bankicons/금융아이콘_PNG_농협.png';
import 신한은행 from '../assets/bankicons/금융아이콘_PNG_신한.png';
import 우리은행 from '../assets/bankicons/금융아이콘_PNG_우리.png';
import 하나은행 from '../assets/bankicons/금융아이콘_PNG_하나.png';

import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';

const ItemCard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = () => {
    if (location.pathname === '/mycart') {
      //삭제기능
    } else {
      navigate('/detail/:id');
    }
  };
  return (
    <div className='h-36 w-full bg-white rounded-lg flex items-center px-9 '>
      <div className='h-20 w-20 rounded-full mr-8 opacity-75'>
        <img src={기업은행} alt='' />
      </div>
      <div className='text-gray flex flex-col gap-1 mr-20'>
        <p className='text-xl font-bold mb-2 leading-tight'>가계우대 정기적금 • 기업은행</p>
        <p className='text-base'>최고 연 4.0%</p>
        <p className='text-base'>최대한도 3000만원</p>
      </div>
      <button onClick={onClick}>
        {location.pathname === '/mycart' ? (
          <AiFillMinusCircle size={40} className='fill-main-yellow' />
        ) : (
          <AiFillPlusCircle size={40} className='fill-main-blue' />
        )}
      </button>
    </div>
  );
};

export default ItemCard;
