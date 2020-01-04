import validator from 'validator';
import { ContactFormFields } from '../types';
import { initFormState } from '../views/HomePage/Contact';

export const contactFormValidation = (contactFormValues: ContactFormFields) => {
  const { name, email, content } = contactFormValues;

  let errors: ContactFormFields = { ...initFormState };

  if (validator.isEmpty(name)) {
    errors.name = 'Please insert your name';
  }

  if (validator.isEmpty(email)) {
    errors.email = 'Please insert your email';
  } else if (!validator.isEmail(email)) {
    errors.email = 'Email format incorrect!';
  }
  if (validator.isEmpty(content)) {
    errors.content = 'Please insert request';
  }

  return errors;
};
