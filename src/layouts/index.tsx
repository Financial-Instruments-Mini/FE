import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import { useRef } from 'react';

const Layout = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className='flex justify-center items-center'>
      <div ref={scrollRef} className='w-screen h-screen overflow-scroll no-scrollbar relative max-w-md'>
        <Header scrollRef={scrollRef} />
        <main className='pt-14 bg-main-white min-h-screen'>
          <div className='max-w-[600px] m-auto py-5 px-4 mb-16'>
            <Outlet />
          </div>
          <NavBar />
        </main>
      </div>
    </div>
  );
};

export default Layout;
