import React from 'react';
import MyChart from './MyChart';
const data = [
  { name: 'Coding', value: 400 },
  { name: 'Eating Pizza', value: 50 },
  { name: 'Thinking', value: 100 },
  { name: 'Software Architect', value: 150 },
  { name: 'UI Design', value: 75 },
  { name: 'Researching', value: 200 }
];

const colors = [
  '#0088FE',
  '#00C49F',
  '#607D8B',
  '#D32F2F',
  '#512DA8',
  '#5D4037'
];

const MyWork: React.FC = () => {
  return (
    <div className='work'>
      <h3 className='section_title'>Work Distribution</h3>
      <div className='work_content'>
        <div className='work_content_project_management'>
          <h1>Part Project Managment</h1>
        </div>

        <div className='work_content_chart'>
          <MyChart />
        </div>

        <div className='work_content_coding'>
          <h1>Part Coding</h1>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
