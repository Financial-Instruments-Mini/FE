import React from 'react';

interface IButton {
  text: string;
  select?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, select = true, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`px-20 py-6 ${select ? 'bg-main-green' : 'bg-sub-green'}  rounded-3xl text-md font-bold  ${
        select ? 'text-sub-green' : 'text-main-green'
      } -shadow-basic text-lg`}
    >
      {text}
    </button>
  );
};

export default Button;
