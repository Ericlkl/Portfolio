import React from 'react';
import StackedBar from '../../components/Chart/StackedBar';

const myKeys = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Bootstrap4',
  'NodeJS',
  'ExpressJS',
  'TypeScript',
  'Mongoose',
  'SQL',
  'Sequalize',
  'C#',
  'Xamarin',
  'Flutter',
  'Firebase',
  'AWS',
  'Redis',
  'Docker'
];

const myFills = [
  {
    match: {
      id: 'fries'
    },
    id: 'dots'
  },
  {
    match: {
      id: 'sandwich'
    },
    id: 'lines'
  }
];

const myData = [
  {
    Fields: 'Front End',
    HTML: 95,
    HTMLColor: '#2a4d69',
    CSS: 80,
    CSSColor: '#63ace5',
    JavaScript: 90,
    JavaScriptColor: '#4364A8',
    React: 90,
    ReactColor: '#4b86b4',
    Redux: 85,
    ReduxColor: '#6497b1',
    Bootstrap4: 80,
    Bootstrap4Color: '#adcbe3'
  },
  {
    Fields: 'Back End',
    NodeJS: 90,
    NodeJSColor: '#0e9aa7',
    ExpressJS: 95,
    ExpressJSColor: '#3da4ab',
    TypeScript: 75,
    TypeScriptColor: '#54b2a9',
    Mongoose: 85,
    MongooseColor: '#65c3ba',
    Sequalize: 80,
    SequalizeColor: '#83d0c9'
  },
  {
    Fields: 'Mobile',
    'C#': 70,
    'C#Color': '#ee4035',
    Flutter: 65,
    FlutterColor: '#651e3e',
    Firebase: 70,
    FirebaseColor: '#451e3e',
    Xamarin: 80,
    XamarinColor: '#851e3e'
  },
  {
    Fields: 'Deployment',
    AWS: 75,
    AWSColor: '#4b3832',
    Redis: 80,
    RedisColor: '#854442',
    Docker: 85,
    DockerColor: '#be9b7b'
  }
];

const MySkills: React.FC = () => {
  return (
    <section className='mySkills'>
      <h1 className='section_title'>My Skills</h1>
      <div className='mySkills_content container'>
        <StackedBar
          data={myData}
          fills={myFills}
          keys={myKeys}
          xlabel='Fields'
          ylabel='Confidence'
        />
      </div>
    </section>
  );
};

export default MySkills;
