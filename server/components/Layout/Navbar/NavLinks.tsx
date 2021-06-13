import styles from '@/styles/Layout/navbar.module.scss';

// Components
import NavLink from './NavLink';

// Interfaces
import { NavLinksProps } from '../interfaces';

const NavLinks: React.FC<NavLinksProps> = ({ active, navLinks }) => {
  const wrapperClassName = active
    ? styles.nav_links + ' ' + styles.active
    : styles.nav_links;

  const NavLinkComponents = navLinks.map((navLink) => (
    <NavLink
      key={navLink.pageName}
      href={navLink.href}
      label={navLink.pageName}
    >
      {navLink.icon}
    </NavLink>
  ));

  return <div className={wrapperClassName}>{NavLinkComponents}</div>;
};

export default NavLinks;
