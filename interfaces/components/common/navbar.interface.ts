import { BrandColor } from './myBrand.interface';

export interface NavLink {
	pageName?: string;
	href: string;
	icon: JSX.Element;
}
export interface NavbarProps {
	logoColor: BrandColor;
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
