import React from 'react';

const personalities: Personality[] = [
  {
    icon: <i className='fas fa-puzzle-piece' />,
    title: 'Problem Solver',
    description:
      'I believe there’s a solution for everything, it just takes the right mindset and approach to find it.'
  },
  {
    icon: <i className='far fa-compass' />,
    title: 'Curious Discoverer',
    description:
      'I love researching; I’m a collector of information and love to use insights to identify opportunities for growth and improvement.'
  },
  {
    icon: <i className='far fa-lightbulb' />,
    title: 'Enthusiastic Energiser',
    description:
      'I have a resilient and bubbly spirit (which tends to rub off on others) that keeps me motivated and committed to my work and team.'
  },
  {
    icon: <i className='far fa-heart' />,
    title: 'Passionate Empathiser',
    description:
      'Nothing is more important to me than advocating for others and keeping the end users of a product or service front of mind.'
  },
  {
    icon: <i className='far fa-comments' />,
    title: 'Team Player',
    description:
      'I thrive off working with others, while I can work autonomously when required, I believe collaboration is key to building great experiences.'
  },
  {
    icon: <i className='fas fa-pencil-ruler' />,
    title: 'Quality Assurer',
    description:
      'If you’re going to do it at all, you better do it well. I have a thorough understanding of user-centred design principles and an eye for detail.'
  }
];

type Personality = {
  icon: JSX.Element;
  title: string;
  description: string;
};

type PersonalityBoxProps = {
  personality: Personality;
};

const PersonalityBox: React.FC<PersonalityBoxProps> = ({ personality }) => {
  const { icon, title, description } = personality;
  return (
    <div className='personality_grid_box'>
      {icon}
      <h2 className='personality_grid_box_title'>{title}</h2>
      <p className='personality_grid_box_desc'>{description}</p>
    </div>
  );
};

const PersonalityGrid: React.FC = () => {
  const personalityBoxs = personalities.map(persona => (
    <PersonalityBox personality={persona} />
  ));
  return (
    <section className='personality'>
      <h1 className='personality_title'>About</h1>
      <div className='personality_grid'>{personalityBoxs}</div>
    </section>
  );
};

export default PersonalityGrid;
