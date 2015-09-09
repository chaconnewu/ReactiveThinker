import $ from 'jquery';
import when from 'when';
import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants';

class Auth {

  login(username, password) {
    return this.handleAuth($.ajax({
      url: LOGIN_URL,
      type: 'POST',
      data: {
        username, password
      }
    }));
  }

  handleAuth(loginPromise) {
    return loginPromise
      .then(function(response) {
        return true;
      })
      .fail(function(err){
        return false;
      });
  }
}

export default new Auth()
