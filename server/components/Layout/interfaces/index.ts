export type LogoColor = 'blue' | 'grey' | 'teal';

export interface NavState {
  active: boolean;
}

export interface NavbarProps {
  logoColor: LogoColor;
}

export interface HamburgerButtonProps {
  active: boolean;
}
