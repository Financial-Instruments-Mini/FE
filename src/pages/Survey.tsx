import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SurveyCard from '../components/survey/SurveyCard';
import { options, boxVars } from '../data/constant';

const Survey = () => {
  const [visible, setVisible] = useState(0);
  const [surveyData, setSurveyData] = useState<string[]>([]);

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
