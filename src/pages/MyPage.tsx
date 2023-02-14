import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import LittleTitle from '../components/LittleTitle';

interface listItem {
  value: string;
  name: string;
}

const MyPage = () => {
  const list: listItem[] = [
    {
      value: '/mydetailpage',
      name: '나의 정보 보기',
    },
    {
      value: '/mycart',
      name: '신청한 상품 내역 보기',
    },
  ];

  // const [title, setTitle] = useState('계정관리');

  return (
    <div>
      <LittleTitle title='계정관리' />
      {list.map(item => {
        return (
          <div key={item.value} className='bg-main-green m-7 rounded-xl shadow-xl hover:bg-sub-green'>
            <Link to={item.value}>
              <div className='flex justify-between items-center h-20'>
                <div className='px-10 py-3 font-bold text-lg'>{item.name}</div>
                <MdArrowForwardIos className='h-6 w-6 mr-10' />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MyPage;

