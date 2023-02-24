import React from 'react';
import { ISelectQProps } from '../@types/IProps';

const SelectQ = ({ question, name, loginData, setLoginData, replace, value }: ISelectQProps) => {
  const banks = ['국민', '신한', '우리', '하나'];

  const jobs = ['회사원', '공무원', '전문직', '농부', '사업가/자영업자', '프리랜서', '주부', '학생', '군인', '무직'];

  const onchange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (setLoginData !== undefined) {
      setLoginData({ ...loginData, [name]: event.target.value });
    }
  };

  return (
    <div className='flex justify-evenly p-5'>
      {question === '주거래은행' ? (
        <div className='flex  w-full items-center'>
          <label htmlFor={question} className=' font-bold text-base'>
            {question}
          </label>
          <div className='grow flex justify-evenly w-fit'>
            <select
              name='banks'
              id={question}
              className='bg-sub-green rounded border-2 border-main-green p-1'
              disabled={replace ? false : true}
              value={value}
              onChange={onchange}
            >
              <option value='' disabled>
                은행을 선택해주세요
              </option>
              {banks.map(bank => {
                return (
                  <option key={bank} value={bank}>
                    {bank}은행
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      ) : (
        <div className='flex  w-full items-center'>
          <label htmlFor={question} className='font-bold text-base'>
            {question}
          </label>
          <div className='grow flex justify-evenly'>
            <select
              disabled={replace ? false : true}
              name='jobs'
              id={question}
              className='bg-sub-green rounded border-2 border-main-green p-1'
              value={value}
              onChange={onchange}
            >
              <option value='' disabled>
                직업을 선택해주세요
              </option>
              {jobs.map(job => {
                return (
                  <option key={job} value={job}>
                    {job}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectQ;
