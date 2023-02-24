import { BiSearchAlt2 } from 'react-icons/bi';
import DropDown from '../ui/DropDown';
import SavingsButtons from '../ui/SavingsButtons';
import ToggleButton from '../ui/ToggleButton';
import { useForm } from 'react-hook-form';
import { ISearchForm } from '../../@types/data';
import { ISearchBoxProps } from '../../@types/IProps';

const SearchBox = ({ setInput, bank, setBank, savingValue, setSavingValue, toggle, setToggle }: ISearchBoxProps) => {
  const { register, handleSubmit, reset } = useForm<ISearchForm>();

  const onValid = ({ input }: ISearchForm) => {
    setInput(input);
    reset();
  };

  return (
    <>
      <div className='flex flex-wrap justify-between items-center gap-3'>
        <DropDown bank={bank} setBank={setBank} />
        <form onSubmit={handleSubmit(onValid)} className='relative w-auto grow flex'>
          <button className='absolute right-0 inset-y-0 pr-5'>
            <BiSearchAlt2 size={20} className='fill-main-blue' />
          </button>
          <input
            type='text'
            className='grow h-10 rounded-full border-2 border-main-blue outline-none pl-5 pb-[0.15rem] text-main-blue placeholder:text-main-gray'
            placeholder='검색어를 입력해 주세요'
            {...register('input')}
          />
        </form>
      </div>

      <div className='mt-3 mb-4 mx-2 flex flex-wrap justify-between items-center gap-2'>
        <SavingsButtons savingValue={savingValue} setSavingValue={setSavingValue} />
        <ToggleButton toggle={toggle} setToggle={setToggle} />
      </div>
    </>
  );
};

export default SearchBox;
