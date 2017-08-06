(function(){
	'use strict';
	
	angular.module('app', ['ui.router', 'ngMaterial', 'ngMessages', 'highcharts-ng']).config(function($httpProvider, $stateProvider, $urlRouterProvider){
		
		$stateProvider.state('app', {
			url: '/app', 
			abstract: true, 
			component: 'mainLayout'
		}).state('app.home', {
			url: '/home', 
			component: 'home'
		}).state('app.activity', {
			url: '/activity', 
			component: 'activity'
		}).state('app.goalPlan', {
			url: '/goalPlan', 
			component: 'goalPlan'
		});
		
		$urlRouterProvider.otherwise("/app/home");
		
		
		//$httpProvider.interceptors.push(httpRequestInterceptor);
	}).run(function ($rootScope, $timeout, $transitions) {

        $rootScope.$on('$viewContentLoaded', ()=> {
          $timeout(() => {
          	console.log('Component Handler');
          	
            //componentHandler.upgradeAllRegistered();
            
            
          }, 200)
        });

        $transitions.onEnter({ to: 'app.**' }, function(trans, target) {			
			$rootScope.currentScreen = target.name;

			if (target.name == 'app.home'){
				$rootScope.currentScreenName = 'Home';
			} else if (target.name == 'app.activity'){
				$rootScope.currentScreenName = 'Activity';
			}
	    });
    });

})();