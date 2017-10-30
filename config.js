app.config(["$routeProvider", function($routeProvider){
  $routeProvider.
    when("/persons", {
      templateUrl: 'persons.html',
      controller: 'personsController'
    }).
    when("/addPerson", {
      templateUrl: 'addPerson.html',
      controller: 'addPersonController'
    }).
    when("/editPerson/:personId", {
      templateUrl: 'editPerson.html',
      controller: 'editPersonController'
    }).
    otherwise({
      redirectTo: 'home.html'
    });
}]);