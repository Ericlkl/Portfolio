import React from 'react';
import Flip from 'react-reveal';

const personalities: Personality[] = [
  {
    icon: <i className='fas fa-puzzle-piece' />,
    title: 'Problem Solver',
    description: (
      <p className='personality_grid_box_desc'>
        I believe <span>there’s a solution for everything</span>, it just takes
        the right mindset and approach to find out the solution.
      </p>
    )
  },
  {
    icon: <i className='far fa-comments' />,
    title: 'Team Player',
    description: (
      <p className='personality_grid_box_desc'>
        I love working in a team, I believe
        <span> collaboration is key to reaching success.</span>
      </p>
    )
  },
  {
    icon: <i className='far fa-lightbulb' />,
    title: 'Enthusiastic Energiser',
    description: (
      <p className='personality_grid_box_desc'>
        I have a resilient and bubbly spirit that keeps me
        <span> motivated and committed to my work and team.</span>
      </p>
    )
  },
  {
    icon: <i className='far fa-heart' />,
    title: 'Passionate Empathiser',
    description: (
      <p className='personality_grid_box_desc'>
        Finishing user requirement is not enough. I like trying my best to
        <span> improve the User Experience.</span>
      </p>
    )
  },
  {
    icon: <i className='far fa-compass' />,
    title: 'Curious Discoverer',
    description: (
      <p className='personality_grid_box_desc'>
        <span>Researching can address most of the problems.</span> I like using
        insights to identify opportunities for improvement.
      </p>
    )
  },
  {
    icon: <i className='fas fa-pencil-ruler' />,
    title: 'Quality Assurer',
    description: (
      <p className='personality_grid_box_desc'>
        I have a <span> thorough understanding of design patterns </span>and an
        eye for detail.
      </p>
    )
  }
];

type Personality = {
  icon: JSX.Element;
  title: string;
  description: JSX.Element;
};

type PersonalityBoxProps = {
  personality: Personality;
};

const PersonalityBox: React.FC<PersonalityBoxProps> = ({ personality }) => {
  const { icon, title, description } = personality;
  return (
    <Flip>
      <div className='personality_grid_box'>
        <div className='personality_grid_box_hexagon'>{icon}</div>

        <h2 className='personality_grid_box_title'>{title}</h2>
        {description}
      </div>
    </Flip>
  );
};

const PersonalityGrid: React.FC = () => {
  const personalityBoxs = personalities.map(persona => (
    <PersonalityBox key={persona.title} personality={persona} />
  ));
  return (
    <section className='personality'>
      <h1 className='section_title'>About ME</h1>
      <div className='personality_grid container'>{personalityBoxs}</div>
    </section>
  );
};

export default PersonalityGrid;
