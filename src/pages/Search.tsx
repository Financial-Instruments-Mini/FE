import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import DropDown from '../components/DropDown';
import SavingsButtons from '../components/SavingsButtons';
import ToggleButton from '../components/ToggleButton';
import ItemCard from '../components/ItemCard';
import { useProductData } from '../api/useProductData';

const Search = () => {
  const [input, setInput] = useState('');
  const [toggle, setToggle] = useState<boolean>(true);
  const [bank, setBank] = useState({ title: '모든은행', value: 'KB신한우리하나' });
  const { ress, setRess } = useProductData('http://localhost:4000/data');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input);
    setInput('');
  };

  return (
    <>
      <div className='m-2 flex flex-wrap justify-between items-center gap-3'>
        <DropDown />
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

      <div className='flex flex-col gap-3 m-2'>
        {ress ? (
          ress.map(item => (
            <div key={item.id}>
              <ItemCard item={item} />
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Search;
