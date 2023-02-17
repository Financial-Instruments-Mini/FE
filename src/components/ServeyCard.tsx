import React, { useState } from 'react';
import { IServeyCardProps } from '../@types/IProps';
import MainButton from './ui/MainButton';
import { FcNext } from 'react-icons/fc';
import { Link } from 'react-router-dom';

interface ISelect {
  content: string;
  isSelect: boolean;
}

const ServeyCard = ({ title, contents, order, setVisible }: IServeyCardProps) => {
  const screenTitle = title.split('/');
  const [select, setSelect] = useState<ISelect[]>([]);

  console.log(select);

  const onClickBtn = (content: string) => {
    if (screenTitle[1] === '상품') {
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
    setVisible((prev: number) => (prev === 2 ? 2 : prev + 1));
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

      <div className='w-full mt-14 mb-5 flex justify-between text-gray'>
        <Link to={`/`}>{screenTitle[1] === '상품' ? '첫 화면으로' : null}</Link>
        <button onClick={onClickNext} className='flex items-center'>
          다음으로 <FcNext color='gray' />
        </button>
      </div>
    </div>
  );
};

export default ServeyCard;
