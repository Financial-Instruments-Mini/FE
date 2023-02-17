import React from 'react';
import DropDown from '../components/DropDown';
import ItemCard from '../components/ItemCard';
import LittleTitle from '../components/LittleTitle';
import SavingsButtons from '../components/SavingsButtons';
import ToggleButton from '../components/ToggleButton';
import items from '../assets/data.json';

const MyCart = () => {
  return (
    <div>
      <LittleTitle title='신청한 상품 내역 보기' move='true' />
      <div>
        <div className='my-4 mx-5 flex flex-wrap justify-between items-center gap-2'>
          <SavingsButtons />
          <ToggleButton />
          <DropDown />
        </div>
      </div>
      <div className='p-5 flex flex-col gap-5'>
        {items && items.map(item => <ItemCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default MyCart;
