import React from 'react';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from './../components/ui/Button';

const Register = () => {
  const navigator = useNavigate();

  const LinkToLogin = () => {
    navigator('/login');
  };
  const LinkToRegister = () => {
    navigator('/register');
  };

  return (
    <div className='w-full'>
      <div className='w-full flex justify-center pt-10'>
        <Button text={'로그인'} select={false} onClick={LinkToLogin} />
        <div className='relative ml-5'>
          <Button text={'회원가입'} select={true} onClick={LinkToRegister} />
          <div className='absolute top-16 left-2/4 translate-x-[-50%] w-0 h-0 border-t-[15px] border-t-main-green border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-solid'></div>
        </div>
      </div>

      <div className='flex flex-col items-center mt-10 pt-14 pb-20 bg-white rounded-3xl -shadow-basic'>
        <p className='font-bold text-lg'>
          <span className='text-main-green'>회원가입</span>해서 금융 상품을 쇼핑해보세요!
        </p>
        <form className='w-full flex flex-col mt-12 mb-20 pl-16 pr-24 space-y-3'>
          <div className='w-full flex justify-between items-end'>
            <span className='mr-4 font-bold text-lg leading-8'>이메일</span>
            <input
              className='w-8/12 border-b border-b-black p-3 text-lg font-bold placeholder:font-bold placeholder:text-xs outline-none'
              type='email'
              placeholder='이메일'
            />
          </div>

          <div className='w-full flex justify-between items-end'>
            <span className='mr-4 font-bold text-lg leading-8'>비밀번호</span>
            <input
              className='w-8/12 border-b border-b-black p-3 text-lg font-bold placeholder:font-bold placeholder:text-xs outline-none'
              type='email'
              placeholder='영어, 숫자, 특수문자 포함 8자 이상 12자 이하'
            />
          </div>

          <div className='w-full flex justify-between items-end'>
            <span className='mr-4 font-bold text-lg leading-8'>비밀번호 확인</span>
            <input
              className='w-8/12 border-b border-b-black p-3 text-lg font-bold placeholder:font-bold placeholder:text-xs outline-none'
              type='email'
              placeholder='동일한 비밀번호를 입력해주세요'
            />
          </div>

          <div className='w-full flex justify-between items-end'>
            <span className='mr-4 font-bold text-lg leading-8'>이름</span>
            <input
              className='w-8/12 border-b border-b-black p-3 text-lg font-bold placeholder:font-bold placeholder:text-xs outline-none'
              type='email'
              placeholder='2자 이상 입력해주세요'
            />
          </div>

          <div className='w-full flex justify-between items-end'>
            <span className='mt-5 mr-4 font-bold text-lg leading-8'>성별</span>
            <p className='w-8/12 leading-8'>
              <label className='mr-8 font-bold' htmlFor='female'>
                <input
                  className='inline-flex justify-center items-center align-middle appearance-none w-4 h-4 border-2 rounded-full border-main-green after:hidden after:w-2 after:h-2 after:bg-main-green after:rounded-full checked:after:inline-block'
                  name='gender'
                  id='female'
                  type='radio'
                  value={'female'}
                />
                <span className='inline-block ml-2 align-middle'>여성</span>
              </label>
              <label className='font-bold' htmlFor='male'>
                <input
                  className='inline-flex justify-center items-center align-middle appearance-none w-4 h-4 border-2 rounded-full border-main-green after:hidden after:w-2 after:h-2 after:bg-main-green after:rounded-full checked:after:inline-block'
                  name='gender'
                  id='male'
                  type='radio'
                  value={'male'}
                />
                <span className='inline-block ml-2 align-middle'>남성</span>
              </label>
            </p>
          </div>

          <div className='w-full flex justify-between items-end'>
            <span className='mr-4 font-bold text-lg leading-8'>생년월일</span>
            <input
              className='w-8/12 border-b border-b-black p-3 text-lg font-bold placeholder:font-bold placeholder:text-xs outline-none'
              type='email'
              placeholder='숫자만 8글자 입력 (예. 19980606)'
            />
          </div>

          <div className='w-full flex justify-between items-end'>
            <span className='mr-4 font-bold text-lg leading-8'>전화번호</span>
            <input
              className='w-8/12 border-b border-b-black p-3 text-lg font-bold placeholder:font-bold placeholder:text-xs outline-none'
              type='email'
              placeholder='‘-’ 제외 11글자 이상 입력 (예. 01012345678)'
            />
          </div>

          <div className='pt-4'>
            <label className='mr-8 font-bold' htmlFor='agree'>
              <input
                className='inline-flex justify-center items-center align-middle appearance-none w-4 h-4 border-2 border-main-green after:hidden after:w-2 after:h-2 after:bg-main-green checked:after:inline-block'
                name='gender'
                id='agree'
                type='checkbox'
              />
              <span className='inline-block ml-2 align-middle text-sm'>(필수) 개인정보 제공 동의</span>
            </label>
          </div>
        </form>
        <Button text={'회원가입'} />
      </div>
    </div>
  );
};

export default Register;
