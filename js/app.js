$(function(){

	// MVO Model-View-Octopus - MV*
	var model = {
		init: function() {
			//
		},
		getCurrencyList: function() {
			// Sækji gögn frá http://apis.is/currency/arion
			return $.get("http://apis.is/currency/arion").then( function( data, status, jqXHR ) { return data; });;
		}
	};

	var octopus = {
		init: function() {
			model.init();
			view.init();
		},
		getData: function() {
			// Sækji gögn
			return model.getCurrencyList();
		},
		getTemplate: function() {
			// Sækji template fyrir upphafsíðu appsins.
			return $.get("js/templates/index.handlebars").then( function( template, status, jqXHR ) { return template; });
		},
		getStuff: function() {
			return $.when( octopus.getTemplate(), octopus.getData());
		}
	};

	var octopusCalculator = {
		init: function(val) {
			model.init();
			viewCalculator.init(val);
		},
		getData: function() {
			// Sækji gögn
			return model.getCurrencyList();
		},
		getTemplate: function() {
			// Sækji template fyrir upphafsíðu appsins.
			return $.get("js/templates/calculator.handlebars").then( function( template, status, jqXHR ) { return template; });
		},
		getStuff: function() {
			return $.when( octopusCalculator.getTemplate(), octopusCalculator.getData());
		}
	};

	var view = {
		init: function() {
			this.getStuff = octopus.getStuff();
			view.render();
		},
		render: function() {
			this.getStuff.done( function(template, data){
				var renderer = Handlebars.compile(template);
				var result = renderer(data);
				$('#container').html(result);
			});
		}
	};

	var viewCalculator = {
		init: function(val) {
			this.getStuff = octopusCalculator.getStuff();
			viewCalculator.render(val);
		},
		render: function(val) {
			this.getStuff.done( function(template, data){
				var renderer = Handlebars.compile(template);
				var result = renderer(data.results[val]);
				$('#container').html(result);
				console.log(data.results[val]);
			});
		}
	};
	var routing = {
		init: function() {
			angular.module('router', ['ngRoute']).
			    config(function ($routeProvider) {
			        $routeProvider.
			            when('/', {templateUrl: 'partials/notusingthis.html', controller: 'home'}).
			            when('/USD', {templateUrl: 'partials/notusingthis.html', controller: 'usd'}).
			            when('/GBP', {templateUrl: 'partials/notusingthis.html', controller: 'gbp'}).
			            when('/EUR', {templateUrl: 'partials/notusingthis.html', controller: 'eur'}).
			            when('/CAD', {templateUrl: 'partials/notusingthis.html', controller: 'cad'}).
			            when('/DKK', {templateUrl: 'partials/notusingthis.html', controller: 'dkk'}).
			            when('/NOK', {templateUrl: 'partials/notusingthis.html', controller: 'nok'}).
			            when('/SEK', {templateUrl: 'partials/notusingthis.html', controller: 'sek'}).
			            when('/CHF', {templateUrl: 'partials/notusingthis.html', controller: 'chf'}).
			            when('/JPY', {templateUrl: 'partials/notusingthis.html', controller: 'jpy'}).
			            when('/XDR', {templateUrl: 'partials/notusingthis.html', controller: 'xdr'}).
			            otherwise({redirectTo: '/'});
			    })
			    .controller('home', function ($scope) {
			      octopus.init();
			    })
			    .controller('usd', function ($scope) {
			      octopusCalculator.init(1);
			    })
			    .controller('gbp', function ($scope) {
			      octopusCalculator.init(2);
			    })
			    .controller('eur', function ($scope) {
			      octopusCalculator.init(3);
			    })
			    .controller('cad', function ($scope) {
			      octopusCalculator.init(4);
			    })
			    .controller('dkk', function ($scope) {
			      octopusCalculator.init(5);
			    })
			    .controller('nok', function ($scope) {
			      octopusCalculator.init(6);
			    })
			    .controller('sek', function ($scope) {
			      octopusCalculator.init(7);
			    })
			    .controller('chf', function ($scope) {
			      octopusCalculator.init(8);
			    })
			    .controller('jpy', function ($scope) {
			      octopusCalculator.init(9);
			    })
			    .controller('xdr', function ($scope) {
			      octopusCalculator.init(10);
			    })
		}
	};
	//octopus.init();
	routing.init();
}());