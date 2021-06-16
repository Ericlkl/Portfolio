// styles
import styles from 'styles/pages/home/personality.module.scss'

export const features = [
  {
    name: 'Interactive Web Application',
    icon: (
      <i
        aria-hidden="true"
        className="feature_project_content_descbox_feature_icon fas fa-laptop-code"
      />
    ),
  },
  {
    name: 'MERN Stack Development',
    icon: (
      <i
        aria-hidden="true"
        className="feature_project_content_descbox_feature_icon fab fa-react"
      />
    ),
  },
  {
    name: 'Data Visualization',
    icon: (
      <i
        aria-hidden="true"
        className="feature_project_content_descbox_feature_icon fas fa-chart-area"
      />
    ),
  },
  {
    name: 'Live Streaming',
    icon: (
      <i
        aria-hidden="true"
        className="feature_project_content_descbox_feature_icon fas fa-satellite-dish"
      />
    ),
  },
];

export const personalities = [
  {
    icon: <i aria-hidden="true" className="fas fa-puzzle-piece" />,
    title: 'Problem Solver',
    description: (
      <p className={styles.personality_grid_box_desc}>
        I believe <span>there’s a solution for everything</span>, it just takes
        the right mindset and approach to find out the solution.
      </p>
    ),
  },
  {
    icon: <i aria-hidden="true" className="far fa-comments" />,
    title: 'Team Player',
    description: (
      <p className={styles.personality_grid_box_desc}>
        I love working in a team, I believe
        <span> collaboration is key to reaching success.</span>
      </p>
    ),
  },
  {
    icon: <i aria-hidden="true" className="far fa-lightbulb" />,
    title: 'Enthusiastic Energiser',
    description: (
      <p className={styles.personality_grid_box_desc}>
        I have a resilient and bubbly spirit that keeps me
        <span> motivated and committed to my work and team.</span>
      </p>
    ),
  },
  {
    icon: <i aria-hidden="true" className="far fa-heart" />,
    title: 'Passionate Empathiser',
    description: (
      <p className={styles.personality_grid_box_desc}>
        Finishing user requirement is not enough. I like trying my best to
        <span> improve the User Experience.</span>
      </p>
    ),
  },
  {
    icon: <i aria-hidden="true" className="far fa-compass" />,
    title: 'Curious Discoverer',
    description: (
      <p className={styles.personality_grid_box_desc}>
        <span>Researching can address most of the problems.</span> I like using
        insights to identify opportunities for improvement.
      </p>
    ),
  },
  {
    icon: <i aria-hidden="true" className="fas fa-pencil-ruler" />,
    title: 'Quality Assurer',
    description: (
      <p className={styles.personality_grid_box_desc}>
        I have a <span> thorough understanding of design patterns </span>and an
        eye for detail.
      </p>
    ),
  },
];

export const services = [
  {
    icon: 'fa-laptop',
    name: 'Web Development',
    features: 'Responsive and Interactive',
    desc: `Every website I built work across all devices no matter large or small, and it is extremely fast and interactive.`,
    skills: [
      'HTML5',
      'CSS3',
      'SCSS',
      'JavaScript ES6+',
      'React',
      'React Context',
      'Redux',
      'Semantic UI',
      'Bootstrap 4',
      'Axios',
    ],
  },
  {
    icon: 'fa-server',
    name: 'Server Apps Development',
    features: 'Robust and Scalable',
    desc: `Managing the interchange of data between the server and the users, optimization of the server for maximum speed and scalability.`,
    skills: [
      'NodeJS',
      'ExpressJS',
      'Redis',
      'JsonWebToken',
      'MongoDB',
      'Mongoose',
      'MySQL',
      'Sequalize',
      'AWS',
      'Docker',
    ],
  },
  {
    icon: 'fa-mobile-alt',
    name: 'Mobile Apps Development',
    features: 'User Friendly and Compatible',
    desc: `Every mobile application I built works perfectly on Andriod / IOS, and they are easy to use without learning.`,
    skills: [
      'C#',
      'Xamarin Forms',
      'Xamarin Forms Essential',
      'Xamarin Forms Google Map',
      'SQLite',
    ],
  },
];
