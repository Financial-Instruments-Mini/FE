import { useState } from 'react';
import LittleTitle from '../components/LittleTitle';
import 국민은행 from '../assets/bankicons/금융아이콘_PNG_국민.png';
import MainButton from '../components/ui/MainButton';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../components/modal/ConfirmModal';
import { BsStar, BsStarFill } from 'react-icons/bs';

const DetailItem = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [bookmark, setBookmark] = useState<boolean>(false);

  const handleOpenModal = () => {
    setVisibleModal(true);
  };
  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  const handleBookmarkClick = () => {
    setBookmark(!bookmark);
  };

  return (
    <main>
      <LittleTitle title='상품 상세' />
      <section className='px-6 py-2'>
        {bookmark ? (
          <section
            className='w-fit flex flex-row justify-start items-center cursor-pointer gap-1'
            onClick={handleBookmarkClick}
          >
            <BsStarFill className='text-main-green text-xl cursor-pointer' onClick={handleBookmarkClick} />
            <p className='text-xs text-gray'>관심상품 등록</p>
          </section>
        ) : (
          <section
            className='w-fit flex flex-row justify-start items-center cursor-pointer gap-1'
            onClick={handleBookmarkClick}
          >
            <BsStar className='text-xl text-gray' />
            <p className='text-xs text-gray'>관심상품 등록</p>
          </section>
        )}
      </section>
      <header className='flex mt-2 mx-5'>
        <h1 className='text-gray flex gap-1 items-center'>
          <img src={국민은행} alt='' className='h-20 w-20 rounded-full mr-8 opacity-75' />
          <article className='font-bold'>
            <p className='text-xl mb-2 leading-tight'>KB 주부 자녀사랑 예금</p>
            <p className='mb-2'>국민은행</p>
          </article>
        </h1>
      </header>
      <section className='text-gray p-8 flex flex-col items-center'>
        <section className='mb-10 flex flex-col gap-4'>
          <article>
            <h3 className='font-bold mb-2'>상품 종류</h3>
            <p>예금</p>
          </article>
          <article>
            <h3 className='font-bold mb-2'>신청 방법</h3>
            <p>휴대폰</p>
          </article>
          <article>
            <h3 className='font-bold mb-2'>금리</h3>
            <p className='mb-1'>12개월 : 3.0%</p>
            <p>24개월 : 3.3%</p>
          </article>
          <article>
            <h3 className='font-bold mb-2'>상품 안내</h3>
            <p>
              자녀에게 증여 NEEDS가 있는 고객을 위한 상품으로, 자녀가 어릴 때 동 상품을 자녀 명의로 미리 증여함으로써
              절세효과와 재테크효과를 함께 얻을 수 있는 정기예금
            </p>
          </article>
        </section>
        <section className='flex flex-row gap-4 mb-6'>
          {/* <MainButton text={'관심 상품 등록'} onClick={handleOpenModal} /> */}
          <MainButton select={true} text={'신청하기'} page={'detail/:id'} onClick={handleOpenModal} />
        </section>
      </section>
      {visibleModal && (
        <ConfirmModal
          onCloseModal={handleCloseModal}
          onConfirm={() => {
            // 동작
            alert('신청완료');
          }}
          buttonText={{ confirm: '신청', cancel: '취소' }}
        >
          <h1 className='font-bold text-gray text-xl'>신청 하시겠습니까?</h1>
        </ConfirmModal>
      )}
    </main>
  );
};

export default DetailItem;
