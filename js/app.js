$(function(){

	// MVO Model-View-Octopus - MV*
	var model = {
		init: function() {
			//
		},
		getCurrencyList: function() {
			// Láta modelið sækja gögn frá apis.is
			return $.get("http://apis.is/currency/arion").then( function( data, status, jqXHR ) { return data; });;
		}
	};

	var octopus = {
		init: function() {
			model.init();
			view.init();
		},
		getData: function() {
			return model.getCurrencyList();
		},
		getTemplate: function() {
			return $.get("/Skilaverkefni_4/js/templates/index.handlebars").then( function( template, status, jqXHR ) { return template; });
		},
		getStuff: function() {
			return $.when( octopus.getTemplate(), octopus.getData());
		}
	};

	var octopusCalculator = {
		init: function() {
			model.init();
			viewCalculator.init();
		},
		getData: function() {
			return model.getCurrencyList();
		},
		getTemplate: function() {
			return $.get("/Skilaverkefni_4/js/templates/calculator.handlebars").then( function( template, status, jqXHR ) { return template; });
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
		init: function() {
			this.getStuff = octopusCalculator.getStuff();
			viewCalculator.render();
		},
		render: function() {
			this.getStuff.done( function(template, data){
				var renderer = Handlebars.compile(template);
				var result = renderer(data);
				$('#container').html(result);
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
			      octopusCalculator.init();
			    })
			    .controller('gbp', function ($scope) {
			      octopusCalculator.init();
			    })
			    .controller('eur', function ($scope) {
			      octopusCalculator.init();
			    })
			    .controller('cad', function ($scope) {
			      octopusCalculator.init();
			    })
			    .controller('dkk', function ($scope) {
			      octopusCalculator.init();
			    })
			    .controller('nok', function ($scope) {
			      octopusCalculator.init();
			    })
			    .controller('chf', function ($scope) {
			      octopusCalculator.init();
			    })
			    .controller('jpy', function ($scope) {
			      octopusCalculator.init();
			    })
			    .controller('xdr', function ($scope) {
			      octopusCalculator.init();
			    })
		}
	};
	//octopus.init();
	routing.init();
}());