import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { AiOutlineUser } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { IHeaderProps } from '../@types/IProps';
import MyPageModal from '../components/mypage/MyPageModal';

const headerVariants = {
  top: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  scroll: {
    backgroundColor: 'rgba(248, 249, 253, 1)',
  },
};

const Header = ({ scrollRef }: IHeaderProps) => {
  const [myPageModal, setMyPageModal] = useState(false);
  const headerAnimation = useAnimation();

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
      className='h-14 w-screen fixed flex justify-between items-center z-50 max-w-md px-2 fixed'
    >
      <div>
        <Link to='/'>
          <img src={logo} alt='로고' className='h-14 m-auto' />
        </Link>
      </div>

      <div
        className='mr-4'
        onClick={() => {
          setMyPageModal(!myPageModal);
        }}
      >
        {/* <Link to='/mypage' className='m-auto'> */}
        <AiOutlineUser className='h-6 w-6' />
        {/* </Link> */}
      </div>
      {myPageModal && (
        <div className='z-10 absolute right-6 top-12'>
          <MyPageModal setMyPageModal={setMyPageModal} />
        </div>
      )}
    </motion.header>
  );
};

export default Header;
