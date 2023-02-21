import { UseFormRegister } from 'react-hook-form';
import { Path } from 'react-hook-form/dist/types';
import { ILoginForm } from '../../@types/IProps';

interface ILoginInputProps {
  name: Path<ILoginForm>;
  text: string;
  type?: string;
  register: UseFormRegister<ILoginForm>;
  errorMessege: any;
}

const LoginInput = ({ name, text, type, register, errorMessege }: ILoginInputProps) => {
  return (
    <div className='w-10/12 flex flex-col'>
      <input
        {...register(name)}
        className='w-full border-b border-b-black p-3 text-lg font-bold placeholder:font-bold outline-none'
        type={type}
        placeholder={text}
      />
      <span className='mt-2 text-xs text-gray'>{errorMessege}</span>
    </div>
  );
};

export default LoginInput;
