import MainImg from '../assets/images/register_success_img.png';
import MainButton from './../components/ui/MainButton';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../data/atoms';
import { useCookies } from 'react-cookie';
import { putSurveyInfo } from '../api/api';

const EndRegister = () => {
  const { state } = useLocation();
  const userInfo = useRecoilValue(userInfoState);
  const [token] = useCookies();

  useState(() => {
    console.log(state.surveyData, userInfo);
    const productType = state.surveyData.includes('예금') && state.surveyData.includes('적금') ? '예금_적금' : '';
    const bankName = state.surveyData.length === 4 ? state.surveyData[2] : state.surveyData[1];
    const job = state.surveyData.length === 4 ? state.surveyData[3] : state.surveyData[2];
    const accessToken = token.accessToken;
    console.log({ productType, job, bankName }, accessToken);
    putSurveyInfo({ productType, job, bankName }, accessToken);
  });

  return (
    <div className='w-full mb-20'>
      {state && state.surveyData.length !== 0 ? (
        <div className='text-center space-y-10 font-bold'>
          <img src={MainImg} alt='success img' />
          <p>
            <span className='text-main-green'>{userInfo.name}</span> 회원님 반갑습니다
          </p>
          <p className='text-xs break-words leading-5'>
            <span className='text-main-green'>추천상품</span> 메뉴로 들어가시면 회원님이 선택하신 정보들로 상품을
            추천해드려요
          </p>
          <div className='w-full mt-14 flex flex-wrap justify-center gap-3'>
            {state.surveyData.map((data: string, index: number) => (
              <MainButton key={index} text={data} select={true} page='success' />
            ))}
          </div>
        </div>
      ) : (
        <div className='text-center space-y-10 font-bold'>
          <img src={MainImg} alt='success img' />
          <p className='text-center'>
            <span className='text-main-green'>{userInfo.name}</span> 회원님 반갑습니다
          </p>
          <p className='flex flex-col items-center leading-6 text-xs'>
            <span>앗! 추천상품을 선택하지 않으셨군요!</span>
            <span>고객님만의 추천상품이 궁금하시다면 언제든 회원 정보 수정 페이지에서 선택이 가능합니다! </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default EndRegister;
