var InnerHome = require('./InnerHome.js');
var React = require('react');
//Start home

var Component = React.createClass({
  render: function () {
  	var myname = "test";
    return (
      <h1>My name is {this.props.name}</h1> 
    );
  }
});

module.exports = Component;