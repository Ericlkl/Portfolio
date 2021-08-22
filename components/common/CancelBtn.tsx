// Interfaces
import { CancelBtnProps } from 'interfaces/components/common/cancelBtn.interface'

const CancelBtn: React.FC<CancelBtnProps> = ({ onBtnClick, className }) => {
  return (
    <div onClick={onBtnClick} className={className}>
      <i className="far fa-times-circle" aria-hidden="true" />
    </div>
  );
};

export default CancelBtn;
