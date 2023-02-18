import React, { useState, useEffect } from 'react';
import 기업 from '../assets/bankicons/금융아이콘_PNG_IBK.png';
import 국민 from '../assets/bankicons/금융아이콘_PNG_KB.png';
import 제일 from '../assets/bankicons/금융아이콘_PNG_SC제일.png';
import 농협 from '../assets/bankicons/금융아이콘_PNG_농협.png';
import 신한 from '../assets/bankicons/금융아이콘_PNG_신한.png';
import 우리 from '../assets/bankicons/금융아이콘_PNG_우리.png';
import 하나 from '../assets/bankicons/금융아이콘_PNG_하나.png';

import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { IitemCardsProps } from '../@types/IProps';

const ItemCard = ({ bankName, productName, maxRate }: IitemCardsProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [imgLink, setImgLink] = useState('');

  const logos = [
    { img: 기업, name: '기업' },
    { img: 국민, name: '국민' },
    { img: 제일, name: '제일' },
    { img: 농협, name: '농협' },
    { img: 신한, name: '신한' },
    { img: 우리, name: '우리' },
    { img: 하나, name: '하나' },
  ];

  // useEffect(() => {
  //   logos.map(logo => {
  //     console.log(logo.name === bankName, logo.img);
  //     return logo.name === bankName && setImgLink(logo.img);
  //   });
  // }, []);

  useEffect(() => {
    logos.map(logo => {
      if (logo.name === bankName) {
        return setImgLink(logo.img);
      }
    });
  }, []);

  const onClick = () => {
    if (location.pathname === '/mypage/mycart') {
      //삭제기능
    } else {
      navigate('/detail/:id');
    }
  };
  return (
    <div className='h-36 w-full bg-white rounded-lg flex items-center px-9 -shadow-basic'>
      <div className='h-20 w-20 rounded-full mr-8 opacity-90 shrink-0'>
        <img src={imgLink} alt='' />
      </div>
      <div className='text-gray flex flex-col gap-1 mr-20'>
        <p className='text-xl font-bold mb-2 leading-tight'>
          {productName} • {bankName}은행
        </p>
        <p className='text-base'>최고 연 {maxRate}%</p>
        <p className='text-base'>최대한도 3000만원</p>
      </div>
      <button onClick={onClick}>
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
