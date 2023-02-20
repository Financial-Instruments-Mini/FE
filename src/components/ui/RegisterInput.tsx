import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IRegisterForm } from '../../@types/IProps';

interface IRegisterInputProps {
  register: UseFormRegister<IRegisterForm>;
}

const RegisterInput = ({ register }: IRegisterInputProps) => {
  return (
    <div>
      <div className='w-10/12 flex justify-between items-center'>
        <span className='font-bold text-sm'>이메일</span>
        <div className='w-[60%] flex flex-col justify-end'>
          <input
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                // eslint-disable-next-line
                value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                message: '올바른 이메일을 입력해주세요',
              },
            })}
            className='border-b border-b-black p-2 text-sm font-bold placeholder:font-bold placeholder:text-[0.625rem] outline-none'
            type='email'
            placeholder='이메일'
          />
          {/* <span className='h-3 mt-2 text-xs text-gray'>{errors.email?.message}</span> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterInput;
