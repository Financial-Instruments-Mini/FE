import { Link, useLocation } from 'react-router-dom';
import { AiFillHome, AiFillGift, AiFillFolderAdd, AiOutlineSearch } from 'react-icons/ai';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className='h-16 bg-white rounded-t-xl drop-shadow-[0_0_3px_rgba(0,0,0,0.2)] w-full fixed bottom-0 flex justify-between items-center z-40 max-w-md px-8'>
      <main className='w-full flex justify-between items-center font-medium text-sub-gray'>
        <Link to='/'>
          <div
            className={`w-12 h-11 flex flex-col items-center gap-1 ${
              location.pathname === '/' ? 'text-main-green' : ''
            }`}
          >
            <AiFillHome size={27} />
            <p className='text-xs'>홈</p>
          </div>
        </Link>
        <Link to='/recommend'>
          <div
            className={`w-12 h-11 flex flex-col items-center gap-1 ${
              location.pathname === '/recommend' ? 'text-main-green' : ''
            }`}
          >
            <AiFillGift size={27} />
            <p className='text-xs'>추천상품</p>
          </div>
        </Link>
        <Link to='/bookmark'>
          <div
            className={`w-12 h-11 flex flex-col items-center gap-1 ${
              location.pathname === '/bookmark' ? 'text-main-green' : ''
            }`}
          >
            <AiFillFolderAdd size={27} />
            <p className='text-xs'>관심상품</p>
          </div>
        </Link>
        <Link to='/search'>
          <div
            className={`w-12 h-11 flex flex-col items-center gap-1 ${
              location.pathname === '/search' ? 'text-main-green' : ''
            }`}
          >
            <AiOutlineSearch size={27} />
            <p className='text-xs'>검색</p>
          </div>
        </Link>
      </main>
    </nav>
  );
};

export default NavBar;
