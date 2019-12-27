import React from 'react';
import { TextField, Fab } from '@material-ui/core';
import { LightSpeed } from 'react-reveal';

const Contact: React.FC = () => {
  return (
    <section className='contact'>
      <h3 className='section_title'>Status</h3>
      <div className='contact_content container'>
        {/* Top Part */}
        <div className='contact_content_box'>
          <LightSpeed right>
            <h3 className='contact_content_box_status'>Available </h3>
          </LightSpeed>
          <LightSpeed left>
            <p className='contact_content_box_desc'>
              I’m currently looking for new opportunity from{' '}
              <span> January 2020.</span>
            </p>
          </LightSpeed>
        </div>
        {/* Bottom Part */}
        <form className='contact_content_form'>
          <div className='contact_content_form_details'>
            <TextField label='Name' fullWidth variant='outlined' />
            <TextField label='Email' fullWidth variant='outlined' />
          </div>

          <TextField
            label='How can I help you?'
            fullWidth
            variant='outlined'
            multiline={true}
            rowsMax={4}
          />
          <Fab
            style={{ margin: '1.5rem auto' }}
            variant='extended'
            color='primary'
            aria-label='add'
          >
            Submit
          </Fab>
        </form>
      </div>
    </section>
  );
};

export default Contact;
