import Link from 'next/link';
import styles from 'styles/common/navbar.module.scss';
import { NavLinkProps } from 'interfaces/components/common/navbar.interface';

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
