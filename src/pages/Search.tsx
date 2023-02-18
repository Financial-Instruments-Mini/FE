import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import DropDown from '../components/DropDown';
import SavingsButtons from '../components/SavingsButtons';
import ToggleButton from '../components/ToggleButton';

const Search = () => {
  const [input, setInput] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input);
    setInput('');
  };

  return (
    <>
      <div className='my-4 mx-5 flex justify-between items-center gap-1'>
        <DropDown />
        <form onSubmit={onSubmit} className='relative block w-3/4'>
          <button className='absolute right-0 inset-y-0 pr-5'>
            <BiSearchAlt2 size={25} className='fill-main-blue' />
          </button>
          <input
            type='search'
            className='block h-12 w-full rounded-full border-2 border-main-blue outline-none pl-5 pr-16 pb-[0.15rem] text-main-blue placeholder:text-main-gray '
            placeholder='검색어를 입력해 주세요.'
            value={input}
            onChange={event => setInput(event.target.value)}
          />
        </form>
      </div>

      <div className='my-4 mx-5 flex flex-wrap justify-between items-center gap-2'>
        <SavingsButtons />
        <ToggleButton />
      </div>
    </>
  );
};

export default Search;
