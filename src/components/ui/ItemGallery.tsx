import React from 'react';
import { AiFillMinusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { IItemGalleryProps } from '../../@types/IProps';
import { getImageUrl } from '../../utils/getImageUrl';
import { BsBookmark } from 'react-icons/bs';
import { Product } from '../../@types/data';

const ItemGallery = ({ bankName, productName, maxRate, productType, keyword }: IItemGalleryProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate('/detail/:id');
      }}
      className='bg-white rounded-lg flex flex-col justify-between items-center px-4 py-5 -shadow-basic cursor-pointer text-gray gap-5 hover:opacity-70 relative'
    >
      <img src={getImageUrl(bankName)} alt='은행로고' className='w-14 h-14 mb-1' />
      <div className='flex flex-col justify-center h-fit'>
        <p className='text-center align-middle w-full text-sm font-bold leading-4'>{`${productName} `}</p>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <p className='text-xs'>
          {`최고 연 `}
          <span className='text-base font-bold'>{maxRate}</span>
          {` %`}
        </p>
        <p className='text-xxs bg-sub-gray p-1 rounded-full px-2 text-white font-thin'>{productType || keyword}</p>
      </div>
      {/* <BsBookmark size={20} className='absolute right-3 top-3 fill-sub-gray' onClick={() => console.log('북마크')} /> */}
    </div>
  );
};

export default ItemGallery;
