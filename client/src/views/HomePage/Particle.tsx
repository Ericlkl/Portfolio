import React from 'react';
import Particles from 'react-particles-js';

const Particle: React.FC = () => {
  return (
    <Particles
      className='header_particle'
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 2,
              size_min: 0.3
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            random: true,
            speed: 1,
            direction: 'right',
            out_mode: 'out'
          }
        }
      }}
    />
  );
};

export default Particle;
