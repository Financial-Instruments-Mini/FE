import React from 'react';
import { IModalProps } from '../../@types/IProps';

const Modal = ({ onCloseModal, children }: IModalProps) => {
  return (
    <>
      <section className='fixed z-50 top-0 right-0 bottom-0 left-0 w-screen h-screen opacity-40 bg-black' />
      <section className='fixed z-50 top-0 right-0 bottom-0 left-0 flex justify-center items-center p-16'>
        <section className='relative w-80 h-60 px-16 flex flex-col flex-wrap justify-center items-center opacity-100 rounded-md -shadow-basic bg-white outline-1'>
          {children}
        </section>
      </section>
    </>
  );
};

export default Modal;
