import { useEffect, useState } from 'react';
import DropDown from '../components/DropDown';
import ItemCard from '../components/ItemCard';
import LittleTitle from '../components/LittleTitle';
import SavingsButtons from '../components/SavingsButtons';
import ToggleButton from '../components/ToggleButton';
import { getApplyItemData } from '../api/api';
import { item } from '../@types/data';
const MyCart = () => {
  const [savingValue, setSavingValue] = useState<string>('예금, 적금');
  const [toggle, setToggle] = useState<boolean>(true);
  const [bank, setBank] = useState({ title: '모든은행', value: '국민신한우리하나' });
  const [ress, setRess] = useState<item[]>([
    {
      productId: 0,
      bankName: '',
      productType: '',
      productName: '',
      maxLimit: 0,
      minimumAmount: 0,
      dueDate: 0,
      rate: 0,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const cartData = () => {
      setIsLoading(true);
      getApplyItemData(
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGtAbmF2ZXIuY29tIiwiaXNzIjoidGljY2xlIiwiaWF0IjoxNjc3MTU0NDIwLCJleHAiOjE2NzcxNTYyMjB9.508HATRUNE2O9mlTlpKTkrk2tXmbEuvk0oLL4VxSkOw',
      ).then(appData => {
        appData.data.content.map((item: item) => {
          if (item.productType === '예금') {
            item.maxLimit = 0;
          } else {
            item.minimumAmount = 0;
          }
        });
        setRess(appData.data.content);
        setIsLoading(false);
      });
    };
    cartData();
  }, []);
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
      {/* <div className='flex justify-end'>
        <button
          type='button'
          className='bg-main-blue text-white p-3 mr-5 rounded-3xl'
          onClick={() => {
            setRess([]);
          }}
        >
          전체삭제
        </button>
      </div> */}
      <div className='p-5 flex flex-col gap-5'>
        {toggle
          ? ress
              ?.filter(res => {
                console.log(ress);
                return savingValue.includes(res.productType);
              })
              .filter(res => {
                console.log(ress);
                return bank.value.includes(res.bankName);
              })
              // .sort((a, b) => {
              //   return b.rate - a.rate;
              // })
              .map(res => {
                console.log(ress);
                return (
                  <div key={res.productId}>
                    <ItemCard product={res} setRess={setRess} ress={ress} />
                  </div>
                );
              })
          : ress
              ?.filter(res => {
                return savingValue.includes(res.productType);
              })
              .filter(res => {
                return bank.value.includes(res.bankName);
              })
              // .sort((a, b) => {
              //   const dayA = a.productMakeDay;
              //   const dayB = b.productMakeDay;
              //   return (dayB as string) < (dayA as string) ? -1 : 1;
              // })
              .map(res => {
                return (
                  <div key={res.productId}>
                    <ItemCard product={res} setRess={setRess} ress={ress} />
                  </div>
                );
              })}
      </div>
    </div>
  );
};
export default MyCart;
