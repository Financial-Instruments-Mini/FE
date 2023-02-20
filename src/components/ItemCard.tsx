import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { IItemCardProps } from '../@types/IProps';
import { getImageUrl } from '../utils/getImageUrl';

const ItemCard = ({ item, setRess, ress }: IItemCardProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(setRess);

  const onClick = () => {
    if (location.pathname === '/mypage/mycart' && setRess !== undefined) {
      setRess(ress?.filter(res => res.id !== item.id));
    } else {
      navigate('/detail/:id');
    }
  };
  return (
    <div className='h-28 w-full bg-white rounded-lg flex items-center p-4 -shadow-basic'>
      <div className='basis-1/5 rounded-full m-auto opacity-90 flex justify-center items-center'>
        <img src={getImageUrl(item.bankName)} alt='' className='w-14 h-14' />
      </div>
      <div className='text-gray flex flex-col gap-1 m-auto px-5 basis-3/5 truncate'>
        <p className='text-base font-bold mb-2 leading-tight'>{`${item.productName} `}</p>
        <p className='text-sm'>최고 연 {item.interestList[1].rate}%</p>
        <p className='text-sm'>{item.joinWay}</p>
      </div>
      <button onClick={onClick} className='basis-1/12 flex justify-center'>
        {location.pathname === '/mypage/mycart' ? (
          <AiFillMinusCircle size={40} className='fill-main-yellow' />
        ) : (
          <AiFillPlusCircle size={40} className='fill-main-blue' />
        )}
      </button>
    </div>
  );
};

export default ItemCard;
