import React from 'react';
import { IListItemProps } from '../../@types/IProps';
import { Link } from 'react-router-dom';

interface ImyPageModalProps {
  setMyPageModal: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

const MyPageModal = ({ setMyPageModal }: ImyPageModalProps) => {
  const list: IListItemProps[] = [
    {
      value: '/mypage/mydetailpage',
      name: '나의 정보 보기',
    },
    {
      value: '/mypage/mycart',
      name: '신청한 상품 내역 보기',
    },
  ];

  return (
    <div className='bg-white rounded-xl z-10 -shadow-basic p-5'>
      {list.map(item => {
        return (
          <div
            key={item.value}
            className='rounded-xl hover:bg-main-green hover:text-sub-green p-5 '
            onClick={() => {
              setMyPageModal !== undefined && setMyPageModal(false);
            }}
          >
            <Link to={item.value}>
              <div className='flex justify-between items-center'>
                <div className=' font-bold text-lg'>{item.name}</div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MyPageModal;
