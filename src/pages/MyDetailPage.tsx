import { useState, useEffect } from 'react';
import RadioQ from '../components/RadioQ';
import LittleTitle from '../components/LittleTitle';
import TestQ from '../components/TestQ';
import SelectQ from '../components/SelectQ';
import { IloginDataProps } from '../@types/IProps';
import { useLoginApi } from '../api/useLoginApi';
import { usePushLoginData } from '../api/usePushLoginData';
// import { usePushLoginData } from '../api/usePushLoginData';

const MyDetailPage = () => {
  const [replace, setReplace] = useState(false);

  const { loginData } = useLoginApi({
    url: 'https://www.ticcle.store:8080/api/v1/auth/login',
    method: 'POST',
    body: {
      email: 'a@naver.com',
      password: 'asdf123@',
    },
  });

  const [accToken, setAccToken] = useState(loginData?.data as IloginDataProps);
  const [submitData, setSubmitData] = useState(false);

  useEffect(() => {
    if (loginData?.data !== undefined) {
      setAccToken({ ...loginData?.data });
    }
  }, [loginData?.data]);

  const submit = async () => {
    await setReplace(!replace);
    await setSubmitData(!submitData);
  };

  const subData = {
    token: '',
    body: {
      password: '',
      phoneNumber: '',
      productType: '',
      job: '',
      bankName: '',
    },
  };

  useEffect(() => {
    // if (accToken?.tokenDto.accessToken !== undefined) {
    //   subData.token = accToken?.tokenDto.accessToken;
    // } else subData.token = '';

    if (accToken?.productType.includes('예금') && accToken?.productType.includes('적금')) {
      subData.body.productType = 'DEPOSIT_AND_SAVING';
    } else if (accToken?.productType.includes('예금') && !accToken?.productType.includes('적금')) {
      subData.body.productType = 'DEPOSIT';
    } else if (!accToken?.productType.includes('예금') && accToken?.productType.includes('적금')) {
      subData.body.productType = 'SAVING';
    } else subData.body.productType = '';

    if (accToken?.job === '회사원') {
      subData.body.job = 'OFFICE_WORKERS';
    } else if (accToken?.job === '공무원') {
      subData.body.job = 'PUBLIC_OFFICIAL';
    } else if (accToken?.job === '전문직') {
      subData.body.job = 'PROFESSION';
    } else if (accToken?.job === '농부') {
      subData.body.job = 'AGRICULTURAL_WORKER';
    } else if (accToken?.job === '사업가/자영업자') {
      subData.body.job = 'BUISNESSMAN';
    } else if (accToken?.job === '프리랜서') {
      subData.body.job = 'FREELANCER';
    } else if (accToken?.job === '주부') {
      subData.body.job = 'HOUSEWIFE';
    } else if (accToken?.job === '학생') {
      subData.body.job = 'STUDENT';
    } else if (accToken?.job === '군인') {
      subData.body.job = 'SOLDIER';
    } else if (accToken?.job === '무직') {
      subData.body.job = 'INOCCUPATION';
    } else subData.body.job = '';

    if (accToken?.bankName === '국민') {
      subData.body.bankName = 'KOOK_MIN';
    } else if (accToken?.bankName === '신한') {
      subData.body.bankName = 'SHIN_HAN';
    } else if (accToken?.bankName === '우리') {
      subData.body.bankName = 'WOO_RIE';
    } else if (accToken?.bankName === '하나') {
      subData.body.bankName = 'HA_NA';
    } else subData.body.bankName = '';

    if (accToken?.password !== undefined) {
      subData.body.password = accToken.password;
    } else subData.body.password = '';

    if (accToken?.phoneNumber !== undefined) {
      subData.body.phoneNumber = accToken.phoneNumber;
    } else subData.body.phoneNumber = '';
  }, [accToken, subData]);

  if (
    !replace &&
    submitData &&
    accToken.password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,12}/g) === null
  ) {
    alert('비밀번호는 영어, 숫자, 특수문자 포함 8자 이상 12자 이하로 입력해주세요');
    setReplace(true);
    setSubmitData(true);
  }

  if (
    !replace &&
    submitData &&
    accToken.phoneNumber.replace(/[^0-9]/g, '').match(/^(\d{2,3})(\d{3,4})(\d{4})$/g) === null
  ) {
    alert('전화번호를 올바르게 입력해주세요.');
    setReplace(true);
    setSubmitData(true);
  }

  const option = !submitData
    ? {
        url: 'https://www.ticcle.store:8080/api/v1/member',
        method: 'PUT',
        token: accToken?.tokenDto.accessToken,
        body: subData.body,
      }
    : {
        url: '',
        method: 'PUT',
        token: '',
        body: subData.body,
      };

  usePushLoginData(option);

  // console.log(replace, submitData);

  return (
    <div>
      <LittleTitle title='나의 정보 보기' move='true' />
      <div className='bg-white m-7 rounded-xl -shadow-basic '>
        <div className='p-10'>
          <TestQ
            question='이메일'
            loginData={accToken}
            setLoginData={setAccToken}
            type='text'
            value={accToken?.email}
            name='email'
          />
          <TestQ
            question='비밀번호'
            loginData={accToken}
            setLoginData={setAccToken}
            type='password'
            value={accToken?.password}
            name='password'
            replace={replace}
            placeHolder='영어, 숫자, 특수문자 포함 8자 이상 12자 이하'
          />
          <TestQ
            question='이름'
            loginData={accToken}
            setLoginData={setAccToken}
            type='text'
            value={accToken?.name}
            name='name'
          />
          <TestQ
            question='생년월일'
            loginData={accToken}
            setLoginData={setAccToken}
            type='text'
            value={accToken?.birthDate}
            name='birthDate'
          />
          <TestQ
            question='전화번호'
            loginData={accToken}
            setLoginData={setAccToken}
            type='text'
            value={accToken?.phoneNumber}
            name='phoneNumber'
            replace={replace}
            placeHolder="'-'' 제외 입력"
          />
          <RadioQ
            question='상품'
            loginData={accToken}
            setLoginData={setAccToken}
            value={accToken?.productType}
            replace={replace}
          />
          <SelectQ
            question='주거래은행'
            loginData={accToken}
            setLoginData={setAccToken}
            value={accToken?.bankName}
            name='bankName'
            replace={replace}
          />
          <SelectQ
            question='직업'
            loginData={accToken}
            setLoginData={setAccToken}
            value={accToken?.job}
            name='job'
            replace={replace}
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
