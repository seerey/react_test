var React = require('react');


var TodoList = React.createClass({

	handleDelete: function(index, event) {
		event.preventDefault();
		event.stopPropagation();
		console.log(index);
		delete this.props.items[index];
		this.setState({items: this.props.items});

	},

	//Bind: 

	render: function() {
		return (
			<ul>
				{this.props.items.map(function(item, index) {
					return (
						<li>{item}&nbsp;
							<a href="#" onClick={this.handleDelete.bind(this, index)} key={index}>{index} x</a>
						</li>
					);
				}, this)}
			</ul>
		);
	}
});

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			items: ['simple', 'item'], 
			text: ''
		};
	},

	getDefaultProps: function() {

	},

	shouldComponentUpdate: function(nextProps, nextState){
		return true;
	},

	onChange: function(e) {
		this.setState({text: e.target.value});
	},

	handleSubmit: function(e) {
		e.preventDefault();
		var nextItems = this.state.items.concat([this.state.text]);
		
		var nextText = '';
		this.setState({items: nextItems, text: nextText});
	},

	render: function() {
		return (
			<div>
				<h3>TODO</h3>
				<TodoList items={this.state.items} />
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} value={this.state.text} />
					<button>{'Add #' + (this.state.items.length + 1)}</button>
				</form>
			</div>
		);
	}
});

module.exports = TodoApp;