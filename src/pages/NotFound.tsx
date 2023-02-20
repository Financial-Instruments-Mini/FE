import React from 'react';

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>원하시는 페이지를 찾을 수 없습니다.</div>
      <div className='flex gap-3'>
        <button className='w-24 h-10 bg-gray rounded-2xl text-white'>이전 페이지</button>
        <button className='w-40 h-10 bg-main-green rounded-2xl text-white font-bod'>홈으로 이동</button>
      </div>
    </div>
  );
};

export default NotFound;
