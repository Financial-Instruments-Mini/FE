import { UseFormRegister } from 'react-hook-form';
import { Path } from 'react-hook-form/dist/types';
import { IRegisterForm } from '../../@types/IProps';

interface IRegisterInputProps {
  title: string;
  name: Path<IRegisterForm>;
  text: string;
  type?: string;
  register: UseFormRegister<IRegisterForm>;
  errorMessege: any;
}

const RegisterInput = ({ title, name, text = 'text', type, register, errorMessege }: IRegisterInputProps) => {
  return (
    <div className='w-10/12 flex justify-between items-center'>
      <span className='font-bold text-sm'>{title}</span>
      <div className='w-[60%] flex flex-col justify-end'>
        <input
          {...register(name)}
          className='border-b border-b-black p-2 text-sm font-bold placeholder:font-bold placeholder:text-[0.625rem] outline-none'
          type={type}
          placeholder={text}
        />
        <span className='h-3 mt-2 text-xs text-gray'>{errorMessege}</span>
      </div>
    </div>
  );
};

export default RegisterInput;
