import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SurveyCard from '../components/survey/SurveyCard';
import { options, boxVars } from '../data/constant';
import { editMemberInfo } from '../api/api';
import { useCookies } from 'react-cookie';
import { userInfoState } from './../data/atoms';
import { useRecoilState } from 'recoil';
import { BankName } from '../@types/enum';

const Survey = () => {
  const [visible, setVisible] = useState(0);
  const [surveyData, setSurveyData] = useState<string[]>([]);
  const [token, setToken] = useCookies();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  console.log(userInfo);

  useEffect(() => {
    const bn: keyof typeof BankName = '우리은행';
    const payload = { productType: userInfo.productType, job: userInfo.job, bankName: bn };
    editMemberInfo(payload, token.accessToken).then(data => console.log(data));
  }, []);

  console.log('선택한 설문 조사 폼:', surveyData);

  return (
    <div className='mb-20 flex flex-col justify-center items-center overflow-hidden'>
      <p className='my-16 text-lg font-bold'>
        상품을 <span className='text-main-green'>추천</span>받고 싶다면 선택해주세요!
      </p>
      <div className='w-full flex items-center justify-center'>
        <AnimatePresence>
          {options.map((item, index) =>
            index === visible ? (
              <motion.div
                className='w-full flex items-center justify-center'
                variants={boxVars}
                initial='initial'
                animate='animate'
                exit='exit'
                key={index}
              >
                <SurveyCard
                  {...item}
                  order={index}
                  setVisible={setVisible}
                  surveyData={surveyData}
                  setSurveyData={setSurveyData}
                />
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Survey;
