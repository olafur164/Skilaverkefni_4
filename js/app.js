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
			return $.get("js/templates/template.handlebars").then( function( template, status, jqXHR ) { return template; });
		},
		getStuff: function() {
			return $.when( octopus.getTemplate(), octopus.getData());
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
				$('#currency-list').html(result);
			});
		}
	};

	var viewCalculator = {
		init: function() {

		},
		render: function() {

		}
	}
	octopus.init();
}());