app.controller('personsController',['$scope', 'personService', function ($scope, personService) { 
     $scope.persons = []; 
     var promise = personService.getAll(); 
     promise.then(function (data) { 
         $scope.persons = data; 
     }, function(error) { 
 
 
     }); 
}]); 
