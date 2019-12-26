import { ResponsiveRadar } from '@nivo/radar';

import React from 'react';

type RadarProps = {
  keys: string[];
  index: string;
  data: object[];
};

const Radar: React.FC<RadarProps> = ({ data, keys, index }) => {
  return (
    <ResponsiveRadar
      data={data}
      keys={keys}
      indexBy={index}
      maxValue='auto'
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      curve='linearClosed'
      borderWidth={2}
      borderColor={{ from: 'color' }}
      gridLevels={4}
      gridShape='linear'
      gridLabelOffset={25}
      enableDots={true}
      dotSize={10}
      dotColor={{ theme: 'background' }}
      dotBorderWidth={2}
      dotBorderColor={{ from: 'color' }}
      enableDotLabel={true}
      dotLabel='value'
      dotLabelYOffset={-12}
      colors={{ scheme: 'category10' }}
      fillOpacity={0.4}
      blendMode='multiply'
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      isInteractive={true}
      legends={[
        {
          anchor: 'bottom',
          direction: 'column',
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />
  );
};

export default Radar;
