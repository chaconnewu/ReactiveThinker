import React, { Component, PropTypes } from 'react';
import * as Router from 'react-router';
var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
} = Router;

var courses = ['IST110H1', 'IST330', 'IST110H2'];

class Login extends Component {

}

class Root extends Component {

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
                      <input type='text' placeholder="Your Penn State id" />
                      <i className="user icon"></i>
                  </div>
                </div>
                <div className="required field">
                  <label>Password</label>
                  <div className="ui icon input">
                    <input type='password' />
                    <i className="lock icon"></i>
                  </div>
                </div>
                <input type='submit' className="ui blue submit button" value="Login" />
              </form>
            </div>
          </div>

        <div><Link to="/login">Login</Link></div>
        <div><Link to="/courses">Courses</Link></div>
        <div className="Content">
          <RouteHandler/>
        </div>
      </div>
    );
  }
}
var routes = (
  <Route path="/" handler={Root}>
    <Route name="login" path="login" handler={Login}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
