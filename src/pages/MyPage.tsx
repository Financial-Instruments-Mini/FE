import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IListItemProps } from '../@types/IProps';
import LittleTitle from '../components/LittleTitle';

const MyPage = () => {
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
    <div>
      <LittleTitle title='계정관리' move='false' />
      {list.map(item => {
        return (
          <div
            key={item.value}
            className='bg-sub-green text-main-green m-7 rounded-xl -shadow-basic hover:bg-main-green hover:text-sub-green'
          >
            <Link to={item.value}>
              <div className='flex justify-between items-center h-20'>
                <div className='px-10 py-3 font-bold text-lg'>{item.name}</div>
                <MdArrowForwardIos className='h-6 w-6 mr-10 text-inherit' />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MyPage;
