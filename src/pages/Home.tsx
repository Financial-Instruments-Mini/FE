import ItemCard from '../components/ItemCard';
import KeywordButton from '../components/KeywordButton';
import Slide from '../components/Slide';
import items from '../assets/data.json';
import ItemGallery from '../components/ui/ItemGallery';

const Home = () => {
  const keywords = ['전체', '주거래우대', '청년우대', '주택청약', '농어촌'];

  return (
    <>
      <div className='text-xl font-bold flex flex-col gap-3'>
        <span className='text-black'>
          안녕하세요.
          <span className='text-main-blue'>{` 강해경`}</span>님
        </span>
        <p>이런 상품은 어떠신가요?</p>
        {/* <span>로그인하고 상품추천 받으러 가기</span> */}
      </div>
      <Slide />
      <div className='flex flex-wrap text-xs font-base gap-3 text-main-white'>
        {keywords.map(keyword => (
          <KeywordButton key={keyword} keyword={keyword} />
        ))}
      </div>
      <div className='grid grid-cols-2 text-xs font-base gap-4 text-main-white my-4'>
        {items && items.data.map(item => <ItemGallery key={item.id} item={item} />)}
      </div>
    </>
  );
};

export default Home;
