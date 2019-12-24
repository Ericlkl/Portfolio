import React from 'react';

type CancelBtnProps = {
  onBtnClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className: string;
};

const CancelBtn: React.FC<CancelBtnProps> = ({ onBtnClick, className }) => {
  return (
    <div onClick={onBtnClick} className={className}>
      <i className='far fa-times-circle' />
    </div>
  );
};

export default CancelBtn;
