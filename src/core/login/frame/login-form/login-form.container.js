import React from 'react';
import { Formik } from 'formik';
import {LoginFormComponent} from './login-form.component'
import { LOGIN_FORM_FIELD_KEY } from './login-form.constants';

export const LoginFormContainer = (props) => {
  const {
    initialValue,
    validate,
    onSubmitLoginForm,
    fieldName,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading
  } = props;

  const LoginName = fieldName[LOGIN_FORM_FIELD_KEY.LOGIN];
  const PasswordName = fieldName[LOGIN_FORM_FIELD_KEY.PASSWORD];

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validate={validate}
        onSubmit={onSubmitLoginForm}
      >
        {(props) => (
          <LoginFormComponent
            {...props}
            fieldLogin={LoginName}
            fieldPassword={PasswordName}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            pageLoading={pageLoading}
          />
        )}
      </Formik>
    </div>
  );
};

