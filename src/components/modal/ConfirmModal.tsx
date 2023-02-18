import Modal from '.';
import { IConfirmModalProps } from '../../@types/IProps';

const ConfirmModal = ({
  onCloseModal,
  onConfirm,
  buttonText = { confirm: '확인', cancel: '취소' },
  children,
}: IConfirmModalProps) => {
  const handleClickConfirm = () => {
    onConfirm();
    onCloseModal();
  };
  return (
    <Modal onCloseModal={onCloseModal}>
      {children}
      <article className='mt-12 flex justify-center gap-8'>
        <button
          className='w-16 h-12 rounded-xl text-md font-bold -shadow-basic hover:text-sub-green hover:bg-main-green hover:transition hover:duration-500'
          onClick={handleClickConfirm}
        >
          {buttonText.confirm}
        </button>
        <button
          className='w-16 h-12 rounded-xl text-md font-bold -shadow-basic hover:text-sub-green hover:bg-main-green hover:transition hover:duration-500'
          onClick={onCloseModal}
        >
          {buttonText.cancel}
        </button>
      </article>
    </Modal>
  );
};

export default ConfirmModal;
