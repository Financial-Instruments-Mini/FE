import React from 'react';
import LittleTitle from '../components/LittleTitle';
import 기업은행 from '../assets/bankicons/금융아이콘_PNG_IBK.png';

const DetailItem = () => {
  return (
    <main>
      <LittleTitle title='상세 정보' />
      <section className='h-fit w-full bg-white border-solid border-2 border-main-green rounded-lg relative'>
        <header className='flex justify-center mt-10'>
          <article className='h-20 w-20 rounded-full mr-8 opacity-75'>
            <img src={기업은행} alt='' />
          </article>
          <article>
            <h1 className='text-gray flex flex-col gap-1'>
              <p className='text-xl font-bold mb-2 leading-tight'>가계우대 정기적금 • 기업은행</p>
              <p className='text-base'>최고 연 4.0%</p>
              <p className='text-base'>최대한도 3000만원</p>
            </h1>
          </article>
        </header>
        <section className='text-gray mt-10 p-10 flex flex-col'>
          <p>
            상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
            정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
            상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
            정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
            상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
            정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
            상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
          </p>
          <button className='mt-20'>버튼 컴포넌트</button>
        </section>
      </section>
    </main>
  );
};

export default DetailItem;
