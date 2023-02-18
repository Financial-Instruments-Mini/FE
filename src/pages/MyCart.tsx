import { useState, useEffect } from 'react';
import axios from 'axios';
import { IDatasProps } from '../@types/IProps';
import DropDown from '../components/DropDown';
import ItemCard from '../components/ItemCard';
import LittleTitle from '../components/LittleTitle';
import SavingsButtons from '../components/SavingsButtons';
import ToggleButton from '../components/ToggleButton';

const MyCart = () => {
  const [ress, setRess] = useState<IDatasProps[]>();
  const [savingValue, setSavingValue] = useState<string>('DEPOSIT, SAVING');

  const useGetData = (url: string) => {
    useEffect(() => {
      console.log(url);
      try {
        axios.get(url).then(response => {
          setRess(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    }, [url]);
  };

  useGetData('http://localhost:4000/data');
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
        <button type='button' className='bg-main-blue text-white p-3 mr-5 rounded-3xl'>
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
              <div id={res.content}>
                <ItemCard bankName={res.bankName} productName={res.productName} maxRate={res.interestList[1].rate} />
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
