import React from 'react';

type SectionProps = {
  title: string;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className='project_desc_card_section'>
      <h1 className='project_desc_card_section_title'>{title}</h1>
      {children}
    </div>
  );
};
export default Section;
