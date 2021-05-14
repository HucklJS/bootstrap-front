import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {LOGIN_FORM_FIELD_NAME, LOGIN_FIELD_NAME} from './login.type';
import {loginFormValidation} from './login.validation';

import {LoginComponent} from './login.component'
import { loginFormUploadData } from './login.action';
import { convertLoginFormData } from './login.convert';
import { LOGIN_STORE_NAME } from './login.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function LoginContainer() {
  const dispatch = useDispatch();
  const {state, pageLoading} = useSelector(state => {
    return {
      state: state[LOGIN_STORE_NAME],
      pageLoading: state[NAVIGATION_STORE_NAME]
    };
  });

  function loginFormSendData(values) {
    const data = convertLoginFormData(values);

    dispatch(loginFormUploadData(data));
  }

  function loginFormGetInitialValue() {
    return {
      [LOGIN_FIELD_NAME.LOGIN]: '',
      [LOGIN_FIELD_NAME.PASSWORD]: ''
    };
  }

  return <LoginComponent
    isPending={isRequestPending(state.loginForm)}
    isError={isRequestError(state.loginForm)}
    isSuccess={isRequestSuccess(state.loginForm)}
    errorMessage={getRequestErrorMessage(state.loginForm)}
    initialValue={loginFormGetInitialValue()}
    validate={loginFormValidation}
    onSubmitLoginForm={loginFormSendData}
    fieldName={LOGIN_FORM_FIELD_NAME}
    pageLoading={pageLoading}
  />;
}