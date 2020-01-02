import React from 'react';

type DetailProps = {
  name: string;
  value: string;
};
const Detail: React.FC<DetailProps> = ({ name, value }) => {
  return (
    <div className='project_desc_card_section_details_detail'>
      <h1 className='project_desc_card_section_details_detail_title'>{name}</h1>
      <h3 className='project_desc_card_section_details_detail_value'>
        {value}
      </h3>
    </div>
  );
};

type DetailsProps = {
  information: object;
};

const Details: React.FC<DetailsProps> = ({ information }) => {
  return (
    <div className='project_desc_card_section_details'>
      {Object.entries(information).map(detail => (
        <Detail key={detail[0]} name={detail[0]} value={detail[1]} />
      ))}
    </div>
  );
};

export default Details;
