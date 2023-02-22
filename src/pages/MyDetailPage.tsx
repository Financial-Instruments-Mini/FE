import { useState, useEffect } from 'react';
import RadioQ from '../components/RadioQ';
import LittleTitle from '../components/LittleTitle';
import TestQ from '../components/TestQ';
import SelectQ from '../components/SelectQ';
import { useGetLoginDataApi } from '../api/useGetLoginDataApi';
import { IloginDataProps } from '../@types/IProps';

const MyDetailPage = () => {
  const [replace, setReplace] = useState(false);

  const { getLoginData } = useGetLoginDataApi({
    url: 'http://13.124.15.174:8080/api/v1/member',
    method: 'GET',
  });

  const [loginData, setLoginData] = useState(getLoginData?.data as IloginDataProps);
  useEffect(() => {
    if (loginData === undefined && getLoginData?.data !== undefined) {
      setLoginData(getLoginData?.data);
    }
  }, [getLoginData?.data]);

  const submit = () => {
    setReplace(!replace);
  };

  // console.log(loginData);

  return (
    <div>
      <LittleTitle title='나의 정보 보기' move='true' />
      <div className='bg-white m-7 rounded-xl -shadow-basic '>
        <div className='p-10'>
          <TestQ
            question='이메일'
            loginData={loginData}
            setLoginData={setLoginData}
            type='text'
            value={loginData?.email}
            name='email'
          />
          <TestQ
            question='비밀번호'
            name='password'
            loginData={loginData}
            value={loginData?.password}
            setLoginData={setLoginData}
            type='password'
            replace={replace}
            placeHolder='영어, 숫자, 특수문자 포함 8자 이상 12자 이하'
          />
          <TestQ
            question='이름'
            name='name'
            loginData={loginData}
            value={loginData?.name}
            setLoginData={setLoginData}
            type='text'
          />
          <TestQ
            question='생년월일'
            name='birthDate'
            loginData={loginData}
            value={loginData?.birthDate}
            setLoginData={setLoginData}
            type='text'
          />
          <TestQ
            question='전화번호'
            name='phoneNumber'
            loginData={loginData}
            value={loginData?.phoneNumber}
            setLoginData={setLoginData}
            type='text'
            placeHolder="'-'' 제외 입력"
            replace={replace}
          />
          <RadioQ
            question='상품'
            loginData={loginData}
            value={loginData?.productType}
            setLoginData={setLoginData}
            type='checkbox'
            replace={replace}
          />
          <SelectQ
            question='주거래은행'
            value={loginData?.bankName}
            loginData={loginData}
            setLoginData={setLoginData}
            replace={replace}
            name='bankName'
          />
          <SelectQ
            question='직업'
            value={loginData?.job}
            loginData={loginData}
            setLoginData={setLoginData}
            replace={replace}
            name='job'
          />
        </div>
        <div className='p-7 flex justify-center items-center'>
          <button
            type='button'
            onClick={submit}
            className='mb-7 bg-sub-green p-5 rounded-3xl -shadow-basic font-bold text-main-green hover:bg-main-green hover:text-sub-green'
          >
            {replace ? '수정 완료' : '내 정보 수정'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyDetailPage;
