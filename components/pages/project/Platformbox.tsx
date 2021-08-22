
// styles
import styles from 'styles/pages/project/project_desc.module.scss';

// interfaces
import { PlatformBoxProps } from 'interfaces/components/pages/project'

const getIconName = (name: string) => {
    // Todo: lowercase and trim
    switch (name) {
      case 'website':
        return 'fas fa-globe-asia';
      case 'android':
        return 'fab fa-android';
      case 'ios':
        return 'fab fa-app-store-ios';
      case 'desktop':
        return 'fas fa-desktop';
    }
  };
  

const PlatformBox: React.FC<PlatformBoxProps> = ({ name }) => {
  const iconName = getIconName(name);

  return (
    <div className={styles['project_desc_card_header_right_platforms']}>
      <div
        className={styles['project_desc_card_header_right_platforms_platform']}
      >
        <i aria-hidden="true" className={iconName} /> {name}
      </div>
    </div>
  );
};


export default PlatformBox;
