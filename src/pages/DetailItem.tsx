import { useEffect, useState } from 'react';
import LittleTitle from '../components/ui/LittleTitle';
import MainButton from '../components/ui/MainButton';
import { useLocation, useNavigate } from 'react-router-dom';
import ConfirmModal from '../components/modal/ConfirmModal';
import { BsStar, BsStarFill } from 'react-icons/bs';
import {
  getApplyItemData,
  getBookmarkProducts,
  getProductDetails,
  requestAddBookmark,
  requestApplyProduct,
  requestDeleteBookmark,
} from '../api/api';
import { getImageUrl } from '../utils/getImageUrl';
import { BookmarkProducts, ProductDetails } from '../@types/data';
import { useCookies } from 'react-cookie';
import { useRecoilValue } from 'recoil';
import { isLogInState } from '../data/atoms';

const DetailItem = () => {
  const [Token] = useCookies();
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [bookmark, setBookmark] = useState<boolean>(false);
  const [detail, setDetail] = useState<ProductDetails>();
  const placeId = useLocation().pathname.split('/')[2];
  const [bookmarkId, setBookmarkId] = useState<number>();
  const isLogIn = useRecoilValue(isLogInState);
  const [isApply, setIsApply] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setVisibleModal(true);
  };
  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  const addBookmark = async () => {
    if (!isLogIn) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
      return;
    }
    if (await requestAddBookmark(Token.accessToken, Number(placeId), 2)) setBookmark(true);
  };

  const deleteBookmark = async () => {
    if (await requestDeleteBookmark(Token.accessToken, Number(bookmarkId))) setBookmark(false);
  };

  const applyProduct = async () => {
    if (!isLogIn) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
      return;
    }
    if (isApply) {
      alert('이미 신청한 상품입니다.');
      return;
    }
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
        if (isLogIn) {
          const bookMarkList = await getBookmarkProducts(Token.accessToken);
          if (bookMarkList?.find((bookMark: BookmarkProducts) => bookMark.productId === Number(placeId))) {
            setBookmark(true);
          }
          bookMarkList?.forEach((bookMark: BookmarkProducts) => {
            if (bookMark.productId === Number(placeId)) {
              setBookmarkId(bookMark.id);
            }
          });
          const applyList = await getApplyItemData(Token.accessToken);
          if (applyList.data.content?.find((apply: BookmarkProducts) => apply.productId === Number(placeId))) {
            setIsApply(true);
          }
        }
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
          <header className='flex-col my-2 mx-1 p-4 rounded-xl -shadow-basic bg-white'>
            <h1 className='text-gray flex'>
              <div className='flex-shrink-0'>
                <img src={getImageUrl(detail.bankName)} alt='은행로고' className='h-16 w-16 rounded-full' />
              </div>
              <article className='ml-4 flex justify-between items-center w-4/5'>
                <p className='flex flex-col'>
                  <span className='text-lg mb-3 font-bold text-black'>{detail.productName}</span>
                  <span className='text-xs'>{detail.bankName}은행</span>
                </p>

                {bookmark ? (
                  <section
                    className='w-fit flex flex-col justify-start items-center cursor-pointer gap-1'
                    onClick={handleBookmarkClick}
                  >
                    <BsStarFill size={25} className='text-main-green cursor-pointer' onClick={handleBookmarkClick} />
                    <p className='text-xxs text-gray font-bold leading-3 whitespace-nowrap'>관심상품</p>
                  </section>
                ) : (
                  <section
                    className='w-fit flex flex-col justify-start items-center cursor-pointer gap-1 group'
                    onClick={handleBookmarkClick}
                  >
                    <BsStar size={25} className='text-gray group-hover:text-main-yellow' />
                    <p className='text-xxs text-gray font-bold leading-3 whitespace-nowrap group-hover:text-main-yellow'>
                      관심상품
                    </p>
                  </section>
                )}
              </article>
            </h1>
          </header>
          <section className='relative text-gray mx-1 py-10 px-8 -shadow-basic rounded-xl flex flex-col items-center bg-white'>
            <section className='mb-10 flex flex-col gap-5 text-sm'>
              <article>
                <h3 className='font-bold mb-2 text-base leading-5'>상품 종류</h3>
                <p>{detail.productType}</p>
              </article>
              <article>
                <h3 className='font-bold mb-2 text-base leading-5'>신청 방법</h3>
                <p>{detail.joinWay}</p>
              </article>
              <article>
                <h3 className='font-bold mb-1 text-base leading-5'>금리</h3>
                {detail.interests.map((interest: { id: number; dueDate: number; rate: number }) => {
                  return (
                    <p key={interest.id} className='pt-1'>
                      {interest.dueDate}개월 이상 : 연 {interest.rate}%
                    </p>
                  );
                })}
              </article>
              <article>
                <h3 className='font-bold mb-2 text-base leading-5'>{detail.maxLimit ? '저축금액' : '가입금액'}</h3>
                <p>
                  {detail.maxLimit ? `월 최대 ${detail.maxLimit.toLocaleString()}원` : ''}
                  {detail.minimumAmount ? `${detail.minimumAmount.toLocaleString()}원 이상` : ''}
                </p>
              </article>
              <article>
                <h3 className='font-bold mb-2 text-base leading-5'>상품 안내</h3>
                <p className='leading-tight'>{detail.content}</p>
              </article>
            </section>
            <MainButton select={true} text={'신청하기'} page={'detail/:id'} onClick={handleOpenModal} />
          </section>
          {visibleModal && (
            <ConfirmModal
              onCloseModal={handleCloseModal}
              onConfirm={async () => {
                if (await applyProduct()) alert('신청되었습니다.');
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
