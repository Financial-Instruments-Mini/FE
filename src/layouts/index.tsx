import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    // <div className='relative'>
    //   <Header />
    //   <main className='pt-14 bg-main-white min-h-screen'>
    //     <div className='max-w-[600px] m-auto py-5 px-4'>
    //       <Outlet />
    //       <Footer />
    //     </div>
    //   </main>
    // </div>
    <div className='flex justify-center items-center'>
      <div className='w-screen h-screen overflow-auto no-scrollbar relative max-w-md'>
        <Header />
        <main className='pt-14 bg-main-white min-h-screen'>
          <div className='max-w-[600px] m-auto py-5 px-4'>
            <Outlet />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
