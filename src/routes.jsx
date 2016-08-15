const React = require('react');
const ReactRouter = require('react-router');
// const HashHistory = require('react-router/lib/hashhistory');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Main = require('./components/main');

module.exports = (
  <Router>
    <Route path='/' component={Main}>

    </Route>
  </Router>
);
