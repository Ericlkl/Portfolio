export type LogoColor = 'blue' | 'grey' | 'teal';

interface NavLink {
  pageName?: string;
  href: string;
  icon: React.FC;
}
export interface NavbarProps {
  logoColor: LogoColor;
}

export interface NavLinksProps {
  active: boolean;
  navLinks: NavLink[];
}
export interface NavLinkProps {
  href: any;
  label?: string;
}

export interface HamburgerButtonProps {
  active: boolean;
  onClick?: () => void;
}
