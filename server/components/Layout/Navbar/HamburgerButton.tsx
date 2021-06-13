// Props
import { HamburgerButtonProps } from '../interfaces';
// styles
import styles from '@/styles/Layout/navbar.module.scss';

const Bars: React.FC = () => {
  return (
    <>
      <div className={styles.bar1} />
      <div className={styles.bar2} />
      <div className={styles.bar3} />
    </>
  );
};

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ active }) => {
  const className = active
    ? styles.hamburger_btn + ' ' + styles.active
    : styles.hamburger_btn;

  return (
    <div className={className}>
      <Bars />
    </div>
  );
};

export default HamburgerButton;
