import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AiOutlineUser } from 'react-icons/ai';

const Header = () => {
  const location = useLocation();

  return (
    <header className='h-14 fixed w-full bg-white flex justify-around items-center font-main z-10'>
      <div className='hidden lg:block h-14 basis-1/2'>
        <Link to='/'>
          <img src={logo} alt='로고' className='h-14 m-auto' />
        </Link>
      </div>
      <main className='flex px-10 sm:px-0 justify-around items-center min-w-[600px] font-bold text-lg'>
        <Link to='/' className={location.pathname === '/' ? 'text-main-green font-extrabold' : ''}>
          홈
        </Link>
        <Link to='/recommend' className={location.pathname === '/recommend' ? 'text-main-green font-extrabold' : ''}>
          추천상품
        </Link>
        <Link to='/bookmark' className={location.pathname === '/bookmark' ? 'text-main-green font-extrabold' : ''}>
          관심상품
        </Link>
        <Link to='/search' className={location.pathname === '/search' ? 'text-main-green font-extrabold' : ''}>
          검색
        </Link>
      </main>
      <div className='hidden lg:flex h-14  items-center basis-1/2'>
        <Link to='/mypage' className='m-auto'>
          <AiOutlineUser className='h-6 w-6' />
        </Link>
      </div>
    </header>
  );
};

export default Header;
