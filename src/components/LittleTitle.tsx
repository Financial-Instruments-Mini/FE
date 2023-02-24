import { MdArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ILittleTitleProps } from '../@types/IProps';

const LittleTitle = ({ title, move }: ILittleTitleProps) => {
  const navigate = useNavigate();
  return (
    <div className='flex px-7 pb-5'>
      <div className='flex align-center shrink-0 grow'>
        <MdArrowBackIosNew
          className='h-6 w-6 cursor-pointer'
          onClick={() => {
            navigate(-1);
          }}
        />
        <div className='  shrink-0 grow flex justify-center'>
          <div className='font-bold text-xl'>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default LittleTitle;
