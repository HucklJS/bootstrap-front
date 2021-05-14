import { LOGIN_DATA_NAME, LOGIN_FIELD_NAME } from './login.type';

export function convertLoginFormData(data) {
  return {
    [LOGIN_DATA_NAME.LOGIN]: data[LOGIN_FIELD_NAME.LOGIN],
    [LOGIN_DATA_NAME.PASSWORD]: data[LOGIN_FIELD_NAME.PASSWORD]
  };
}