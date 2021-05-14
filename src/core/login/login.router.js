import {setActivePath} from '../../lib/common/navigation'
import { LOGIN_REDIRECT_ON_LOGGED, LOGIN_ROUTE_PATH } from './login.constant';
import { authRedirectLogged } from '../../lib/common/auth';

export function LoginRouter(ctx) {
  ctx.store.dispatch(setActivePath(LOGIN_ROUTE_PATH));
  // authRedirectLogged(ctx, LOGIN_REDIRECT_ON_LOGGED);
}