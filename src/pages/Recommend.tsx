import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecommendProducts } from '../api/api';
import ItemGallery from '../components/ui/ItemGallery';

const Recommend = () => {
  const navigate = useNavigate();
  const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraGtAbmF2ZXIuY29tIiwiaXNzIjoidGljY2xlIiwiaWF0IjoxNjc3MDYzODA3LCJleHAiOjE2NzcwNjU2MDd9.l0je7IE5mPEN_vzVZKZWUZnpwUJjPMepIqszwq7d1hg';

  const { data: recommendProducts, isLoading } = useQuery(['recommend'], () => getRecommendProducts(accessToken));

  console.log(recommendProducts);
  return (
    <>
      <div className='text-xl font-bold flex flex-col gap-3 mb-3'>
        <span className='text-main-blue'>
          {`강해경 `}
          <span className='text-black'>님만을 위한 추천상품</span>
        </span>
        <p className='text-sm leading-4'>응해주신 설문을 기반으로 예적금 상품을 추천해 드립니다. </p>
      </div>
      <div className='grid grid-cols-1 gap-3'>
        {recommendProducts && recommendProducts.content.map(recommendProduct => <ItemGallery {...recommendProduct} />)}
      </div>
      <button onClick={() => navigate('/survey')} className='block w-fit mx-auto mt-5 text-sm text-gray cursor-pointer'>
        {'설문 다시하고 다른상품 추천받기 →'}
      </button>
    </>
  );
};

export default Recommend;
