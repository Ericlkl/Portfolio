import styles from '@/styles/Layout/navbar.module.scss';

// @material-ui/icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const NavLinks: React.FC = () => {
  return (
    <div className={`${styles.nav_links} ${styles.active}`}>
      <a
        href="https://drive.google.com/file/d/130Bs0y92n3BKYPmDm-lSXeVvCzMMMj55/view"
        className={styles.nav_link}
      >
        <AccountCircleIcon />
        About
      </a>
      <a
        href="https://drive.google.com/file/d/130Bs0y92n3BKYPmDm-lSXeVvCzMMMj55/view"
        className={styles.nav_link}
      >
        <ViewCompactIcon />
        Projects
      </a>
      <a
        href="https://drive.google.com/file/d/130Bs0y92n3BKYPmDm-lSXeVvCzMMMj55/view"
        className={styles.nav_link}
      >
        <AssignmentIndIcon />
        Resume
      </a>
      <a href="https://github.com/Ericlkl" className={styles.nav_link}>
        <i
          aria-hidden="true"
          className={`${styles.nav_link_icon} fab fa-github`}
        />
      </a>
    </div>
  );
};

export default NavLinks;
