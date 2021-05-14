import {LOGIN_ACTION_TYPE} from './login.type';
import { LOGIN_API, LOGIN_FORM_REDIRECT_ON_UPLOAD_PATH } from './login.constant';
import { httpRequest } from '../../main/http';
import { authSetData } from '../../lib/common/auth';
import { redirect } from '../../main/navigation';

export function loginFormUploadData(data) {
  return async dispatch => {
    dispatch({
      type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_PENDING
    });

    try {
      const res = await httpRequest({
        method: LOGIN_API.LOGIN_FORM_UPLOAD.METHOD,
        url: LOGIN_API.LOGIN_FORM_UPLOAD.ENDPOINT,
        data
      });

      dispatch(authSetData(res.data.accessToken));

      dispatch({
        type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_SUCCESS
      });

      redirect(LOGIN_FORM_REDIRECT_ON_UPLOAD_PATH);
    } catch (e) {
      console.log(e);
      if (e.response) {
        dispatch({
          type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_ERROR,
          errorMessage: e.response.data.message
        });
      }
    }
  };
}