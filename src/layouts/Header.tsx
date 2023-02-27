import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { AiOutlineUser } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { IHeaderProps } from '../@types/IProps';
import { useRecoilValue } from 'recoil';
import { isLogInState } from '../data/atoms';

const headerVariants = {
  top: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  scroll: {
    backgroundColor: 'rgba(248, 249, 253, 1)',
  },
};

const Header = ({ scrollRef }: IHeaderProps) => {
  const headerAnimation = useAnimation();
  const isLogIn = useRecoilValue(isLogInState);

  useEffect(() => {
    const scrollHandler = () => {
      const currentScrollY = scrollRef.current?.scrollTop;
      if (currentScrollY && currentScrollY > 20) {
        headerAnimation.start('scroll');
      } else {
        headerAnimation.start('top');
      }
    };

    const scrollRefCurrent = scrollRef.current;
    scrollRefCurrent?.addEventListener('scroll', scrollHandler);

    // return () => {
    //   scrollRefCurrent?.removeEventListener('scroll', scrollHandler);
    // };
  });

  return (
    <motion.header
      variants={headerVariants}
      animate={headerAnimation}
      initial={'top'}
      className='h-14 w-screen fixed flex justify-between items-center z-50 max-w-md px-2'
    >
      <div>
        <Link to='/'>
          <img src={logo} alt='로고' className='h-14 m-auto' />
        </Link>
      </div>

      <div className='mr-4'>
        <Link to={isLogIn ? '/mypage' : '/login'} className='m-auto'>
          <AiOutlineUser className='h-6 w-6' />
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
