import React from 'react';
import Radar from '../../components/Chart/Radar';
import { personalityData } from './Data';
const Personality: React.FC = () => {
  return (
    <section className='my_personality'>
      <h1 className='section_title'>Personality</h1>
      <div className='my_personality_content container'>
        <Radar data={personalityData} index='personality' keys={['Eric']} />
      </div>
    </section>
  );
};

export default Personality;
