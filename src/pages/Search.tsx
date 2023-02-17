import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import DropDown from '../components/DropDown';
import SavingsButtons from '../components/SavingsButtons';
import ToggleButton from '../components/ToggleButton';
import items from '../assets/data.json';
import ItemCard from '../components/ItemCard';

const Search = () => {
  const [input, setInput] = useState('');
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input);
    setInput('');
  };

  return (
    <>
      <div className='my-2 flex justify-between items-center gap-1'>
        <DropDown />
        <form onSubmit={onSubmit} className='relative block w-72'>
          <button className='absolute right-0 inset-y-0 pr-5'>
            <BiSearchAlt2 size={20} className='fill-main-blue' />
          </button>
          <input
            type='search'
            className='block h-10 w-full rounded-full border-2 border-main-blue outline-none pl-5 pr-16 pb-[0.15rem] text-main-blue placeholder:text-main-gray '
            placeholder='검색어를 입력해 주세요.'
            value={input}
            onChange={event => setInput(event.target.value)}
          />
        </form>
      </div>

      <div className='my-4 mx-3 flex flex-wrap justify-between items-center gap-2'>
        <SavingsButtons />
        <ToggleButton />
      </div>

      <div className='flex flex-col gap-3'>{items ? items.map(item => <ItemCard item={item} />) : <div></div>}</div>
    </>
  );
};

export default Search;
