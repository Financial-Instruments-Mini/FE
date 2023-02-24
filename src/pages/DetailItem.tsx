import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import LittleTitle from '../components/LittleTitle';
import 국민은행 from '../assets/bankicons/금융아이콘_PNG_국민.png';
import MainButton from '../components/ui/MainButton';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmModal from '../components/modal/ConfirmModal';
import { BsStar, BsStarFill } from 'react-icons/bs';
import {
  getBookmarkProducts,
  getProductDetails,
  requestAddBookmark,
  requestApplyProduct,
  requestDeleteBookmark,
} from '../api/api';
import { getImageUrl } from '../utils/getImageUrl';
import { BookmarkProducts, ProductDetails } from '../@types/data';
import { useCookies } from 'react-cookie';

const DetailItem = () => {
  const [Token] = useCookies();
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [bookmark, setBookmark] = useState<boolean>(false);
  const [detail, setDetail] = useState<ProductDetails>();
  const placeId = useLocation().pathname.split('/')[2];

  const handleOpenModal = () => {
    setVisibleModal(true);
  };
  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  const addBookmark = async () => {
    if (await requestAddBookmark(Token.accessToken, Number(placeId), 2)) setBookmark(true);
  };

  const deleteBookmark = async () => {
    if (await requestDeleteBookmark(Token.accessToken, Number(placeId))) setBookmark(false);
  };

  const applyProduct = async () => {
    if (await requestApplyProduct(Token.accessToken, Number(placeId), 2)) return true;
    return false;
  };
  const handleBookmarkClick = () => {
    if (bookmark) deleteBookmark();
    else addBookmark();
  };

  useEffect(() => {
    async function getDetailData() {
      try {
        const data = await getProductDetails(Number(placeId));
        const bookMarkList = await getBookmarkProducts(Token.accessToken);
        if (bookMarkList?.find((bookMark: BookmarkProducts) => bookMark.productId === Number(placeId)))
          setBookmark(true);
        setDetail(data);
      } catch (error) {
        console.log(error);
      }
    }
    getDetailData();
  }, []);

  return (
    <>
      {detail && (
        <main className='mb-16'>
          <LittleTitle title='상품 상세' />
          <header className='flex-col my-2 mx-1 p-4 rounded-xl -shadow-basic'>
            <h1 className='text-gray flex gap-3 justify-around px-3'>
              <div className='my-auto w-1/4'>
                <img src={getImageUrl(detail.bankName)} alt='은행로고' className='h-16 w-16 rounded-full opacity-75' />
              </div>
              <article className='w-4/5'>
                <section className='mb-2 hover:scale-105'>
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
                <p className='text-xl mb-2 leading-tight font-bold'>{detail.productName}</p>
                <p className='mb-2 text-sm'>{detail.bankName}은행</p>
              </article>
            </h1>
          </header>
          <section className='relative text-gray mx-1 py-10 px-8 -shadow-basic rounded-xl flex flex-col items-center'>
            <section className='mb-10 flex flex-col gap-5 text-sm'>
              <article>
                <h3 className='font-bold mb-2'>상품 종류</h3>
                <p>{detail.productType}</p>
              </article>
              <article>
                <h3 className='font-bold mb-2'>신청 방법</h3>
                <p>{detail.joinWay}</p>
              </article>
              <article>
                <h3 className='font-bold mb-1'>금리</h3>
                {detail.interests.map((interest: { id: number; dueDate: number; rate: number }) => {
                  return (
                    <p key={interest.id} className='pt-1'>
                      {interest.dueDate}개월 이상 : 연 {interest.rate}%
                    </p>
                  );
                })}
              </article>
              <article>
                <h3 className='font-bold mb-2'>{detail.maxLimit ? '저축금액' : '가입금액'}</h3>
                <p>
                  {detail.maxLimit ? `월 최대 ${detail.maxLimit.toLocaleString()}원` : ''}
                  {detail.minimumAmount ? `${detail.minimumAmount.toLocaleString()}원 이상` : ''}
                </p>
              </article>
              <article>
                <h3 className='font-bold mb-2'>상품 안내</h3>
                <p className='leading-tight'>{detail.content}</p>
              </article>
            </section>
            <MainButton select={true} text={'신청하기'} page={'detail/:id'} onClick={handleOpenModal} />
          </section>
          {visibleModal && (
            <ConfirmModal
              onCloseModal={handleCloseModal}
              onConfirm={async () => {
                if (await applyProduct()) alert('신청완료');
              }}
              buttonText={{ confirm: '신청', cancel: '취소' }}
            >
              <h1 className='font-bold text-gray text-xl'>신청 하시겠습니까?</h1>
            </ConfirmModal>
          )}
        </main>
      )}
    </>
  );
};

export default DetailItem;
