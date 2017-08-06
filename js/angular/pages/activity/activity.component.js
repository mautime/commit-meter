(function(){
	'use strict';

	function activityController(){
		var vm = this;

		vm.$onInit = function(){
			console.log('activityController#$onInit');

			vm.todayDate = new Date();
			vm.plan = {
				id: 1, 
				name: 'Become a better person', 
				planCategories: vm.planCategories
			};

			vm.planCategories = [{
				id: 1, 
				name: 'Mind Health', 
				subCategories: [{
					id: 1, 
					name: 'Sleep Well',
					score: 7
				}, {
					id: 2, 
					name: 'Meditation',
					score: 0
				}, {
					id: 3, 
					name: 'Learn something new',
					score: 5
				}]
			}, {
				id: 1, 
				name: 'Body Health', 
				subCategories: [{
					id: 1, 
					name: 'Workout',
					score: 0
				}, {
					id: 2, 
					name: 'Eat Healthy',
					score: 5
				}, {
					id: 3, 
					name: 'Personal Care',
					score: 5
				}]
			}, {
				id: 3, 
				name: 'Relationship Health', 
				subCategories: [{
					id: 1, 
					name: 'Be Grateful',
					score: 8
				}, {
					id: 2, 
					name: 'Be Helpful',
					score: 10
				}, {
					id: 3, 
					name: 'Show you care',
					score: 7
				}]
			}, {
				id: 3, 
				name: 'Professional Health', 
				subCategories: [{
					id: 1, 
					name: 'Permanent Work',
					score: 10
				}, {
					id: 2, 
					name: 'Personal Business',
					score: 7
				}, {
					id: 3, 
					name: 'Explore New Ideas',
					score: 10
				}]
			}];
		}

		vm.save = function(){
			var snackbarContainer = document.querySelector('#demo-toast-example');
			snackbarContainer.MaterialSnackbar.showSnackbar({message: 'Progress saved', timeout: 3000});
		}
	}

	angular.module('app').component('activity', {
		controller: activityController, 
		templateUrl: 'js/angular/pages/activity/activity.html'
	});
})();