import { MdArrowForwardIos } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { useCookies } from 'react-cookie';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { IListItemProps } from '../../@types/IProps';
import { isLogInState } from '../../data/atoms';
import { userInfoState } from './../../data/atoms';
import LittleTitle from './../../components/ui/LittleTitle';

const MyPage = () => {
  const navigate = useNavigate();
  const setIsLogIn = useSetRecoilState(isLogInState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [, , removeToken] = useCookies();

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

  const onClickLogOut = () => {
    if (window.confirm('로그아웃을 하시겠습니까?')) {
      setIsLogIn(false);
      setUserInfo({
        email: '',
        phoneNumber: 0,
        name: '',
        birthDate: 0,
        productType: '',
        job: '',
        bankName: '',
      });
      removeToken('accessToken');
      removeToken('refreshToken');
      alert('로그아웃이 완료되었습니다.');
      navigate('/');
    }
  };

  return (
    <div>
      <LittleTitle title='계정관리' move='false' />
      <div className='flex justify-between items-center flex-wrap my-10 px-10'>
        <div className='text-xl font-bold leading-8'>
          <h2>
            안녕하세요! <span className='text-main-blue'>{userInfo.name}</span>님
          </h2>
          {/* <p>어떤 !</p> */}
        </div>
        <button onClick={onClickLogOut} className='border rounded-3xl p-1.5 border-gray text-gray text-xs'>
          {/* 로그아웃 */}
          <RiLogoutBoxRLine />
        </button>
      </div>
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
