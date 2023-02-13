import React from 'react';
import 기업은행 from '../assets/bankicons/금융아이콘_PNG_IBK.png';

import { AiFillPlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ItemCard = () => {
  const navigate = useNavigate();

  return (
    <div className='h-36 w-full bg-white rounded-lg flex items-center px-9 '>
      <div className='h-20 w-20 rounded-full mr-8'>
        <img src={기업은행} alt='' />
      </div>
      <div className='text-gray flex flex-col gap-1 mr-20'>
        <p className='text-xl font-bold mb-2 leading-tight'>가계우대 정기적금 • 기업은행</p>
        <p className='text-base'>최고 연 4.0%</p>
        <p className='text-base'>최대한도 3000만원</p>
      </div>
      <button>
        <AiFillPlusCircle size={40} className='fill-main-blue' onClick={() => navigate('/detail/:id')} />
      </button>
    </div>
  );
};

export default ItemCard;
