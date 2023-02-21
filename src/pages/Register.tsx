import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/ui/MainButton';
import { useForm } from 'react-hook-form';
import { IRegisterForm } from '../@types/IProps';
import RegisterInput from './../components/ui/RegisterInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Register = () => {
  const navigator = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      // eslint-disable-next-line no-useless-escape
      .matches(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, '이메일 형식에 맞지 않습니다.')
      .required('이메일을 입력해주세요.'),
    password: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(/^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,12}$/, '비밀번호 조합기준에 적합하지 않습니다.'),
    passwordCheck: yup
      .string()
      .required('비밀번호를 한번 더 입력해주세요.')
      .oneOf([yup.ref('password'), ''], '비밀번호가 일치하지 않습니다.'),
    name: yup.string().required('이름을 입력해주세요.').min(2, '최소 2자 이상 입력해주세요'),
    birthDay: yup
      .string()
      .required('생년월일을 입력해주세요.')
      .matches(/^[0-9]{8}$/, '8글자를 입력해주세요.'),
    phoneNumber: yup
      .string()
      .required('전화번호를 입력해주세요.')
      .min(11, '11글자 이상 입력해주세요.')
      .max(12, '12글자 이하 입력해주세요.'),
    agree: yup.boolean().oneOf([true], '체크를 해주셔야 회원가입이 가능합니다.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(schema),
  });

  const LinkToLogin = () => {
    navigator('/login');
  };
  const LinkToRegister = () => {
    navigator('/register');
  };

  const onValid = (data: IRegisterForm) => {
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
          <RegisterInput
            title='이메일'
            name='email'
            text='이메일'
            type='email'
            register={register}
            errorMessege={errors.email?.message}
          />
          <RegisterInput
            title='비밀번호'
            name='password'
            text='영어, 숫자, 특수문자 포함 8~12자 입력'
            type='password'
            register={register}
            errorMessege={errors.password?.message}
          />
          <RegisterInput
            title='비밀번호 확인'
            name='passwordCheck'
            text='동일한 비밀번호를 입력해주세요'
            type='password'
            register={register}
            errorMessege={errors.passwordCheck?.message}
          />
          <RegisterInput
            title='이름'
            name='name'
            text='2자 이상 입력해주세요'
            register={register}
            errorMessege={errors.name?.message}
          />
          <RegisterInput
            title='생년월일'
            name='birthDay'
            text='‘-’ 제외 8글자 입력 (예. 19980606)'
            type='number'
            register={register}
            errorMessege={errors.birthDay?.message}
          />
          <RegisterInput
            title='전화번호'
            name='phoneNumber'
            text='‘-’ 제외 8글자 입력 (예. 19980606)'
            type='number'
            register={register}
            errorMessege={errors.phoneNumber?.message}
          />

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
