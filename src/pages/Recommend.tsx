import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecommendProducts } from '../api/api';
import ItemGallery from '../components/ui/ItemGallery';
import { RiEmotionSadLine } from 'react-icons/ri';
import { useCookies } from 'react-cookie';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../data/atoms';

const Recommend = () => {
  const navigate = useNavigate();
  const [noData, setNoData] = useState(false);
  const [token, setToken] = useCookies();
  const accessToken = token.accessToken;
  const userInfo = useRecoilValue(userInfoState);

  const { data: recommendProducts, isLoading } = useQuery(['recommend'], () => getRecommendProducts(accessToken), {
    onSuccess(data) {
      if (data?.empty) {
        setNoData(true);
      }
    },
  });

  return (
    <>
      <div className='text-xl font-bold flex flex-col gap-3 mb-3'>
        <span className='text-main-blue'>
          {userInfo.name}
          <span className='text-black'>님만을 위한 추천상품</span>
        </span>
        <p className='text-sm leading-4'>응해주신 설문을 기반으로 예적금 상품을 추천해 드립니다. </p>
      </div>
      <div className='grid grid-cols-1 gap-3'>
        {noData ? (
          <div className='mx-auto my-10'>
            <RiEmotionSadLine className='mx-auto opacity-50 fill-gray' size={100} />
            <div className='mx-auto mt-5 flex flex-col items-center gap-2 text-gray font-bold'>
              <p>죄송합니다.</p>
              <p>고객님께 맞는 추천상품이 없습니다.</p>
            </div>
          </div>
        ) : (
          recommendProducts &&
          recommendProducts.content.map(recommendProduct => (
            <ItemGallery key={recommendProduct.productId} {...recommendProduct} />
          ))
        )}
      </div>
      <button onClick={() => navigate('/survey')} className='block w-fit mx-auto mt-5 text-sm cursor-pointer'>
        {'설문 다시하고 다른상품 추천받기 →'}
      </button>
    </>
  );
};

export default Recommend;
