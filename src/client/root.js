import React from 'react/addons';
import { Component, PropTypes } from 'react';
import * as Router from 'react-router';
import reactMixin from 'react-mixin';
import './index.js';
import Auth from './services/Auth.js';

import './root.less';

let { LinkedStateMixin } = React.addons;

var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
} = Router;

var courses = ['IST110H1', 'IST330', 'IST110H2'];

class Login extends Component {
  render() {
    return (
      <div>Logged in</div>
    );
  }
}

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      loginErr: false
    };
  }

  login(e) {
    var self = this;
    e.preventDefault();
    Auth.login(this.state.username, this.state.password)
    .then(function(res) {
      console.log(res);
    })
    .fail(function(err) {
      self.setState({
        loginErr: true
      });
    });
  }

  render() {
    return (
      <div>
        <div className="ui inverted menu">
          <div className="item">
            Welcome to Critical Thinker!
          </div>
        </div>

          <div className="ui grid">
            <div className="four wide column"></div>
            <div className="six wide column">
              <h1 className="ui header">Please login to continue</h1>
              <form className="ui form" action="/login" method="post">
                <div className="required field">
                  <label>Penn State id (e.g. xyz123)</label>

                  <div className="ui icon input">
                      <input type="text" valueLink={ this.linkState('username') } placeholder="Your Penn State id" />
                      <i className="user icon"></i>
                  </div>
                </div>
                <div className="required field">
                  <label>Password</label>
                  <div className="ui icon input">
                    <input type='password' valueLink={ this.linkState('password') }  />
                    <i className="lock icon"></i>
                  </div>
                </div>

                <div>
                  <label className={ this.state.loginErr ? 'RT-Login-errorLabel' : 'RT-Login-errorLabel-hide' }>
                    Your username/password does not match Penn State records
                  </label>
                </div>

                <div className="ui primary button" onClick={ this.login.bind(this) }>Login</div>
              </form>
            </div>
          </div>
      </div>
    );
  }
}

reactMixin(LoginForm.prototype, LinkedStateMixin);

var routes = (
  <Route path="/" handler={LoginForm}>
    <Route name="login" path="/login" handler={ Login }/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
