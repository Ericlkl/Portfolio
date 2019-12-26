import React from 'react';
import Radar from '../../components/Chart/Radar';

const data = [
  {
    personality: 'Responsibility',
    Eric: 90
  },
  {
    personality: 'Talkative',
    Eric: 60
  },
  {
    personality: 'Passionate',
    Eric: 85
  },
  {
    personality: 'Cautious',
    Eric: 75
  },
  {
    personality: 'Concentration',
    Eric: 90
  },
  {
    personality: 'Persistent',
    Eric: 80
  }
];

const Personality: React.FC = () => {
  return (
    <section className='my_personality'>
      <h1 className='section_title'>Personality</h1>
      <div className='my_personality_content container'>
        <Radar data={data} index='personality' keys={['Eric']} />
      </div>
    </section>
  );
};

export default Personality;
