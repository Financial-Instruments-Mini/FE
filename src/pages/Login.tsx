import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/ui/MainButton';
import { useForm } from 'react-hook-form';
import LoginInput from './../components/ui/LoginInput';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { logIn } from '../api/api';
import { useCookies } from 'react-cookie';
import { ILoginForm } from './../@types/data.d';
import { useRecoilState } from 'recoil';
import { isLogInState, userInfoState } from './../data/atoms';

const Login = () => {
  const navigator = useNavigate();
  const [Token, setToken] = useCookies();

  const [isLogIn, setIsLogIn] = useRecoilState(isLogInState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const navigate = useNavigate();

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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  });

  const LinkToLogin = () => {
    navigator('/login');
  };
  const LinkToRegister = () => {
    navigator('/register');
  };

  const onValid = async (data: ILoginForm) => {
    const res = await logIn(data.email, data.password);
    const { email, phoneNumber, name, birthDate, productType, job, bankName } = res.data;

    // access, refresh 를 둘 다 쿠키에 저장하여 시간 설정
    if (res.success) {
      setToken('accessToken', res.data.tokenDto.accessToken, { maxAge: 60 * 30 });
      setToken('refreshToken', res.data.tokenDto.refreshToken, { maxAge: 60 * 60 * 24 * 14 });
      setIsLogIn(true);
      setUserInfo({ email, phoneNumber, name, birthDate, productType, job, bankName });
      navigate('/');
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
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
          <LoginInput
            name='email'
            text='이메일'
            type='email'
            register={register}
            errorMessege={errors.email?.message}
          />
          <LoginInput
            name='password'
            text='비밀번호'
            type='password'
            register={register}
            errorMessege={errors.password?.message}
          />
        </form>

        <MainButton text={'로그인'} onClick={handleSubmit(onValid)} />
      </div>
    </div>
  );
};

export default Login;
