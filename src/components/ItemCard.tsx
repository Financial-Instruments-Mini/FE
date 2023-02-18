// import React from 'react';
// import 국민 from '../assets/bankicons/금융아이콘_PNG_KB.png';
// import 신한 from '../assets/bankicons/금융아이콘_PNG_신한.png';
// import 우리 from '../assets/bankicons/금융아이콘_PNG_우리.png';
// import 하나 from '../assets/bankicons/금융아이콘_PNG_하나.png';

import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { IItemCardProps } from '../@types/IProps';
import { getImageUrl } from '../utils/getImageUrl';

const ItemCard = ({ item }: IItemCardProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // const [imgLink, setImgLink] = useState('');

  // const logos = [
  //   { img: 기업, name: '기업' },
  //   { img: 국민, name: '국민' },
  //   { img: 제일, name: '제일' },
  //   { img: 농협, name: '농협' },
  //   { img: 신한, name: '신한' },
  //   { img: 우리, name: '우리' },
  //   { img: 하나, name: '하나' },
  // ];

  // useEffect(() => {
  //   logos.map(logo => {
  //     console.log(logo.name === bankName, logo.img);
  //     return logo.name === bankName && setImgLink(logo.img);
  //   });
  // }, []);

  // useEffect(() => {
  //   logos.map(logo => {
  //     if (logo.name === bankName) {
  //       return setImgLink(logo.img);
  //     }
  //   });
  // }, []);

  const onClick = () => {
    if (location.pathname === '/mypage/mycart') {
      //삭제기능
    } else {
      navigate('/detail/:id');
    }
  };
  return (
    <div className='h-28 w-full bg-white rounded-lg flex items-center px-4 -shadow-basic'>
      <div className='basis-1/5 rounded-full m-auto opacity-90 flex justify-center items-center'>
        <img src={getImageUrl(item.bankName)} alt='' className='w-14 h-14' />
      </div>
      <div className='text-gray flex flex-col gap-1 m-auto pl-1 basis-3/5'>
        <p className='text-base font-bold mb-2 leading-tight'>{`${item.productName} `}</p>
        <p className='text-sm'>최고 연 4.0%</p>
        <p className='text-sm'>{item.joinWay}</p>
      </div>
      <button onClick={onClick} className='basis-1/12 flex justify-center'>
        {location.pathname === '/mypage/mycart' ? (
          <AiFillMinusCircle size={40} className='fill-main-yellow' />
        ) : (
          <AiFillPlusCircle size={40} className='fill-main-blue' />
        )}
      </button>
    </div>
  );
};

export default ItemCard;
