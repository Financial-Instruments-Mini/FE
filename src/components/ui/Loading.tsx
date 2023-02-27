import Spinner from '../../assets/images/loading_img.gif';

const Loading = () => {
  return (
    <div className='w-full mt-20 flex justify-center items-center'>
      <img src={Spinner} alt='로딩중' />
    </div>
  );
};

export default Loading;
