import React from 'react';
import { AiFillMinusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { IItemCardProps } from '../../@types/IProps';
import { getImageUrl } from '../../utils/getImageUrl';
import { BsBookmark } from 'react-icons/bs';

const ItemGallery = ({ item }: IItemCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate('/detail/:id');
      }}
      className='bg-white rounded-lg flex flex-col justify-between items-center px-4 py-5 -shadow-basic cursor-pointer text-gray gap-5 hover:opacity-70 relative'
    >
      <img src={getImageUrl(item.bankName)} alt='은행로고' className='w-14 h-14' />
      <p className='text-center align-middle h-4 w-full text-sm font-bold leading-4 px-1'>{`${item.productName} `}</p>
      <div className='flex flex-col items-center gap-1'>
        <p className='text-xs'>최고 연 {item.interestList[1].rate}%</p>
        <p className='text-xs'>{item.joinWay}</p>
      </div>
      <BsBookmark size={20} className='absolute right-3 top-3 fill-sub-gray' />
    </div>
  );
};

export default ItemGallery;
