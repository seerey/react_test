require('./main.css');

var React = require('react');

var route = function () {
	console.log(location.hash);
	if (!location.hash || location.hash.length === 1) {
		require.ensure([], function (require) {
			var Home = require('./home/Home.js');
			React.render(
				<Home name="Victor" />
				, document.getElementById('app'));
		});
	} 
	else if (location.hash === "#todoapp") {
		require.ensure([], function (require) {
			var TodoApp = require('./todoApp/TodoApp.js');
			React.render(
				<TodoApp text="default" />
				, document.getElementById('app')
				);
		});
	}
	else if (location.hash === "#grocerylist") {
		require.ensure([], function (require) {
			var GroceryList = require('./todoApp/GroceryList.js');
			React.render(
				<GroceryList items={['Apple', 'Banana', 'Cranberry']} />
				, document.getElementById('app')
				);
		});
	}
	else {
		require.ensure([], function (require) {
			var Admin = require('./admin/Admin.js');
			React.render(Admin(), document.getElementById('app'));
		});
	}

};

window.onhashchange = route;

route();

if (module.hot) {
	module.hot.accept(function () {
		route();
	});
}
