import React, { useState } from 'react';
import { IServeyCardProps } from '../@types/IProps';
import MainButton from './ui/MainButton';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

interface ISelectState {
  content: string;
  isSelect: boolean;
}

const ServeyCard = ({ title, contents, order, setVisible, serveyData, setServeyData }: IServeyCardProps) => {
  const screenTitle = title.split('/');
  const [select, setSelect] = useState<ISelectState[]>([]);
  const navigate = useNavigate();

  console.log(screenTitle[1], '선택:', select);

  const onClickBtn = (content: string) => {
    if (order === 0) {
      setSelect(prev => {
        const oldItemIdx = [...prev].findIndex(i => i.content === content);
        const restContents = [...prev].filter(i => i.content !== content);
        const newArr = [...restContents, { content, isSelect: oldItemIdx === -1 ? true : !prev[oldItemIdx].isSelect }];
        return newArr;
      });
    } else {
      setSelect([{ content, isSelect: true }]);
    }
  };

  const onClickNext = () => {
    const isSelectData = select.filter(i => i.isSelect === true); // 예적금 중복선택 가능이라 true 만 필터링

    // 해결x : 마지막 설문조사 결과는 포함x
    if (isSelectData.length !== 0) {
      const newSelectData = isSelectData.map(i => i.content);
      setServeyData((prev: string[]) => [...prev, ...newSelectData]);
    }

    if (order === 2) {
      navigate('/success', { state: { serveyData } });
    } else {
      setVisible((prev: number) => (prev === 2 ? 2 : prev + 1));
    }
  };

  return (
    <div className='w-[95%] flex flex-col items-center justify-center mb-2 pt-14 px-3 bg-white rounded-3xl -shadow-basic'>
      <p className='font-bold relative'>
        {screenTitle[0]}
        <span className='text-main-green'>{screenTitle[1]}</span>
        {screenTitle[2]}

        {screenTitle[1] === '상품' ? (
          <span className='absolute top-6 right-0 text-[0.125rem] font-light whitespace-nowrap text-gray'>
            * 중복선택 가능
          </span>
        ) : null}
      </p>

      <div className='w-full mt-14 grid grid-cols-2 gap-3'>
        {contents.map((content, index) => (
          <MainButton
            key={index}
            text={content}
            select={select.find(i => i.content === content)?.isSelect}
            onClick={() => {
              onClickBtn(content);
            }}
            page='servey'
          />
        ))}
      </div>

      <div className='w-full mt-14 mb-5 flex items-end justify-between text-gray'>
        <Link to={`/success`}>{order === 0 ? '건너뛰기' : null}</Link>
        <button onClick={onClickNext} className='flex items-end'>
          다음으로 <MdOutlineNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default ServeyCard;
