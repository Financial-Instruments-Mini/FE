import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <div className='relative'>
      <Header />
      <main className='pt-14 bg-main-white min-h-screen'>
        <div className='max-w-[600px] m-auto py-3'>
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout;
