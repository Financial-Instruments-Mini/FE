import { AiFillMinusCircle } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { IItemCardProps } from '../@types/IProps';
import { getImageUrl } from '../utils/getImageUrl';

const ItemCard = ({ product, setRess, ress }: IItemCardProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = () => {
    if (location.pathname === '/mypage/mycart' && setRess !== undefined) {
      setRess(ress?.filter(res => res.id !== product.productId));
    } else {
      navigate(`/detail/${product.productId}`);
    }
  };
  return (
    <div
      onClick={() => {
        navigate(`/detail/${product.productId}`);
      }}
      className='h-28 w-full bg-white rounded-lg flex items-center p-4 -shadow-basic cursor-pointer'
    >
      <div
        className={` rounded-full m-auto opacity-90 flex justify-center items-center ${
          location.pathname !== '/mypage/mycart' ? 'basis-1/3' : 'basis-1/5'
        }`}
      >
        <img src={getImageUrl(product.bankName)} alt='은행로고' className='w-14 h-14' />
      </div>
      <div
        className={`text-gray flex flex-col items-start gap-1  ${
          location.pathname !== '/mypage/mycart' ? 'basis-2/3' : 'basis-3/5'
        }`}
      >
        <p className='text-base font-bold mb-2 leading-tight'>{`${product.productName} `}</p>
        <p className='text-sm'>최고 연 {product.maxRate}%</p>
        <p className='text-sm'>{product.productType}</p>
      </div>
      <button onClick={onClick} className='basis-1/5 flex justify-center'>
        {location.pathname === '/mypage/mycart' ? <AiFillMinusCircle size={40} className='fill-main-yellow' /> : ''}
      </button>
    </div>
  );
};

export default ItemCard;
