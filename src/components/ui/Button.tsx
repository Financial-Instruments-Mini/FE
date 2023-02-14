import React from 'react';

interface IButton {
  text: string;
  select?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, select = false, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`px-20 py-6 ${select ? 'bg-main-green' : 'bg-sub-green'}  rounded-3xl text-md font-bold  ${
        select ? 'text-sub-green' : 'text-main-green'
      } -shadow-basic text-lg hover:text-sub-green hover:bg-main-green hover:transition hover:duration-500`}
    >
      {text}
    </button>
  );
};

export default Button;
