import styles from 'styles/common/navbar.module.scss';

// Components
import NavLink from './NavLink';

// Interfaces
import { NavLinksProps } from 'interfaces/components/common/navbar.interface';

const NavLinks: React.FC<NavLinksProps> = ({ active, navLinks }) => {
  const wrapperClassName = active
    ? styles.nav_links + ' ' + styles.active
    : styles.nav_links;

  const NavLinkComponents = navLinks.map((navLink, index) => (
    <NavLink key={navLink.href} href={navLink.href} label={navLink.pageName}>
      {navLink.icon}
    </NavLink>
  ));

  return <div className={wrapperClassName}>{NavLinkComponents}</div>;
};

export default NavLinks;
