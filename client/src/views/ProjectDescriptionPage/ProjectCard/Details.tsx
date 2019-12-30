import React from 'react';

const Detail: React.FC = () => {
  return (
    <div className='project_desc_card_section_details_detail'>
      <h1 className='project_desc_card_section_details_detail_title'>
        Developed By
      </h1>
      <h3 className='project_desc_card_section_details_detail_value'>
        Eric lee
      </h3>
    </div>
  );
};

const Details: React.FC = () => {
  return (
    <div className='project_desc_card_section_details'>
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
    </div>
  );
};

export default Details;
