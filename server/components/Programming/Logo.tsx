import { ReactSVG } from 'react-svg';

type LogoProps = {
  toolName: string;
  className?: string;
  onLogoClick?: () => void;
};

const getSvgPornIconName: (name: string) => string = (name: string) => {
  // Todo: Fix Trim
  // switch (_.trim(name).toLowerCase()) {
  switch (name.toLowerCase()) {
    case 'typescript':
      return 'typescript';
    case 'html':
    case 'html5':
      return 'html5';
    case 'node':
    case 'nodejs':
      return 'nodejs';
    case 'css':
    case 'css3':
      return 'css3';
    case 'scss':
      return 'node-sass';
    case 'c#':
      return 'csharp';
    case 'vs code':
      return 'vscode';
    case 'ios':
      return 'apple-app-store';
    case 'android':
      return 'android';
    case 'github':
      return 'github';
    case 'r':
      return 'r-lang';
    case 'docker':
      return 'docker';
    default:
      return name.toLowerCase();
  }
};

const Logo: React.FC<LogoProps> = ({ toolName, className, onLogoClick }) => {
  const iconName = getSvgPornIconName(toolName);
  const src = `icons/${iconName}/${iconName}-original.svg`;

  return (
    <ReactSVG
      style={{ width: '50px' }}
      onClick={onLogoClick}
      className={className}
      src={src}
    />
  );
};

export default Logo;
