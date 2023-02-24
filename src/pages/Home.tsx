import KeywordButton from '../components/KeywordButton';
import Slide from '../components/Slide';
import ItemGallery from '../components/ui/ItemGallery';
import { getAllProducts, getKeywordProducts } from '../api/api';
import { Keyword } from '../@types/enum.d';
import { keywordProduct } from '../@types/data';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const keywords = Object.keys(Keyword) as Array<keyof typeof Keyword>;
  const [selectedKeyword, setSelectedKeyword] = useState<keyof typeof Keyword>('전체');
  const [keywordProducts, setKeywordProducts] = useState<keywordProduct[]>([]);

  const navigate = useNavigate();
  const isLogIn = true;

  const {
    data: InfiniteData,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam = 0 }) => getAllProducts(pageParam),
    getNextPageParam: lastData => {
      if (!lastData.last) {
        return lastData.number + 1;
      } else {
        return undefined;
      }
    },
  });

  useEffect(() => {
    if (selectedKeyword === '전체') return;
    getKeywordProducts(selectedKeyword).then(data => setKeywordProducts(data));
  }, [selectedKeyword]);

  return (
    <section className='mb-16'>
      <div className='text-xl font-bold flex flex-col gap-3'>
        <span className='text-black'>
          안녕하세요
          {isLogIn ? (
            <span className='text-main-blue'>{' 강해경'}님</span>
          ) : (
            <>
              {' tickle'}
              <span className='text-main-green'>{' + '}</span>입니다
            </>
          )}
        </span>
        {isLogIn ? (
          <p>이런 상품은 어떠신가요? </p>
        ) : (
          <p>
            <span
              className='text-main-green cursor-pointer'
              onClick={() => {
                navigate('/login');
              }}
            >
              {' 로그인'}
            </span>
            하러가기
          </p>
        )}
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
        {selectedKeyword === '전체' && InfiniteData
          ? InfiniteData?.pages.map(products =>
              products.content.map(product => <ItemGallery key={product.productId} {...product} />),
            )
          : keywordProducts.map(keywordProduct => (
              <ItemGallery key={keywordProduct.proId} {...keywordProduct} keyword={selectedKeyword} />
            ))}
      </div>
      <button
        onClick={() => fetchNextPage()}
        disabled={hasNextPage ? false : true}
        className={`w-fit block mx-auto text-sm text-gray cursor-pointer`}
      >
        {selectedKeyword === '전체' && hasNextPage ? '더보기' : ''}
      </button>
    </section>
  );
};

export default Home;
