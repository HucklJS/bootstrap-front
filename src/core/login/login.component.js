import React from 'react';

import {LoginHeaderContainer} from './frame/login-header';
import {LoginFormContainer} from './frame/login-form';

export function LoginComponent(props) {
  return (
    <div>
      <LoginHeaderContainer>Авторизация</LoginHeaderContainer>
      <LoginFormContainer {...props}/>
      <div>Нет аккаунта? Регистрация.</div>
    </div>
  )
}