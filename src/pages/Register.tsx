import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainButton from '../components/ui/MainButton';
import { useForm } from 'react-hook-form';
import RegisterInput from './../components/ui/RegisterInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IRegisterForm } from './../@types/data.d';
import { signUp } from '../api/api';
import { useCookies } from 'react-cookie';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isLogInState, userInfoState } from '../data/atoms';

const Register = () => {
  const navigator = useNavigate();
  const [, setAccessToken] = useCookies();
  const [isLogIn, setIsLogIn] = useRecoilState(isLogInState);
  const setUserInfo = useSetRecoilState(userInfoState);

  useEffect(() => {
    if (isLogIn) {
      alert('로그인 상태입니다. 회원가입을 하시려면 로그아웃을 먼저 해주세요.');
      navigator('/');
    }
  }, []);

  const schema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
        '이메일 형식에 맞지 않습니다.',
      )
      .required('이메일을 입력해주세요.'),
    password: yup
      .string()
      .trim()
      .required('비밀번호를 입력해주세요.')
      .matches(/^(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,12}$/, '비밀번호 조합기준에 적합하지 않습니다.'),
    passwordCheck: yup
      .string()
      .trim()
      .required('비밀번호를 한번 더 입력해주세요.')
      .oneOf([yup.ref('password'), ''], '비밀번호가 일치하지 않습니다.'),
    name: yup.string().required('이름을 입력해주세요.').min(2, '최소 2자 이상 입력해주세요'),
    birthDate: yup
      .string()
      .trim()
      .required('생년월일을 입력해주세요.')
      .matches(/^\d{8}$/, '숫자만 8글자로 입력해주세요.'),
    phoneNumber: yup
      .string()
      .trim()
      .required('전화번호를 입력해주세요.')
      .matches(/^\d{11,12}$/, '숫자만 11글자로 입력해주세요.'),
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

  const onValid = async (data: IRegisterForm) => {
    const { email, password, name, phoneNumber, birthDate } = data;
    const payload = { email, password, name, phoneNumber, birthDate };

    const res = await signUp(payload);

    // access, refresh 를 둘 다 쿠키에 저장하여 시간 설정
    if (res.success) {
      setIsLogIn(true);
      const { email, phoneNumber, name, birthDate, productType, job, bankName } = res.data;
      setUserInfo({ email, phoneNumber, name, birthDate, productType, job, bankName });
      setAccessToken('accessToken', res.data.tokenDto.accessToken, { maxAge: 60 * 30 });
      setAccessToken('refreshToken', res.data.tokenDto.refreshToken, { maxAge: 60 * 60 * 24 * 14 });
      navigator('/survey');
    } else {
      alert('회원가입에 실패했습니다.');
    }
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

        <form onSubmit={handleSubmit(onValid)} className='w-full flex flex-col items-center mt-12 space-y-3'>
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
            name='birthDate'
            text='‘-’ 제외 8글자 입력 (예. 19980606)'
            type='number'
            register={register}
            errorMessege={errors.birthDate?.message}
          />
          <RegisterInput
            title='전화번호'
            name='phoneNumber'
            text='‘-’ 제외 11글자 입력 (예. 01012345678)'
            type='number'
            register={register}
            errorMessege={errors.phoneNumber?.message}
          />

          <div className='w-full pt-4 flex flex-col items-center'>
            <label className='mr-8 font-bold' htmlFor='agree'>
              <input
                {...register('agree', { required: '체크를 해주셔야 회원가입이 가능합니다' })}
                className='inline-flex justify-center items-center align-middle appearance-none w-3 h-3 border-2 border-main-green after:hidden after:w-1 after:h-1 after:bg-main-green checked:after:inline-block outline-none'
                name='agree'
                id='agree'
                type='checkbox'
              />
              <span className='inline-block ml-2 align-middle text-xs'>(필수) 개인정보 제공 동의</span>
            </label>
            <span className='h-1 mt-2 pl-3 text-xs text-gray'>{errors.agree?.message}</span>
          </div>

          <div className='w-full flex justify-center pt-10'>
            <MainButton type='submit' text='회원가입' onClick={handleSubmit(onValid)} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
