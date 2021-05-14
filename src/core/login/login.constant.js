export const LOGIN_ROUTE_PATH = '/login';

export const LOGIN_STORE_NAME = 'LOGIN';

export const LOGIN_API = {
  LOGIN_FORM_UPLOAD: {
    // first make ENDPOINT = /auth/signup
    ENDPOINT: '/auth/login',
    METHOD: 'POST'
  }
};

export const LOGIN_FORM_REDIRECT_ON_UPLOAD_PATH = '/home';
export const LOGIN_REDIRECT_ON_LOGGED = '/logout';