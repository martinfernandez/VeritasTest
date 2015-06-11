myApp = angular.module('myApp', ["angucomplete-alt", "ngRoute"]);

angular.module('myApp').config(function ($routeProvider, $locationProvider) {
        //configure the routing rules here
        $routeProvider.when('/universities', {
		    templateUrl: 'index.html',
		    controller: 'UniversityController'
		});

        //routing DOESN'T work without html5Mode
        $locationProvider.html5Mode(true);
});
    
angular.module('myApp').controller('UniversityController', 
	[ '$rootScope', '$scope', '$http', '$route', '$routeParams', '$location', 'UniversityService', function($rootScope, $scope,$http, $route, $routeParams, $location, UniversityService) {
	

	$scope.section = "HardvardUniversity";	
	$scope.showDropdown = true;

	$scope.$watch('selectedUniversity', function(newValue, oldValue){			
		console.log('newValue',newValue);
		if(typeof newValue != "undefined")
			setTimeout(function(){      		
	      		$scope.currentUniversity = UniversityService.getCurrentUniversityData(newValue.description.section);
	      		$location.hash(newValue.description.section);
	      		$scope.init();     
	      		$scope.$apply();    
	      	},50); 
	},true);

	$scope.init = function(){
		$scope.availableUniversities = UniversityService.getUniversities();		
		$scope.currentUniversity = UniversityService.getCurrentUniversityData($location.$$hash);
		$scope.setCurrentUniversity($scope.currentUniversity.id);		
	}

	$scope.setCurrentUniversity = function(currentUniversityId) {			
		var currentUniversityData =  _.findWhere($scope.availableUniversities,{id:currentUniversityId});
		currentUniversityData.selected = true;		
	}
	
	
	$scope.focusInJumpto = function() {
      $scope.showDropdown = true;       
    }

    $scope.focusOutJumpto = function() {
      $scope.showDropdown = false;
    }

   /* $scope.selectedUniversity = function(selected) { 
     console.log(selected);
     if (typeof selected !== undefined) {     	
      	     	
     }
    }    */

	
  	$scope.init();

    
    //$scope.disableInput = true;

} ]);

angular.module('myApp').filter('safeHtml', function ($sce) {   
	   return function(text) {
	         return $sce.trustAsHtml(text);
	    };
});




