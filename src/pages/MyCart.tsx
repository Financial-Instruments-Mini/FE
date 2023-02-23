import { useState } from 'react';

import DropDown from '../components/DropDown';
import ItemCard from '../components/ItemCard';
import LittleTitle from '../components/LittleTitle';
import SavingsButtons from '../components/SavingsButtons';
import ToggleButton from '../components/ToggleButton';
import { useProductData } from '../api/useProductData';

const MyCart = () => {
  const [savingValue, setSavingValue] = useState<string>('DEPOSIT, SAVING');
  const [toggle, setToggle] = useState<boolean>(true);
  const [bank, setBank] = useState({ title: '모든은행', value: 'KB신한우리하나' });

  const { ress, setRess } = useProductData('http://localhost:4000/data');

  // console.log(ress);

  return (
    <div>
      <LittleTitle title='신청한 상품 내역 보기' move='true' />
      <div>
        <div className='my-4 mx-5 flex flex-wrap justify-between items-center gap-2'>
          <SavingsButtons savingValue={savingValue} setSavingValue={setSavingValue} />
          <ToggleButton toggle={toggle} setToggle={setToggle} />
          <DropDown bank={bank} setBank={setBank} />
        </div>
      </div>
      <div className='flex justify-end'>
        <button
          type='button'
          className='bg-main-blue text-white p-3 mr-5 rounded-3xl'
          onClick={() => {
            setRess([]);
          }}
        >
          전체삭제
        </button>
      </div>
      <div className='p-5 flex flex-col gap-5'>
        {toggle
          ? ress
              ?.filter(res => {
                return savingValue.includes(res.productType);
              })
              .filter(res => {
                return bank.value.includes(res.productName.split(' ')[0]);
              })
              .sort((a, b) => {
                return b.interestList[1].rate - a.interestList[1].rate;
              })
              .map(res => {
                return (
                  <div key={res.id}>
                    <ItemCard product={res} setRess={setRess} ress={ress} />
                  </div>
                );
              })
          : ress
              ?.filter(res => {
                return savingValue.includes(res.productType);
              })
              .filter(res => {
                return bank.value.includes(res.productName.split(' ')[0]);
              })
              .sort((a, b) => {
                const dayA = a.productMakeDay;
                const dayB = b.productMakeDay;
                return (dayB as string) < (dayA as string) ? -1 : 1;
              })
              .map(res => {
                return (
                  <div key={res.id}>
                    <ItemCard product={res} setRess={setRess} ress={ress} />
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default MyCart;
