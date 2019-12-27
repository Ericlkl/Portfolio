import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

type Fill = {
  match: {
    id: string;
  };
  id: string;
};

type StackBarProps = {
  data: object[];
  keys: string[];
  fills?: Fill[];
  xlabel: string;
  ylabel: string;
};

const StackBar: React.FC<StackBarProps> = ({
  data,
  keys,
  fills,
  xlabel,
  ylabel
}) => {
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={xlabel}
      margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      colors={({ id, data }) => data[`${id}Color`]}
      theme={{
        grid: {
          line: {
            stroke: 'rgb(133,133,133)'
          }
        }
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={fills}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: xlabel,
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: ylabel,
        legendPosition: 'middle',
        legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor='#eeeeee'
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default StackBar;
