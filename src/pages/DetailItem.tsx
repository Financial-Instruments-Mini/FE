import React from 'react';
import LittleTitle from '../components/LittleTitle';
import 기업은행 from '../assets/bankicons/금융아이콘_PNG_IBK.png';
import MainButton from '../components/ui/MainButton';

const DetailItem = () => {
  return (
    <main>
      <LittleTitle title='상세 정보' />
      <section className='h-fit w-full mt-10 pt-10 bg-white -shadow-basic rounded-3xl justify-center'>
        <header className='flex mt-10 '>
          <article className='h-20 w-20 rounded-full mr-8 opacity-75 justify-start ml-20'>
            <img src={기업은행} alt='' />
          </article>
          <article className='justify-end ml-10'>
            <h1 className='text-gray flex flex-col gap-1'>
              <p className='text-xl font-bold mb-2 leading-tight'>가계우대 정기적금</p>
              <p className='font-bold mb-2'>기업은행</p>
              <p className='text-base'>최고 연 4.0%</p>
              <p className='text-base'>최대한도 3000만원</p>
            </h1>
          </article>
        </header>
        <section className='text-gray p-20 flex flex-col items-center'>
          <p className='mb-20'>
            상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
            정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
            상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
            정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
            상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
            정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보
            상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세 정보 상세
          </p>
          <MainButton text={'신청하기'} />
        </section>
      </section>
    </main>
  );
};

export default DetailItem;
