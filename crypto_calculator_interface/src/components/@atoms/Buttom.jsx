import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="bg-primary w-[110px] text-white h-[45px] rounded-md">
      {text}
    </button>
  );
};

export default Button;
