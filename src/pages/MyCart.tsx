import { useState } from 'react';

import DropDown from '../components/DropDown';
import ItemCard from '../components/ItemCard';
import LittleTitle from '../components/LittleTitle';
import SavingsButtons from '../components/SavingsButtons';
import ToggleButton from '../components/ToggleButton';
import { useProductData } from '../assets/useProductData';

const MyCart = () => {
  const [savingValue, setSavingValue] = useState<string>('DEPOSIT, SAVING');
  const [sortValue, setSortValue] = useState(true);

  const { ress, setRess } = useProductData('http://localhost:4000/data');

  console.log(ress);

  return (
    <div>
      <LittleTitle title='신청한 상품 내역 보기' move='true' />
      <div>
        <div className='my-4 mx-5 flex flex-wrap justify-between items-center gap-2'>
          <SavingsButtons savingValue={savingValue} setSavingValue={setSavingValue} />
          <ToggleButton />
          <DropDown />
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
        {ress
          ?.filter(res => {
            return savingValue.includes(res.productType);
          })
          .map(res => {
            return (
              <div key={res.id}>
                <ItemCard item={res} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MyCart;

// {
//   ress?.map(res => {
//     return (
//       <div id={res.content}>
//         <ItemCard bankName={res.bankName} productName={res.productName} maxRate={res.interestList[1].rate} />
//       </div>
//     );
//   });
// }
