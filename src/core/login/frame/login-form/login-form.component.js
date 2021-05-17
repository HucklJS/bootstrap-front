import React from 'react';
import styled from 'styled-components'
import { FieldPrimary } from '../../../../lib/elements/field';
import { FieldLayout } from '../../../../lib/elements/layout'
import { SubmitButton } from '../../../../lib/elements/buttons'

export const LoginFormComponent = (props) => {
  const {
    fieldLogin,
    fieldPassword,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,

    isPending,
    isError,
    isSuccess,
    errorMessage,

    pageLoading,
  } = props;

  const isFieldErr = name => {
    return errors[name] && touched[name] && errors[name]
  };

  const isSubmitDisabled = () => {
    return isPending || isSuccess;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        {pageLoading && 'pageLoading'}
        <FieldLayout>
          <FieldPrimary
            titleTid={'SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE'}
            placeholderTid={'SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER'}
            name={fieldLogin}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldLogin]}
            error={isFieldErr(fieldLogin)}
          />

          <FieldPrimary
            type='password'
            titleTid={'SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE'}
            placeholderTid={'SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER'}
            name={fieldPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldPassword]}
            error={isFieldErr(fieldPassword)}
          />
        </FieldLayout>
        <SubmitButton type="submit" disabled={isSubmitDisabled()}>
          Submit
        </SubmitButton>
        {isPending && 'Loading...'}
        {isError && errorMessage}
      </Container>
    </form>
  );
};

const Container = styled.div`
  display: grid;
  gap: 12px;
`;


