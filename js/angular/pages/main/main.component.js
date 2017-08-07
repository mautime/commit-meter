(function(){
	'use strict';

	function mainController(){
		var vm = this;

		vm.$onInit = function(){
			console.log('mainController#$onInit');
		}
	}

	angular.module('app').component('mainLayout', {
		controller: mainController,  
		templateUrl: 'js/angular/pages/main/main.html'
	})
})();