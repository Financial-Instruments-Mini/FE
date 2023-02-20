import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import DropDown from '../components/DropDown';
import SavingsButtons from '../components/SavingsButtons';
import ToggleButton from '../components/ToggleButton';
import ItemCard from '../components/ItemCard';
import { CgSearchLoading } from 'react-icons/cg';

const Search = () => {
  const [input, setInput] = useState('');
  const [toggle, setToggle] = useState<boolean>(true);
  const [bank, setBank] = useState({ title: '모든은행', value: 'KB신한우리하나' });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input);
    setInput('');
  };

  return (
    <>
      <div className='m-2 flex flex-wrap justify-between items-center gap-3'>
        <DropDown bank={bank} setBank={setBank} />
        <form onSubmit={onSubmit} className='relative w-auto grow flex'>
          <button className='absolute right-0 inset-y-0 pr-5'>
            <BiSearchAlt2 size={20} className='fill-main-blue' />
          </button>
          <input
            type='search'
            className='grow h-10 rounded-full border-2 border-main-blue outline-none pl-5 pb-[0.15rem] text-main-blue placeholder:text-main-gray'
            placeholder='검색어를 입력해 주세요.'
            value={input}
            onChange={event => setInput(event.target.value)}
          />
        </form>
      </div>

      <div className='my-4 mx-3 flex flex-wrap justify-between items-center gap-2'>
        <SavingsButtons />
        <ToggleButton toggle={toggle} setToggle={setToggle} />
      </div>

      {/* <div className='flex flex-col gap-3 m-2'>
        {items && items.data.map(item => <ItemCard key={item.id} item={item} />)}
      </div> */}
      <div className='flex flex-col items-center my-[20vh] text-base gap-2 text-gray font-bold'>
        <CgSearchLoading className='w-24 h-24 text-sub-gray mb-5' />
        <p>검색 결과를 찾을 수 없습니다.</p>
        <p>다른 검색어로 검색 해보시겠어요 ?</p>
      </div>
    </>
  );
};

export default Search;
