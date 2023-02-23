import { useEffect, useState } from 'react';

import DropDown from '../components/DropDown';
import ItemCard from '../components/ItemCard';
import LittleTitle from '../components/LittleTitle';
import SavingsButtons from '../components/SavingsButtons';
import ToggleButton from '../components/ToggleButton';
import { getApplyItemData } from '../api/api';
import { item } from '../@types/data';
import { IcartItem } from '../@types/IProps';

const MyCart = () => {
  const [savingValue, setSavingValue] = useState<string>('예금, 적금');
  const [toggle, setToggle] = useState<boolean>(true);
  const [bank, setBank] = useState({ title: '모든은행', value: '국민신한우리하나' });

  const [ress, setRess] = useState<item[]>();

  useEffect(() => {
    const cartData = () => {
      getApplyItemData(
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhQG5hdmVyLmNvbSIsImlzcyI6InRpY2NsZSIsImlhdCI6MTY3NzE1NzI3MiwiZXhwIjoxNjc3MTU5MDcyfQ.Ynnjr-VCMmmgYXVtSbrBORV-sqagNrcciaGXWTVeNlQ',
      ).then(appData => {
        appData.data.content.map((item: item) => {
          if (item.productType === '예금') {
            return (item.maxLimit = 0);
          } else {
            return (item.minimumAmount = 0);
          }
        });
        setRess(appData.data.content);
      });
    };

    cartData();
  }, []);

  // useEffect(() => {
  //   setRess([...ress]);
  //   // console.log(ress);
  // }, [ress]);

  console.log(ress);

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
        {toggle && ress !== undefined
          ? ress
              ?.filter(res => {
                return savingValue.includes(res.productType);
                console.log(res);
              })
              .filter(res => {
                return bank.value.includes(res.bankName);
              })
              // .sort((a, b) => {
              //   return b.rate - a.rate;
              // })
              .map(res => {
                return (
                  <div key={res.productId}>
                    <ItemCard
                      product={res}
                      setRess={setRess as React.Dispatch<React.SetStateAction<item[]>>}
                      ress={ress}
                    />
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
                    <ItemCard
                      product={res}
                      setRess={setRess as React.Dispatch<React.SetStateAction<item[]>>}
                      ress={ress}
                    />
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default MyCart;
