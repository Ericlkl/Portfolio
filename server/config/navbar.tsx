// @material-ui/icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import styles from '@/styles/Layout/navbar.module.scss';

export const navbarInfo = {
  band: {
    name: 'ERIC LEE',
  },
  navLinks: [
    { pageName: 'About', href: '/about', icon: <AccountCircleIcon /> },
    { pageName: 'Project', href: '/projects', icon: <ViewCompactIcon /> },
    {
      pageName: 'Resume',
      href: 'https://drive.google.com/file/d/130Bs0y92n3BKYPmDm-lSXeVvCzMMMj55/view',
      icon: <AssignmentIndIcon />,
    },
    {
      href: 'https://github.com/Ericlkl',
      icon: (
        <i
          aria-hidden="true"
          className={`${styles.nav_link_icon} fab fa-github`}
        />
      ),
    },
  ],
};
