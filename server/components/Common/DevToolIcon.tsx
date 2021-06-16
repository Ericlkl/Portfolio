import { ReactSVG } from 'react-svg';

import { DevToolIconProps } from 'interfaces/components/common/devToolIcon.interface'

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

const DevToolIcon: React.FC<DevToolIconProps> = ({
  toolName,
  className,
  onIconClicked,
}) => {
  const iconName = getSvgPornIconName(toolName);
  const src = `icons/${iconName}/${iconName}-original.svg`;

  return (
    <ReactSVG
      style={{ width: '50px' }}
      onClick={onIconClicked}
      className={className}
      src={src}
    />
  );
};

export default DevToolIcon;
