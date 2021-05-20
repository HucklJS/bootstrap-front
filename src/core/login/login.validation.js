import { text } from '../../lib/common/text';

export const loginFormValidation = values => {
  const errors = {};

  if (!values.login) {
    errors.login = text('SIGNUP.SIGNUP_FORM.FIELD.LOGIN.ERROR.TITLE');
  }

  return errors;
};