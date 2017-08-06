(function(){
	'use strict';

	function goalPlanController($mdToast){
		var vm = this;

		vm.plan = {
			categories: []
		};

		vm.$onInit = function(){
			console.log('goalPlanController#$onInit');
		}

		vm.addCategory = function(){
			vm.plan.categories.push({
				subCategories: []
			});
		}

		vm.addSubCategory = function(category){
			category.subCategories.push({});
		}

		vm.save = function(){
			$mdToast.show(
		      $mdToast.simple()
		        .textContent('Plan has been saved...')
		        .position('top right')
		        .hideDelay(3000)
    );

		}
	}

	angular.module('app').component('goalPlan', {
		controller: goalPlanController, 
		templateUrl: 'js/angular/pages/goalPlan/goalPlan.html'
	});

})();