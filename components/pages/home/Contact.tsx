import { useState } from 'react';
// import { isEmpty } from 'lodash';
import { TextField, Fab } from '@material-ui/core';
// import { ContactFormFields } from '../../types';
// import { contactFormValidation } from '../../validation';

import styles from 'styles/pages/home/contact.module.scss';

export const initFormState = {
  name: '',
  email: '',
  content: '',
};

const Contact: React.FC = () => {
  const [formValue, setformValue] = useState(initFormState);
  const [error, setError] = useState(initFormState);

  const isEmpty = (value: any) => {
    return !!value;
  };

  const onInputChange = (e: any) =>
    setformValue({ ...formValue, [e.target.name]: e.target.value });

  const onFormSubmit = async () => {
    // const validationResult = contactFormValidation(formValue);
    // if (!isEqual(initFormState, validationResult)) {
    //   return setError(validationResult);
    // }
    // setError(initFormState);
    // try {
    //   await axios.post('/api/jobs', formValue);
    //   Swal.fire('Success', 'I will contact you ASAP', 'success');
    //   setformValue(initFormState);
    // } catch (error) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Server Error! Please try again later!'
    //   });
    // }
  };

  return (
    <section className={styles.contact}>
      <h3 className="section_title">Status</h3>
      <div className={`${styles.contact_content} container`}>
        {/* Top Part */}
        <div className={styles.contact_content_box}>
          <h3 className={styles.contact_content_box_status}>Available </h3>

          <p className={styles.contact_content_box_desc}>
            I’m currently looking for new opportunity from{' '}
            <span> January 2020.</span>
          </p>
        </div>
        {/* Bottom Part */}
        <form className={styles.contact_content_form}>
          <div className={styles.contact_content_form_details}>
            <TextField
              name="name"
              value={formValue.name}
              error={!isEmpty(error.name)}
              helperText={error.name}
              onChange={onInputChange}
              label="Name"
              fullWidth
              variant="outlined"
            />
            <TextField
              value={formValue.email}
              helperText={error.email}
              error={!isEmpty(error.email)}
              name="email"
              onChange={onInputChange}
              label="Email"
              fullWidth
              variant="outlined"
            />
          </div>

          <TextField
            name="content"
            value={formValue.content}
            onChange={onInputChange}
            label="How can I help you?"
            error={!isEmpty(error.content)}
            helperText={error.content}
            fullWidth
            variant="outlined"
            multiline={true}
            rowsMax={4}
          />
          <Fab
            onClick={onFormSubmit}
            style={{ margin: '1.5rem auto' }}
            variant="extended"
            color="primary"
            aria-label="add"
          >
            Submit
          </Fab>
        </form>
      </div>
    </section>
  );
};

export default Contact;
