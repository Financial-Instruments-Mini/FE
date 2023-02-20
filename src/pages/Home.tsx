import ItemCard from '../components/ItemCard';
import KeywordButton from '../components/KeywordButton';
import Slide from '../components/Slide';
import items from '../assets/data.json';
import ItemGallery from '../components/ui/ItemGallery';
import { getAllProducts } from '../api/api';
import { AllProductsResponse, Product } from '../@types/data';
import { AxiosError } from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const Home = () => {
  const keywords = ['전체', '주거래 우대', '청년 우대', '주택 청약', '노후 준비'];
  const [selectedKeyword, setSelectedKeyword] = useState('전체');
  const {
    data: InfiniteData,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam = 0 }) => getAllProducts(pageParam),
    getNextPageParam: lastData => {
      if (!lastData.last) {
        console.log(lastData.number);
        return lastData.number + 1;
      } else {
        return undefined;
      }
    },
  });
  console.log(InfiniteData);
  return (
    <>
      <div className='text-xl font-bold flex flex-col gap-3'>
        <span className='text-black'>
          안녕하세요.
          <span className='text-main-blue'>{` 강해경`}</span>님
        </span>
        <p>이런 상품은 어떠신가요?</p>
        {/* <span>로그인하고 상품추천 받으러 가기</span> */}
      </div>
      <Slide />
      <div className='flex flex-wrap text-xs  gap-2 text-main-white'>
        {keywords.map(keyword => (
          <KeywordButton
            key={keyword}
            keyword={keyword}
            selectedKeyword={selectedKeyword}
            setSelectedKeyword={setSelectedKeyword}
          />
        ))}
      </div>
      <div className='grid grid-cols-2 text-xs font-base gap-4 text-main-white my-4'>
        {InfiniteData &&
          InfiniteData.pages.map(products =>
            products.content.map(product => <ItemGallery key={product.productId} {...product} />),
          )}
      </div>
      <button
        onClick={() => fetchNextPage()}
        disabled={hasNextPage ? false : true}
        className={`w-fit block mx-auto text-sm text-gray cursor-pointer ${hasNextPage ? '' : '-mb-10'}`}
      >
        {hasNextPage ? '더보기' : '준비한 목록을 모두 불러왔습니다.'}
      </button>
    </>
  );
};

export default Home;
