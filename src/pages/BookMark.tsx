import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import items from '../assets/data.json';
import ItemCard from '../components/ItemCard';

const BookMark = () => {
  const handleDeleteClick = () => {
    // 삭제
    console.log('delete');
  };

  return (
    <section className='items-center justify-center'>
      <h1 className='flex px-7 pb-5 font-bold text-xl justify-center'>관심 상품</h1>
      <section className='flex flex-wrap text-xs font-base gap-3 text-main-white my-4'>
        {items &&
          items.data.map(item => {
            return (
              <section className='relative flex flex-row w-full gap-2'>
                <ItemCard key={item.id} item={item} />
                <MdDeleteForever
                  className='text-gray text-xl absolute top-2 right-2 cursor-pointer'
                  onClick={handleDeleteClick}
                />
              </section>
            );
          })}
      </section>
    </section>
  );
};

export default BookMark;
