import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AiOutlineUser } from 'react-icons/ai';

const Header = () => {
  return (
    <header className='h-14 fixed w-full bg-white flex justify-around items-center'>
      <div className='hidden sm:block h-14 basis-1/2'>
        <Link to='/'>
          <img src={logo} alt='로고' className='h-14 m-auto' />
        </Link>
      </div>
      <main className='flex px-10 sm:px-0 justify-around items-center min-w-[600px]  font-bold text-lg '>
        <Link to='/'>홈</Link>
        <Link to='/recommend'>추천상품</Link>
        <Link to='/bookmark'>관심상품</Link>
        <Link to='/search'>검색</Link>
      </main>
      <div className='hidden sm:flex h-14  items-center basis-1/2'>
        <Link to='/mypage' className='m-auto'>
          <AiOutlineUser className='h-6 w-6' />
        </Link>
      </div>
    </header>
  );
};

export default Header;
