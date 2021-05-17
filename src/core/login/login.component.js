import React from 'react';

import {LoginHeaderContainer} from './frame/login-header';
import {LoginFormContainer} from './frame/login-form';
import {LoginFooterContainer} from './frame/login-footer';

export function LoginComponent(props) {
  return (
    <div>
      <LoginHeaderContainer>Авторизация</LoginHeaderContainer>
      <LoginFormContainer {...props}/>
      <LoginFooterContainer>Нет аккаунта? Регистрация.</LoginFooterContainer>
    </div>
  );
}