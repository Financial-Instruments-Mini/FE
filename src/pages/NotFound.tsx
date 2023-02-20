import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCommentError } from 'react-icons/bi';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center h-fit gap-5'>
      <BiCommentError className='fill-main-blue w-36 h-36 mt-28' />
      <div className='font-bold text-xl'>원하시는 페이지를 찾을 수 없습니다.</div>
      <div className='flex flex-col items-center gap-2 text-sm'>
        <p>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.</p>
        <p>입력하신 주소가 정확한지 다시 한 번 확인해주세요.</p>
      </div>
      <div className='flex gap-3'>
        <button onClick={() => navigate(-1)} className='w-28 h-10 bg-sub-gray rounded-2xl text-white'>
          이전 페이지
        </button>
        <button onClick={() => navigate('/')} className='w-40 h-10 bg-main-blue rounded-2xl text-white font-bold'>
          홈으로 이동
        </button>
      </div>
    </div>
  );
};

export default NotFound;
