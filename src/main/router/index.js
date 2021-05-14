import { routesInit } from './router.core';

import {LOGIN_ROUTE_PATH, LoginRouter} from '../../core/login'

export const routes = {
  [LOGIN_ROUTE_PATH]: LoginRouter
};

export const Router = routesInit(routes);
