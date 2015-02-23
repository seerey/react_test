var React = require('react');

var GroceryList = React.createClass({
	handleClick: function(index) {
		console.log('You clicked: ' + this.props.items[index]);
	},

	render: function() {
		return (
			<div>
				{this.props.items.map(function(item, index) {
					return (
						<div onClick={this.handleClick.bind(this, index)} key={index}>{item}</div>
					);
				}, this)}
			</div>
		);
	}
});

module.exports = GroceryList;