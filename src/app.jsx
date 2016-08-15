const React = require('react');
const ReactDOM = require('react-dom');
const Routes = require('./routes');
var Api = require('./utils/api');

ReactDOM.render(Routes, document.querySelector('.container'));
