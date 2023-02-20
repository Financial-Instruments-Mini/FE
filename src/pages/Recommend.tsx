import React from 'react';

const Recommend = () => {
  return (
    <>
      <div className='text-xl font-bold flex flex-col gap-3'>
        <span className='text-main-blue'>
          {`강해경 `}
          <span className='text-black'>님 만을 위한 추천상품</span>
        </span>
        <p className='text-sm'>이런 상품은 어떠신가요?</p>
      </div>
    </>
  );
};

export default Recommend;
