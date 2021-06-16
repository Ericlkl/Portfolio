import { ReactSVG } from 'react-svg';

import { getDevToolIconPath } from 'helper';

import { DevToolIconProps } from 'interfaces/components/common/devToolIcon.interface'



const DevToolIcon: React.FC<DevToolIconProps> = ({
  toolName,
  className,
  onIconClicked,
}) => {
  const iconUrl = getDevToolIconPath(toolName);

  return (
    <ReactSVG
      style={{ width: '50px' }}
      onClick={onIconClicked}
      className={className}
      src={iconUrl}
    />
  );
};

export default DevToolIcon;
