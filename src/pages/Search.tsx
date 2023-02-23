import React, { useState, useEffect } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import DropDown from '../components/DropDown';
import SavingsButtons from '../components/SavingsButtons';
import ToggleButton from '../components/ToggleButton';
import ItemCard from '../components/ItemCard';
import { CgSearchLoading } from 'react-icons/cg';
import { GrSearchAdvanced } from 'react-icons/gr';
import { useQuery } from '@tanstack/react-query';
import { getSearchResult } from '../api/api';
import { useForm } from 'react-hook-form';
import { ISearchForm, Product, ProductsResponse } from '../@types/data';
import { getFilteredResults } from '../utils/getFilteredResults';
import SearchKeywords from '../components/ui/SearchKeywords';
import { searchKeywords } from '../constant';

const Search = () => {
  const { register, handleSubmit, reset } = useForm<ISearchForm>();
  const [input, setInput] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(true);
  const [bank, setBank] = useState({ title: '모든은행', value: 'KB신한우리하나' });
  const [savingValue, setSavingValue] = useState<string>('예금적금');
  const [result, setResult] = useState<Product[]>([]);
  const [filteredResult, setFilteredResult] = useState<Product[]>([]);
  const [noResult, setNoResult] = useState(false);

  const onValid = ({ input }: ISearchForm) => {
    setInput(input);
    reset();
  };

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

  if (isLoading) return <p>로딩중</p>;
  return (
    <section className='mb-16'>
      <div className='flex flex-wrap justify-between items-center gap-3'>
        <DropDown bank={bank} setBank={setBank} />
        <form onSubmit={handleSubmit(onValid)} className='relative w-auto grow flex'>
          <button className='absolute right-0 inset-y-0 pr-5'>
            <BiSearchAlt2 size={20} className='fill-main-blue' />
          </button>
          <input
            type='text'
            className='grow h-10 rounded-full border-2 border-main-blue outline-none pl-5 pb-[0.15rem] text-main-blue placeholder:text-main-gray'
            placeholder='검색어를 입력해 주세요'
            {...register('input')}
          />
        </form>
      </div>

      <div className='mt-3 mb-4 mx-2 flex flex-wrap justify-between items-center gap-2'>
        <SavingsButtons savingValue={savingValue} setSavingValue={setSavingValue} />
        <ToggleButton toggle={toggle} setToggle={setToggle} />
      </div>

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
            <div className='flex flex-col gap-3 bg-main-blue bg-opacity-10 p-4 rounded-2xl'>
              <h3 className='font-bold mb-1'>추천 검색어</h3>
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
            </div>
            <div className='flex flex-col items-center gap-5 h-fit my-20 opacity-40 font-bold'>
              <GrSearchAdvanced size={50} />
              <p>궁금하신 상품을 검색해보세요.</p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Search;
