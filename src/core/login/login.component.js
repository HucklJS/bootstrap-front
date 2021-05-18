import React from 'react';

import {LoginHeaderContainer} from './frame/login-header';
import {LoginFormContainer} from './frame/login-form';
import {LoginFooterContainer} from './frame/login-footer';

export function LoginComponent(props) {
  return (
    <div>
      <LoginHeaderContainer
        tid={'SIGNUP.SIGNUP_FORM.HEADER.TITLE'}
      />
      <LoginFormContainer {...props}/>
      <LoginFooterContainer
        tid={'SIGNUP.SIGNUP_FORM.FOOTER.TITLE'}
      />
    </div>
  );
}