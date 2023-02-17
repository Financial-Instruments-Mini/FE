import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/ui/MainButton';

const Login = () => {
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
        <div className='relative mr-5'>
          <MainButton text={'로그인'} select={true} onClick={LinkToLogin} />
          <div className='absolute top-16 left-2/4 translate-x-[-50%] w-0 h-0 border-t-[15px] border-t-main-green border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-solid'></div>
        </div>
        <MainButton text={'회원가입'} select={false} onClick={LinkToRegister} />
      </div>

      <div className='flex flex-col items-center mt-10 pt-14 pb-20 bg-white rounded-3xl -shadow-basic'>
        <p className='font-bold text-lg'>
          <span className='text-main-green'>로그인</span>해서 금융 상품을 쇼핑해보세요!
        </p>
        <form className='flex flex-col my-20'>
          <input
            className='border-b border-b-black p-3 text-lg font-bold placeholder:font-bold outline-none'
            type='email'
            placeholder='이메일'
          />
          <input
            className='border-b border-b-black p-3 text-lg font-bold placeholder:font-bold outline-none'
            type='password'
            placeholder='비밀번호'
          />
        </form>
        <MainButton text={'로그인'} />
      </div>
    </div>
  );
};

export default Login;
