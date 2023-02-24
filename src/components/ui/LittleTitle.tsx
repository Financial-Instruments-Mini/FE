import { MdArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { ILittleTitleProps } from '../../@types/IProps';

const LittleTitle = ({ title, move }: ILittleTitleProps) => {
  const navigate = useNavigate();
  return (
    <div className='flex px-2 pb-5 align-center'>
      <div className='flex shrink-0 grow relative'>
        <MdArrowBackIosNew
          className='h-6 w-1/12 cursor-pointer absolute left-0'
          onClick={() => {
            navigate(-1);
          }}
        />
        <div className='w-full'>
          <div className='font-bold text-xl mx-auto w-fit'>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default LittleTitle;
