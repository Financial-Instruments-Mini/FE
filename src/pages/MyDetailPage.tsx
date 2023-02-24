import { useState, useEffect } from 'react';
import RadioQ from '../components/RadioQ';
import LittleTitle from '../components/LittleTitle';
import TestQ from '../components/TestQ';
import SelectQ from '../components/SelectQ';
// import { IloginDataProps } from '../@types/IProps';
// import { useLoginApi } from '../api/useLoginApi';
import { getLoginData, putLoginData } from '../api/api';
import { useCookies } from 'react-cookie';
// import { usePushLoginData } from '../api/usePushLoginData';

const MyDetailPage = () => {
  const [replace, setReplace] = useState(false);
  const [Token] = useCookies();
  // console.log(Token);

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    name: '',
    birthDate: '',
    phoneNumber: '',
    productType: '',
    bankName: '',
    job: '',
    accessToken: '',
  });

  useEffect(() => {
    const loginData = () => {
      getLoginData(Token.accessToken).then(appData => {
        setUserInfo({
          //   ...userInfo,
          email: appData.email,
          password: '',
          name: appData.name,
          birthDate: appData.birthDate,
          phoneNumber: appData.phoneNumber,
          productType: appData.productType,
          bankName: appData.bankName,
          job: appData.job,
          accessToken: Token.accessToken,
        });
        // console.log(appData.data.email);
      });
    };

    loginData();
  }, []);
  console.log(Token.accessToken, userInfo);

  // console.log(userInfo);

  // const { loginData } = useLoginApi({
  //   url: 'https://www.ticcle.store:8080/api/v1/auth/login',
  //   method: 'POST',
  //   body: {
  //     email: 'a@naver.com',
  //     password: 'asdf123@',
  //   },
  // });

  // const [userInfo, setUserInfo] = useState(loginData?.data as IloginDataProps);
  // const [userInfo, setUserInfo] = useState(loginData())
  const [submitData, setSubmitData] = useState(false);

  // useEffect(() => {
  //   if (loginData() !== undefined) {
  //     setUserInfo({ ...loginData() });
  //   }
  // }, [loginData?.data]);

  const submit = async () => {
    await setReplace(!replace);
    await setSubmitData(!submitData);
  };

  const subData = {
    token: userInfo.accessToken,
    password: '',
    phoneNumber: '',
    productType: '',
    job: '',
    bankName: '',
  };

  useEffect(() => {
    // if (userInfo?.tokenDto.accessToken !== undefined) {
    //   subData.token = userInfo?.tokenDto.accessToken;
    // } else subData.token = '';

    if (userInfo?.productType.includes('예금') && userInfo?.productType.includes('적금')) {
      subData.productType = 'DEPOSIT_AND_SAVING';
    } else if (userInfo?.productType.includes('예금') && !userInfo?.productType.includes('적금')) {
      subData.productType = 'DEPOSIT';
    } else if (!userInfo?.productType.includes('예금') && userInfo?.productType.includes('적금')) {
      subData.productType = 'SAVING';
    } else subData.productType = '';

    // if (userInfo?.job === '회사원') {
    //   subData.job = 'OFFICE_WORKERS';
    // } else if (userInfo?.job === '공무원') {
    //   subData.job = 'PUBLIC_OFFICIAL';
    // } else if (userInfo?.job === '전문직') {
    //   subData.job = 'PROFESSION';
    // } else if (userInfo?.job === '농부') {
    //   subData.job = 'AGRICULTURAL_WORKER';
    // } else if (userInfo?.job === '사업가/자영업자') {
    //   subData.job = 'BUISNESSMAN';
    // } else if (userInfo?.job === '프리랜서') {
    //   subData.job = 'FREELANCER';
    // } else if (userInfo?.job === '주부') {
    //   subData.job = 'HOUSEWIFE';
    // } else if (userInfo?.job === '학생') {
    //   subData.job = 'STUDENT';
    // } else if (userInfo?.job === '군인') {
    //   subData.job = 'SOLDIER';
    // } else if (userInfo?.job === '무직') {
    //   subData.job = 'INOCCUPATION';
    // } else subData.job = '';

    // const myJobKeyWords = Object.keys(MyJob) as Array<keyof typeof MyJob>;
    // const a = myJobKeyWords.find(job => {
    //   return job === userInfo?.job;
    // });

    // console.log(a, MyJob[`${a}` as typeof MyJob]);
    // const {'회사원', '공무원', '전문직', '농부', '사업가/자영업자', '프리랜서', '주부', '학생', '군인', '무직'} = MyJob
    const myJob: { [key: string]: string } = {
      회사원: 'OFFICE_WORKERS',
      공무원: 'PUBLIC_OFFICIAL',
      전문직: 'PROFESSION',
      농부: 'AGRICULTURAL_WORKER',
      '사업가/자영업자': 'BUISNESSMAN',
      프리랜서: 'FREELANCER',
      주부: 'HOUSEWIFE',
      학생: 'STUDENT',
      군인: 'SOLDIER',
      무직: 'INOCCUPATION',
    };

    // console.log(MyJob[`${userInfo?.job}`]);

    // Object.keys(MyJob).find(job => {
    //   job === userInfo?.job && subData.job === '' ? (subData.job = MyJob[`${userInfo?.job}`]) : (subData.job = '');
    //   console.log(job, userInfo?.job, job === userInfo?.job);
    //   console.log(subData.job);
    // });

    Object.keys(myJob).map(job => {
      if (subData.job === '' && job === userInfo?.job) {
        subData.job = myJob[`${userInfo?.job}`];
      }
    });
    // console.log(subData.job);

    // let jobKey;
    // Object.keys(MyJob).map(job => {
    //   job === userInfo?.job ? (jobKey = job) : (jobKey = '');
    //   console.log(jobKey);
    // });
    // Object.values(MyJob).map(job => {
    //   job === jobKey ? (subData.job = job) : (subData.job = '');
    //   console.log(job, jobKey);
    // });

    // if()

    const myBankName: { [key: string]: string } = {
      국민: 'KOOK_MIN',
      신한: 'SHIN_HAN',
      우리: 'WOO_RIE',
      하나: 'HA_NA',
    };

    Object.keys(myBankName).map(bank => {
      if (subData.bankName === '' && bank === userInfo?.bankName) {
        subData.bankName = myBankName[`${userInfo?.bankName}`];
      }
    });

    // if (userInfo?.bankName === '국민') {
    //   subData.bankName = 'KOOK_MIN';
    // } else if (userInfo?.bankName === '신한') {
    //   subData.bankName = 'SHIN_HAN';
    // } else if (userInfo?.bankName === '우리') {
    //   subData.bankName = 'WOO_RIE';
    // } else if (userInfo?.bankName === '하나') {
    //   subData.bankName = 'HA_NA';
    // } else subData.bankName = '';

    if (userInfo?.password !== undefined) {
      subData.password = userInfo.password;
    } else subData.password = '';

    if (userInfo?.phoneNumber !== undefined) {
      subData.phoneNumber = userInfo.phoneNumber;
    } else subData.phoneNumber = '';
  }, [userInfo, subData]);

  console.log(subData);

  if (
    !replace &&
    submitData &&
    userInfo.password.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,12}/g) === null
  ) {
    alert('비밀번호는 영어, 숫자, 특수문자 포함 8자 이상 12자 이하로 입력해주세요');
    setReplace(true);
    setSubmitData(true);
  }

  if (
    !replace &&
    submitData &&
    userInfo.phoneNumber.replace(/[^0-9]/g, '').match(/^(\d{2,3})(\d{3,4})(\d{4})$/g) === null
  ) {
    alert('전화번호를 올바르게 입력해주세요.');
    setReplace(true);
    setSubmitData(true);
  }

  const option =
    !replace && submitData
      ? subData
      : { token: '', password: '', phoneNumber: '', productType: '', job: '', bankName: '' };

  useEffect(() => {
    const putlogData = () => {
      putLoginData(option).then(appData => {
        console.log(appData);
      });
    };
    putlogData();
  }, [option]);

  // console.log(option);

  // usePushLoginData(option);

  // console.log(replace, submitData);

  return (
    <div>
      <LittleTitle title='나의 정보 보기' move='true' />
      <div className='bg-white m-7 rounded-xl -shadow-basic '>
        <div className='p-10'>
          <TestQ
            question='이메일'
            loginData={userInfo}
            setLoginData={setUserInfo}
            type='text'
            value={userInfo?.email}
            name='email'
          />
          <TestQ
            question='비밀번호'
            loginData={userInfo}
            setLoginData={setUserInfo}
            type='password'
            value={userInfo?.password}
            name='password'
            replace={replace}
            placeHolder='영어, 숫자, 특수문자 포함 8자 이상 12자 이하'
          />
          <TestQ
            question='이름'
            loginData={userInfo}
            setLoginData={setUserInfo}
            type='text'
            value={userInfo?.name}
            name='name'
          />
          <TestQ
            question='생년월일'
            loginData={userInfo}
            setLoginData={setUserInfo}
            type='text'
            value={userInfo?.birthDate}
            name='birthDate'
          />
          <TestQ
            question='전화번호'
            loginData={userInfo}
            setLoginData={setUserInfo}
            type='text'
            value={userInfo?.phoneNumber}
            name='phoneNumber'
            replace={replace}
            placeHolder="'-'' 제외 입력"
          />
          <RadioQ
            question='상품'
            loginData={userInfo}
            setLoginData={setUserInfo}
            value={userInfo?.productType}
            replace={replace}
          />
          <SelectQ
            question='주거래은행'
            loginData={userInfo}
            setLoginData={setUserInfo}
            value={userInfo?.bankName}
            name='bankName'
            replace={replace}
          />
          <SelectQ
            question='직업'
            loginData={userInfo}
            setLoginData={setUserInfo}
            value={userInfo?.job}
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
