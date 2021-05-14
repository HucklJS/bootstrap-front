import React from 'react';

import {LoginFormContainer} from './frame/login-form';

export function LoginComponent(props) {
  return (
    <div>
      <div>Авторизация</div>
      <LoginFormContainer {...props}/>
      <div>Нет аккаунта? Регистрация.</div>
    </div>
  )
}