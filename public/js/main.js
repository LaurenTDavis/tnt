angular.module('App', ['ngRoute']);


angular.module('App')
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		// No need to define #, it is assumed
		$routeProvider
			.when('/', {
				templateUrl : '/html/index.html',
				controller : 'mapController'
			})
			.when('/menu', {
				templateUrl : '/html/menu.html',
				controller : 'mainController'
			})
			.when('/about', {
				templateUrl : '/html/about.html',
				controller : 'mainController'
			})
			.when('/specials', {
				templateUrl : '/html/specials.html',
				controller : 'mainController'
			})
			.when('/gallery', {
				templateUrl : '/html/gallery.html',
				controller : 'mainController'
			})
			.when('/contact', {
				templateUrl : '/html/contact.html',
				controller : 'mainController'
			})

		// $locationProvider.html5Mode(true);

	}])




angular.module('App')
	.controller('mapController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	
	$scope.company = "TNT Country Kitchen";	

	$(document).on('click','.navbar-collapse.in',function(e) {
    	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        	$(this).collapse('hide');
    	}
	});

	$(document).ready(function(){
    
    	$("[data-toggle=tooltip]").tooltip();
	});


	function initialize() {

	  var mapLocation = {lat:39.653876, lng: -105.191945};
	  
	  var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 17,
	    center: mapLocation
	  });
	  

		 addMarker(map.center, map, 'TNT Country Kitchen');
	}

	// Adds a marker to the map.
	function addMarker(location, map, contentString) {
	  // Add the marker at the clicked location, and add the next-available label
	  // from the array of alphabetical characters.

	  var marker = new google.maps.Marker({
	    position: location,
	    map: map
	  });
	      
	   var infowindow = new google.maps.InfoWindow({
	    content: contentString
	  });

	 marker.addListener('click', function() {
	    infowindow.open(map, marker);
	  });

	}

google.maps.event.addListenerOnce(map, 'idle', function() {
    google.maps.event.trigger(map, 'resize');
});

google.maps.event.addDomListener(window, 'load', initialize);
$(document).bind("projectLoadComplete", initialize);

	 
}])

angular.module('App')
	.controller('mainController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	
	$('.thumbnail').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
}])

