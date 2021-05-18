import { text } from '../../lib/common/text';

export const loginFormValidation = values => {
  const errors = {};

  if (!values.login) {
    errors.login = text('Required');
  }

  return errors;
};