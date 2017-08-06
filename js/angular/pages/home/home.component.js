(function(){
	'use strict';

	function homeController(){
		var vm = this;

		vm.$onInit = function(){
			console.log('homeController#$onInit');

			vm.categories = [{
				id: 1, 
				name: 'Mental Health'
			}, {
				id: 2, 
				name: 'Body Health'
			}];

			vm.displayWeeklyPlanCategoryProgress(1);
			vm.weeklyPlanProgressChartOptions = {
				title: {
					text: 'Weekly Progress'
				}, 
				series: [{
					type: 'column', 
					name: 'Mind Health', 
					color: '#ACEC00', 
					data: [10, 8, 9, 9.5, 9, 10, 9.5]
				}, {
					type: 'column',
					name: 'Body Health', 
					color: '#00BBD6', 
					data: [5, 6.5, 4, 5, 5, 7, 6]
				}, {
					type: 'column', 
					name: 'Relationship Health', 
					color: '#BA65C9', 
					data: [8, 7, 7.5, 8, 7, 7, 8]
				}, {
					type: 'column', 
					name: 'Professional Health', 
					color: '#EF3C79', 
					data: [9.5, 10, 7, 7, 8, 9, 9]
				}, {
					type: 'spline', 
					name: 'Average', 
					data: [9.5, 8, 10, 7, 5, 8.5, 9.5], 
					color: Highcharts.getOptions().colors[3],
					marker: {
			            lineWidth: 2,
			            lineColor: Highcharts.getOptions().colors[3],
			            fillColor: 'white'
			        }
				}], 
				xAxis: {
					title: {
			            text: 'Day'
			        },
					categories: ['Jul 07', 'Jul 08', 'Jul 09', 'Jul 10', 'Jul 10', 'Jul 11', 'Jul 12']
				}, 
				yAxis: {
					title: {
						text: 'Average Score'
					}, 
					min: 0
				}
			};

			vm.overallPlanCategoryProgressChartOptions = {
				title: {
					text: 'Overall Progress by Category'
				},
				xAxis: {
					title: {
						text: 'Category', 
					}, 
					categories: ['Mind Health', 'Body Health', 'Relationship Health', 'Professional Health']
				}, 
				yAxis: {
					title: 'Overall Score',
					min: 0
				}, 
				series: [{
					type: 'column', 
					name: 'Overall Score', 
					color: '#00BBD6',
					data: [8, 5, 7, 9]
				}]
			}
		}

		vm.displayWeeklyPlanCategoryProgress = function(categoryId){
			var category = null;

			var mentalHealthSeries = [{
				type: 'column', 
				name: 'Sleep Well', 
				color: '#ACEC00', 
				data: [10, 9, 9, 9.5, 8.5, 9, 10]
			}, {
				type: 'column', 
				name: 'Meditation', 
				color: '#00BBD6', 
				data: [7, 8, 7.5, 7, 8, 7.5, 7]
			}, {
				type: 'column', 
				name: 'Learn Something New', 
				color: '#BA65C9', 
				data: [8, 9, 10, 9, 9, 7, 8]
			}, {
				type: 'spline', 
				name: 'Average', 
				data: [8.3, 8.6, 8.8, 8.5, 8.5, 7.8, 8.3], 
				color: Highcharts.getOptions().colors[3],
				marker: {
		            lineWidth: 2,
		            lineColor: Highcharts.getOptions().colors[3],
		            fillColor: 'white'
		        }
			}];

			var bodyHealthSeries = [{
				type: 'column', 
				name: 'Workout', 
				color: '#ACEC00', 
				data: [5, 7, 7, 8, 7, 5, 8]
			}, {
				type: 'column', 
				name: 'Eat Healthy', 
				color: '#00BBD6', 
				data: [7, 8, 7.5, 8, 8, 6, 9]
			}, {
				type: 'column', 
				name: 'Personal Care', 
				color: '#BA65C9', 
				data: [10, 9, 10, 9, 9, 10, 8]
			}, {
				type: 'spline', 
				name: 'Average', 
				data: [7.6, 8, 8.1, 8.3, 8.5, 8, 8], 
				color: Highcharts.getOptions().colors[3],
				marker: {
		            lineWidth: 2,
		            lineColor: Highcharts.getOptions().colors[3],
		            fillColor: 'white'
		        }
			}];

			var seriesMap = {
				1: mentalHealthSeries, 
				2: bodyHealthSeries
			}

			var series = null;

			vm.categories.forEach(function(element, index, array){

				if (categoryId == element.id){
					category = element;
					series = seriesMap[categoryId];
				}
			});

			vm.weeklyPlanCategoryProgress = {
				title: {
					text: category.name
				}, 
				xAxis: {
					title: {
						text: 'Day'
					}, 
					categories: ['Jul 07', 'Jul 08', 'Jul 09', 'Jul 10', 'Jul 10', 'Jul 11', 'Jul 12']
				}, 
				yAxis: {
					title: {
						text: 'Score'
					}
				}, 
				series: series
			};
		}
	}

	angular.module('app').component('home', {
		controller: homeController, 
		templateUrl: 'js/angular/pages/home/home.html'
	});
})();