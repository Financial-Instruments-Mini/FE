import { useState, useEffect } from 'react';
import RadioQ from '../../components/mypage/RadioQ';
import LittleTitle from '../../components/ui/LittleTitle';
import TestQ from '../../components/mypage/TestQ';
import SelectQ from '../../components/mypage/SelectQ';
import { getLoginData, putLoginData } from '../../api/api';
import { useCookies } from 'react-cookie';

const MyDetailPage = () => {
  const [Token] = useCookies();

  const [replace, setReplace] = useState(false);
  const [submitData, setSubmitData] = useState(false);
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
          email: appData.email,
          password: '',
          name: appData.name,
          birthDate: appData.birthDate,
          phoneNumber: appData.phoneNumber,
          productType: appData.productType || '',
          bankName: appData.bankName || '',
          job: appData.job || '',
          accessToken: Token.accessToken,
        });
      });
    };

    loginData();
  }, []);

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
    if (userInfo?.productType.includes('예금') && userInfo?.productType.includes('적금')) {
      subData.productType = 'DEPOSIT_AND_SAVING';
    } else if (userInfo?.productType.includes('예금') && !userInfo?.productType.includes('적금')) {
      subData.productType = 'DEPOSIT';
    } else if (!userInfo?.productType.includes('예금') && userInfo?.productType.includes('적금')) {
      subData.productType = 'SAVING';
    } else subData.productType = '';

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
    Object.keys(myJob).map(job => {
      if (subData.job === '' && job === userInfo?.job) {
        subData.job = myJob[`${userInfo?.job}`];
      }
    });

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

    if (userInfo?.password !== undefined) {
      subData.password = userInfo.password;
    } else subData.password = '';

    if (userInfo?.phoneNumber !== undefined) {
      subData.phoneNumber = userInfo.phoneNumber;
    } else subData.phoneNumber = '';
  }, [userInfo, subData]);

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

  return (
    <div>
      <LittleTitle title='나의 정보 보기' move='true' />
      <div className='bg-white rounded-xl -shadow-basic '>
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
