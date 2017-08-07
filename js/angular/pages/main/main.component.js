(function(){
	'use strict';

	function mainController($mdSidenav){
		var vm = this;

		vm.$onInit = function(){
			console.log('mainController#$onInit');
		}

		vm.openMenu = function(){
			$mdSidenav("left").toggle();
		}
	}

	angular.module('app').component('mainLayout', {
		controller: mainController,  
		templateUrl: 'js/angular/pages/_main/_main.html'
	})
})();