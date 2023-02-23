import React, { useState, useEffect } from 'react';
import { ISurveyCardProps } from '../@types/IProps';
import MainButton from './ui/MainButton';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { ISelectState } from './../@types/data.d';

const SurveyCard = ({ title, contents, order, setVisible, surveyData, setSurveyData }: ISurveyCardProps) => {
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
      setSelect(prev => {
        if (prev.length !== 0) {
          if (prev[prev.length - 1].content === content) {
            return [{ content, isSelect: !prev[prev.length - 1].isSelect }];
          } else {
            return [
              { content: prev[prev.length - 1].content, isSelect: false },
              { content, isSelect: true },
            ];
          }
        } else {
          return [{ content, isSelect: true }];
        }
      });
    }
  };

  const onClickNext = () => {
    if (order === 2) {
      navigate('/success', { state: { surveyData } });
    } else {
      setVisible((prev: number) => (prev === 2 ? 2 : prev + 1));
    }
  };

  useEffect(() => {
    for (const item of select) {
      if (item.isSelect) {
        setSurveyData((prev: string[]) => {
          const addSelect = [...prev, item.content];
          const newSelects = addSelect.filter((i, idx) => addSelect.indexOf(i) === idx);
          return newSelects;
        });
      } else {
        setSurveyData((prev: string[]) => {
          const removeSelect = [...prev].filter(i => item.content !== i);
          const newSelects = removeSelect.filter((i, idx) => removeSelect.indexOf(i) === idx);
          return newSelects;
        });
      }
    }
  }, [select, setSurveyData]);

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
            page='survey'
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

export default SurveyCard;
