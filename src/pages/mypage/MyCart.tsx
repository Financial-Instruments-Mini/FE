import { useEffect, useState } from 'react';
import DropDown from '../../components/ui/DropDown';
import ItemCard from '../../components/ui/ItemCard';
import LittleTitle from '../../components/ui/LittleTitle';
import SavingsButtons from '../../components/ui/SavingsButtons';
import { getApplyItemData } from '../../api/api';
import { item } from '../../@types/data';
import { useCookies } from 'react-cookie';

const MyCart = () => {
  const [Token] = useCookies();
  const [savingValue, setSavingValue] = useState<string>('예금, 적금');
  const [bank, setBank] = useState({ title: '모든은행', value: '국민신한우리하나' });
  const [ress, setRess] = useState<item[]>();

  useEffect(() => {
    const cartData = () => {
      getApplyItemData(Token.accessToken).then(appData => {
        const data = appData.data.content.filter((content: item, index: number) => {
          return (
            appData.data.content.findIndex((content2: item) => {
              return content.productId === content2.productId;
            }) === index
          );
        });
        console.log(data);

        data.map((item: item) => {
          if (item.productType === '예금') {
            return (item.maxLimit = 0);
          } else {
            return (item.minimumAmount = 0);
          }
        });
        setRess(data);
      });
    };

    cartData();
  }, []);
  console.log(ress);

  return (
    <div>
      <LittleTitle title='신청한 상품 내역 보기' move='true' />
      <div>
        <div className='my-4 mx-5 flex flex-wrap justify-between items-center gap-2'>
          <SavingsButtons savingValue={savingValue} setSavingValue={setSavingValue} />
          <DropDown bank={bank} setBank={setBank} />
        </div>
      </div>
      <div className='mb-10 p-5 flex flex-col gap-5'>
        {ress !== undefined &&
          ress
            ?.filter(res => {
              return savingValue.includes(res.productType) && bank.value.includes(res.bankName);
            })
            .map(res => {
              return (
                <div key={res.productName + res.productId}>
                  <ItemCard
                    product={res}
                    setRess={setRess as React.Dispatch<React.SetStateAction<item[]>>}
                    ress={ress}
                    Token={Token}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};
export default MyCart;
