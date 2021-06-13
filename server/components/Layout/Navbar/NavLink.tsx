import Link from 'next/link';
import styles from '@/styles/Layout/navbar.module.scss';
import { NavLinkProps } from '../interfaces';

const NavLink: React.FC<NavLinkProps> = ({ href, label, children }) => {
  return (
    <Link href={href}>
      <span className={styles.nav_link}>
        {children}
        {label}
      </span>
    </Link>
  );
};

export default NavLink;
