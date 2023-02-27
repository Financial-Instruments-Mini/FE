import MainImg from '../assets/images/register_success_img.png';
import MainButton from './../components/ui/MainButton';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../data/atoms';
import { useCookies } from 'react-cookie';
import { putSurveyInfo } from '../api/api';
import { IToTalSelectState } from './../@types/data.d';

const EndRegister = () => {
  const {
    state: { surveyData },
  } = useLocation();
  const userInfo = useRecoilValue(userInfoState);
  const [token] = useCookies();

  useState(() => {
    if (surveyData) {
      const findProductType = surveyData.filter((i: IToTalSelectState) => i.type === 'productType');
      const productType =
        findProductType.length === 2
          ? '예금_적금'
          : surveyData.find((i: IToTalSelectState) => i.type === 'productType');
      const bankName = surveyData.find((i: IToTalSelectState) => i.type === 'bankName');
      const job = surveyData.find((i: IToTalSelectState) => i.type === 'job');

      const payload = {
        productType: productType && productType.content,
        job: job && job.content,
        bankName: bankName && bankName.content,
      };

      putSurveyInfo(payload, token.accessToken);
    }
  });

  return (
    <div className='w-full mb-20'>
      {surveyData && surveyData.length !== 0 ? (
        <div className='text-center space-y-10 font-bold'>
          <img src={MainImg} alt='success img' />
          <p>
            <span className='text-main-green'>{userInfo.name}</span> 님 반갑습니다!
          </p>
          <p className='text-xs break-words leading-5'>
            <span className='text-main-green'>추천상품</span> 메뉴로 들어가시면 회원님이 선택하신 정보들로 상품을
            추천해드려요
          </p>
          <div className='w-full mt-14 flex flex-wrap justify-center gap-3'>
            {surveyData.map((data: IToTalSelectState, index: number) => (
              <MainButton key={index} text={data.content} select={true} page='success' />
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
