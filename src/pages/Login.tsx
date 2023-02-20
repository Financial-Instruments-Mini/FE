import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/ui/MainButton';
import { useForm } from 'react-hook-form';
import { ILoginForm } from './../@types/IProps.d';

const Login = () => {
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const LinkToLogin = () => {
    navigator('/login');
  };
  const LinkToRegister = () => {
    navigator('/register');
  };

  const onValid = (data: ILoginForm) => {
    console.log(data);
  };

  return (
    <div className='w-full mb-20'>
      <div className='w-full flex justify-center pt-10 space-x-2'>
        <MainButton text={'로그인'} select={true} page='login/register' onClick={LinkToLogin} />
        <MainButton text={'회원가입'} select={false} onClick={LinkToRegister} />
      </div>

      <div className='flex flex-col items-center mt-10 pt-14 pb-20 px-3 bg-white rounded-3xl -shadow-basic'>
        <p className='font-bold'>
          <span className='text-main-green'>로그인</span>해서 금융 상품을 쇼핑해보세요!
        </p>

        <form onSubmit={handleSubmit(onValid)} className='flex flex-col items-center my-20 space-y-2'>
          <div className='w-10/12 flex flex-col'>
            <input
              {...register('email', {
                required: '이메일을 입력해주세요',
                pattern: {
                  // eslint-disable-next-line
                  value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                  message: '올바른 이메일을 입력해주세요',
                },
              })}
              className='w-full border-b border-b-black p-3 text-lg font-bold placeholder:font-bold outline-none'
              type='email'
              placeholder='이메일'
            />
            <span className='mt-2 text-xs text-gray'>{errors.email?.message}</span>
          </div>

          <div className='w-10/12 flex flex-col'>
            <input
              {...register('password', {
                required: '비밀번호를 입력해주세요',
                pattern: {
                  value: /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,12}$/,
                  message: '올바른 비밀번호를 입력해주세요',
                },
              })}
              className='w-full border-b border-b-black p-3 text-lg font-bold placeholder:font-bold outline-none'
              type='password'
              placeholder='비밀번호'
            />
            <span className='mt-2 text-xs text-gray'>{errors.password?.message}</span>
          </div>
        </form>

        <MainButton text={'로그인'} onClick={handleSubmit(onValid)} />
      </div>
    </div>
  );
};

export default Login;
