import React from 'react';

interface Quest {
  label: string;
  name: string;
  value: string;
  reReplace: boolean;
}

const SelectQ = ({ label, name, value, reReplace }: Quest) => {
  const banks = [
    {
      value: 'ibk',
      title: 'IBK',
    },
    {
      value: 'kb',
      title: 'KB',
    },
    {
      value: 'sc',
      title: 'SC제일은행',
    },
    {
      value: 'nh',
      title: '농협',
    },
    {
      value: 'sinhan',
      title: '신한은행',
    },
    {
      value: 'uri',
      title: '우리은행',
    },
    {
      value: 'hana',
      title: '하나은행',
    },
  ];

  const jobs = [
    { value: 'officeWorker', title: '직장인' },
    { value: 'publicOfficial', title: '공무원' },
    { value: 'profession', title: '전문직' },
    { value: 'LivestokeWorker', title: '농축수산업 종사자' },
    { value: 'selfEmployed', title: '개인사업자 / 자영업자' },
    { value: 'freelancer', title: '자유직 / 프리랜서' },
    { value: 'houseWife', title: '전업주부' },
    { value: 'student', title: '학생' },
    { value: 'soldier', title: '군인' },
    { value: 'unemployed', title: '무직' },
  ];

  return (
    <div>
      {label === 'bank' ? (
        <div>
          <label htmlFor={label}>{name}</label>
          {reReplace ? (
            <select name='banks' id={label}>
              <option value='' disabled>
                은행을 선택해주세요
              </option>
              {banks.map(bank => {
                if (bank.value === value) {
                  return (
                    <option value={bank.value} selected>
                      {bank.title}
                    </option>
                  );
                } else {
                  return <option value={bank.value}>{bank.title}</option>;
                }
              })}
            </select>
          ) : (
            <select name='banks' id={label} disabled>
              <option value='' disabled>
                은행을 선택해주세요
              </option>
              {banks.map(bank => {
                if (bank.value === value) {
                  return (
                    <option value={bank.value} selected>
                      {bank.title}
                    </option>
                  );
                } else {
                  return <option value={bank.value}>{bank.title}</option>;
                }
              })}
            </select>
          )}
        </div>
      ) : (
        <div>
          <label htmlFor={label}>{name}</label>
          {reReplace ? (
            <select name='jobs' id={label}>
              <option value='' disabled>
                직업을 선택해주세요
              </option>
              {jobs.map(job => {
                if (job.value === value) {
                  return (
                    <option value={job.value} selected>
                      {job.title}
                    </option>
                  );
                } else {
                  return <option value={job.value}>{job.title}</option>;
                }
              })}
            </select>
          ) : (
            <select name='jobs' id={label} disabled>
              <option value='' disabled>
                직업을 선택해주세요
              </option>
              {jobs.map(job => {
                if (job.value === value) {
                  return (
                    <option value={job.value} selected>
                      {job.title}
                    </option>
                  );
                } else {
                  return <option value={job.value}>{job.title}</option>;
                }
              })}
            </select>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectQ;
