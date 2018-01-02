let React = require('react');
console.log(React);
let ReactDOM = require('react-dom');
let AppComponent = require('./components/test');
// var AppComponent = <h1>hello</h1>;
ReactDOM.render(
  <AppComponent name="allen"/>,
  document.getElementById('content')
);