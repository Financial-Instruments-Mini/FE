import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AiOutlineUser } from 'react-icons/ai';

const Header = () => {
  return (
    <header className='h-14 fixed w-full bg-white flex justify-between items-center'>
      <div className='hidden sm:block h-14 flex-auto'>
        <img src={logo} alt='로고' className='h-14 m-auto' />
      </div>
      <main className='flex justify-around items-center w-[600px] font-bold text-lg'>
        <Link to='/'>홈</Link>
        <Link to='/recommend'>추천상품</Link>
        <Link to='/bookmark'>관심상품</Link>
        <Link to='/search'>검색</Link>
      </main>
      <div className='hidden sm:flex h-14 flex-auto items-center'>
        <Link to='/mypage' className='m-auto'>
          <AiOutlineUser className='h-6 w-6' />
        </Link>
      </div>
    </header>
  );
};

export default Header;
