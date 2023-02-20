import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/ui/MainButton';
import { useForm } from 'react-hook-form';
import { IRegisterForm } from '../@types/IProps';
import RegisterInput from './../components/ui/RegisterInput';

const Register = () => {
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IRegisterForm>();

  const LinkToLogin = () => {
    navigator('/login');
  };
  const LinkToRegister = () => {
    navigator('/register');
  };

  const onValid = (data: IRegisterForm) => {
    if (data.password !== data.passwordCheck || data.password === '') {
      setError('passwordCheck', { message: '동일한 비밀번호를 입력해주세요' }, { shouldFocus: true });
    }
    console.log(data);
    navigator('/survey');
  };

  return (
    <div className='w-full mb-20'>
      <div className='w-full flex justify-center pt-10 space-x-2'>
        <MainButton text={'로그인'} select={false} onClick={LinkToLogin} />
        <MainButton text={'회원가입'} select={true} page='login/register' onClick={LinkToRegister} />
      </div>

      <div className='flex flex-col items-center mt-10 py-14 bg-white rounded-3xl -shadow-basic'>
        <p className='font-bold'>
          <span className='text-main-green'>회원가입</span>해서 금융 상품을 쇼핑해보세요!
        </p>

        <form onSubmit={handleSubmit(onValid)} className='w-full flex flex-col items-center mt-12 mb-12 space-y-3'>
          {/* <RegisterInput register={register} errors={errors} /> */}
          <div className='w-10/12 flex justify-between items-center'>
            <span className='font-bold text-sm'>이메일</span>
            <div className='w-[60%] flex flex-col justify-end'>
              <input
                {...register('email', {
                  required: '이메일을 입력해주세요',
                  pattern: {
                    // eslint-disable-next-line
                    value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                    message: '올바른 이메일을 입력해주세요',
                  },
                })}
                className='border-b border-b-black p-2 text-sm font-bold placeholder:font-bold placeholder:text-[0.625rem] outline-none'
                type='email'
                placeholder='이메일'
              />
              <span className='h-3 mt-2 text-xs text-gray'>{errors.email?.message}</span>
            </div>
          </div>

          <div className='w-10/12 flex justify-between items-center'>
            <span className='font-bold text-sm'>비밀번호</span>
            <div className='w-[60%] flex flex-col justify-end'>
              <input
                {...register('password', {
                  required: '비밀번호를 입력해주세요',
                  pattern: {
                    value: /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,12}$/,
                    message: '올바른 비밀번호를 입력해주세요',
                  },
                })}
                className='w-full border-b border-b-black p-2 text-sm font-bold placeholder:font-bold placeholder:text-[0.625rem] outline-none'
                type='password'
                placeholder='영어, 숫자, 특수문자 포함 8~12자 입력'
              />
              <span className='h-3 mt-2 text-xs text-gray'>{errors.password?.message}</span>
            </div>
          </div>

          <div className='w-10/12 flex justify-between items-center'>
            <span className='font-bold text-sm'>비밀번호 확인</span>
            <div className='w-[60%] flex flex-col justify-end'>
              <input
                {...register('passwordCheck', {
                  required: '비밀번호를 한번 더 입력해주세요',
                  pattern: {
                    value: /^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,12}$/,
                    message: '올바른 비밀번호를 입력해주세요',
                  },
                })}
                className='w-full border-b border-b-black p-2 text-sm font-bold placeholder:font-bold placeholder:text-[0.625rem] outline-none'
                type='password'
                placeholder='동일한 비밀번호를 입력해주세요'
              />
              <span className='h-3 mt-2 text-xs text-gray'>{errors.passwordCheck?.message}</span>
            </div>
          </div>

          <div className='w-10/12 flex justify-between items-center'>
            <span className='font-bold text-sm'>이름</span>
            <div className='w-[60%] flex flex-col justify-end'>
              <input
                {...register('name', {
                  required: '이름을 입력해주세요',
                  minLength: {
                    value: 2,
                    message: '최소 2자 이상 입력해주세요',
                  },
                })}
                className='w-full border-b border-b-black p-2 text-sm font-bold placeholder:font-bold placeholder:text-[0.625rem] outline-none'
                type='text'
                placeholder='2자 이상 입력해주세요'
              />
              <span className='h-3 mt-2 text-xs text-gray'>{errors.name?.message}</span>
            </div>
          </div>

          <div className='w-10/12 flex justify-between items-center'>
            <span className='font-bold text-sm'>생년월일</span>
            <div className='w-[60%] flex flex-col justify-end'>
              <input
                {...register('birthDay', {
                  required: '생년월일을 입력해주세요',
                  minLength: {
                    value: 8,
                    message: '8글자를 입력해주세요',
                  },
                  maxLength: {
                    value: 8,
                    message: '8글자를 입력해주세요',
                  },
                })}
                className='w-full border-b border-b-black p-2 text-sm font-bold placeholder:font-bold placeholder:text-[0.625rem] outline-none'
                type='number'
                placeholder='‘-’ 제외 8글자 입력 (예. 19980606)'
              />
              <span className='h-3 mt-2 text-xs text-gray'>{errors.birthDay?.message}</span>
            </div>
          </div>

          <div className='w-10/12 flex justify-between items-center'>
            <span className='pb-3 font-bold text-sm'>전화번호</span>
            <div className='w-[60%] flex flex-col justify-end'>
              <input
                {...register('phoneNumber', {
                  required: '전화번호를 입력해주세요',
                  minLength: {
                    value: 11,
                    message: '11글자 이상 입력해주세요',
                  },
                  maxLength: {
                    value: 12,
                    message: '12글자 이하 입력해주세요',
                  },
                })}
                className='w-full border-b border-b-black p-2 text-sm font-bold placeholder:font-bold placeholder:text-[0.625rem] outline-none'
                type='number'
                placeholder='‘-’ 제외 11글자 이상 입력 (예. 01012345678)'
              />
              <span className='h-3 mt-2 text-xs text-gray'>{errors.phoneNumber?.message}</span>
            </div>
          </div>

          <div className='w-full pt-4 flex flex-col items-center'>
            <label className='mr-8 font-bold' htmlFor='agree'>
              <input
                {...register('agree', { required: '체크를 해주셔야 회원가입이 가능합니다' })}
                className='inline-flex justify-center items-center align-middle appearance-none w-3 h-3 border-2 border-main-green after:hidden after:w-1 after:h-1 after:bg-main-green checked:after:inline-block'
                name='agree'
                id='agree'
                type='checkbox'
              />
              <span className='inline-block ml-2 align-middle text-xs'>(필수) 개인정보 제공 동의</span>
            </label>
            <span className='h-1 mt-2 pl-3 text-xs text-gray'>{errors.agree?.message}</span>
          </div>
        </form>

        <MainButton text={'회원가입'} onClick={handleSubmit(onValid)} />
      </div>
    </div>
  );
};

export default Register;
