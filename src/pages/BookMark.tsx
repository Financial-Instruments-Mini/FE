import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { CgSearchLoading } from 'react-icons/cg';
import { TiDeleteOutline } from 'react-icons/ti';
import { BookmarkProducts } from '../@types/data';
import { getBookmarkProducts, requestDeleteBookmark, requestDeleteBookmarkAll } from '../api/api';
import ItemCard from '../components/ItemCard';

const BookMark = () => {
  const [Token] = useCookies();
  const [items, setItems] = useState<BookmarkProducts[]>();

  const getBookmarkData = async () => {
    try {
      const data = await getBookmarkProducts(Token.accessToken);
      if (data) setItems(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteClick = async (productId: number) => {
    if (await requestDeleteBookmark(Token.accessToken, productId)) await getBookmarkData();
    console.log('delete');
  };

  const handleDeleteAllClick = async () => {
    if (await requestDeleteBookmarkAll(Token.accessToken)) await getBookmarkData();
    console.log('deleteAll');
  };

  useEffect(() => {
    getBookmarkData();
  }, []);

  console.log(items);
  return (
    <section className='relative items-center justify-center'>
      <section className='mb-7'>
        <h1 className='flex px-7 pb-5 font-bold text-xl justify-center'>관심 상품</h1>
        <button className={`${items?.length === 0 ? 'hidden' : ''} absolute right-0`} onClick={handleDeleteAllClick}>
          전체삭제
        </button>
      </section>
      {items?.length === 0 ? (
        <>
          <div className='flex flex-col items-center my-[20vh] text-base gap-2 text-gray font-bold'>
            <CgSearchLoading className='w-24 h-24 text-sub-gray mb-5' />
            <p>현재 관심 상품이 없습니다.</p>
            <p>관심 있는 상품을 추가해 보세요!</p>
          </div>
        </>
      ) : (
        <>
          <section className='flex flex-wrap text-xs font-base gap-3 text-main-white mb-16'>
            {items &&
              items.map(item => {
                return (
                  <section className='relative flex flex-row w-full gap-2'>
                    <ItemCard key={item.productId} product={item} />
                    <span
                      key={`${item.id}icon`}
                      className='text-gray absolute top-3 right-3 cursor-pointer text-base font-bold'
                      onClick={() => handleDeleteClick(item.id)}
                    >
                      ×
                    </span>
                  </section>
                );
              })}
          </section>
        </>
      )}
    </section>
  );
};

export default BookMark;
