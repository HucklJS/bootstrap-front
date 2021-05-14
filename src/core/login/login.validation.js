export const loginFormValidation = values => {
  const errors = {};

  if (!values.login) {
    errors.login = 'Required';
  }

  return errors;
};