import React, { useEffect, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import items from '../assets/data.json';
import ItemCard from '../components/ItemCard';

const BookMark = () => {
  const handleDeleteClick = () => {
    // 삭제
    console.log('delete');
  };

  const handleDeleteAllClick = () => {
    // 전체 삭제
    console.log('deleteAll');
  };

  return (
    <section className='relative items-center justify-center'>
      <section className='mb-7'>
        <h1 className='flex px-7 pb-5 font-bold text-xl justify-center'>관심 상품</h1>
        <button className='absolute right-0' onClick={handleDeleteAllClick}>
          전체삭제
        </button>
      </section>
      <section className='flex flex-wrap text-xs font-base gap-3 text-main-white mb-16'>
        {items &&
          items.data.map(item => {
            return (
              <section className='relative flex flex-row w-full gap-2'>
                <ItemCard key={item.id} product={item} />
                <MdDeleteForever
                  className='text-gray absolute top-2 right-2 cursor-pointer'
                  onClick={handleDeleteClick}
                  size='1.5rem'
                />
              </section>
            );
          })}
      </section>
    </section>
  );
};

export default BookMark;
