import { AiFillMinusCircle } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { IItemCardProps } from '../@types/IProps';
import { getImageUrl } from '../utils/getImageUrl';

const ItemCard = ({ item, setRess, ress }: IItemCardProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = () => {
    if (location.pathname === '/mypage/mycart' && setRess !== undefined) {
      setRess(ress?.filter(res => res.id !== item.id));
    } else {
      navigate('/detail/:id');
    }
  };
  return (
    <div
      onClick={() => {
        navigate('/detail/:id');
      }}
      className='h-28 w-full bg-white rounded-lg flex items-center p-4 -shadow-basic cursor-pointer'
    >
      <div
        className={` rounded-full m-auto opacity-90 flex justify-center items-center ${
          location.pathname !== '/mypage/mycart' ? 'basis-1/3' : 'basis-1/5'
        }`}
      >
        <img src={getImageUrl(item.bankName)} alt='은행로고' className='w-14 h-14' />
      </div>
      <div
        className={`text-gray flex flex-col items-start gap-1  ${
          location.pathname !== '/mypage/mycart' ? 'basis-2/3' : 'basis-3/5'
        }`}
      >
        <p className='text-base font-bold mb-2 leading-tight'>{`${item.productName} `}</p>
        <p className='text-sm'>최고 연 {item.interestList[1].rate}%</p>
        <p className='text-sm'>{item.joinWay}</p>
      </div>
      <button onClick={onClick} className='basis-1/5 flex justify-center'>
        {location.pathname === '/mypage/mycart' ? <AiFillMinusCircle size={40} className='fill-main-yellow' /> : ''}
      </button>
    </div>
  );
};

export default ItemCard;
