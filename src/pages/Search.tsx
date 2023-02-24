import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ui/ItemCard';
import { CgSearchLoading } from 'react-icons/cg';
import { GrSearchAdvanced } from 'react-icons/gr';
import { useQuery } from '@tanstack/react-query';
import { getSearchResult } from '../api/api';
import { Product, ProductsResponse } from '../@types/data';
import { getFilteredResults } from '../utils/getFilteredResults';
import SearchKeywords from '../components/search/SearchKeywords';
import { searchKeywords } from '../data/constant';
import SearchBox from '../components/search/SearchBox';

const Search = () => {
  const [input, setInput] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(true);
  const [bank, setBank] = useState({ title: '모든은행', value: '국민신한우리하나' });
  const [savingValue, setSavingValue] = useState<string>('예금적금');
  const [result, setResult] = useState<Product[]>([]);
  const [filteredResult, setFilteredResult] = useState<Product[]>([]);
  const [noResult, setNoResult] = useState(false);

  const { data, isLoading, refetch } = useQuery<ProductsResponse>(
    ['search', input],
    () => {
      if (!input) {
        setNoResult(false);
      } else {
        setResult([]);
        setFilteredResult([]);
      }
      return getSearchResult({ input, toggle });
    },
    {
      onSuccess(data) {
        setResult(data.content);
        if (data.empty) {
          setNoResult(true);
        }
      },
      refetchOnMount: false,
    },
  );

  useEffect(() => {
    const products = result;
    const bankValue = bank.value;
    const filtered = getFilteredResults({ products, bankValue, savingValue });
    if (!filtered.length) return setNoResult(true);
    setFilteredResult(filtered);
  }, [bank, savingValue]);

  useEffect(() => {
    refetch();
  }, [input, toggle, refetch]);

  useEffect(() => {
    if (result?.length !== 0 || filteredResult?.length !== 0) {
      setNoResult(false);
    }
  }, [result, filteredResult]);

  const bestResult = filteredResult.length !== 0 ? filteredResult : result;
  console.log(result);
  if (isLoading) return <p>로딩중</p>;
  return (
    <section className='mb-16'>
      <SearchBox
        setInput={setInput}
        bank={bank}
        setBank={setBank}
        savingValue={savingValue}
        setSavingValue={setSavingValue}
        toggle={toggle}
        setToggle={setToggle}
      />

      <div className='flex flex-col gap-3 mb-6'>
        {result ? (
          <div className='flex justify-between mx-1 text-sm'>
            <p>
              '<span className='text-base font-bold text-main-blue'>{` ${input} `} </span>' 검색 결과
            </p>
            <p>
              총 <span className='text-base font-bold text-main-blue'>{result?.length}</span> 건
            </p>
          </div>
        ) : (
          ''
        )}

        {noResult ? (
          <div className='flex flex-col items-center my-[20vh] text-base gap-2 text-gray font-bold'>
            <CgSearchLoading className='w-24 h-24 text-sub-gray mb-5' />
            <p>해당 검색 결과를 찾을 수 없습니다.</p>
            <p>다른 검색어나 조건으로 검색 해보시겠어요 ?</p>
          </div>
        ) : bestResult ? (
          bestResult.map(product => <ItemCard key={product.productId} product={product} />)
        ) : (
          <>
            <SearchKeywords>
              {searchKeywords.map((value, index) => (
                <li
                  key={index}
                  onClick={event => {
                    if (event.target instanceof HTMLElement) setInput(event.target.innerText);
                  }}
                  className='border border-main-blue border-solid py-2 px-3 rounded-2xl bg-opacity-50 cursor-pointer hover:bg-main-blue hover:text-white'
                >
                  {value}
                </li>
              ))}
            </SearchKeywords>

            <div className='flex flex-col items-center gap-5 h-fit my-20 opacity-40 font-bold'>
              <GrSearchAdvanced size={45} />
              <p>궁금하신 상품을 검색해보세요.</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Search;
