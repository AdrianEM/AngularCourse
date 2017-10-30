app.controller('personsController', ['$scope', 'personService', function($scope, personService) {
  $scope.persons = [];
  var promise = personService.getAll();
  promise.then(function(data) {
    $scope.persons = data;
  }, function(error) {});
}]);

app.controller("addPersonController", ['$scope', 'personService', '$location', function($scope, personService, $location) {
  $scope.addPerson = {};
  $scope.Genders = [
    {
      "id": -1,
      "Gender": "--Seleccione un género--"
    },
    {
      "id": 1,
      "Gender": "Female"
    },
    {
      "id": 2,
      "Gender": "Male"
    },
    {
      "id": 3,
      "Gender": "X"
    }
  ];
  $scope.addPerson.Gender = $scope.Genders[0];
  
  $scope.addPersonError = {};
  $scope.addPersonError.exist = false;
//   $scope.addPersonError.msg = "adrian mena";
  
  $scope.newPerson = function() {
    switch ($scope.addPerson.Gender.id) {
      case -1, 3:
        $scope.addPerson.Gender = "X";
        break;
      case 1:
        $scope.addPerson.Gender = "Female";
        break;
      case 2:
        $scope.addPerson.Gender = "Male";
        break;
    }
    var response = personService.addPerson($scope.addPerson);
    response.then(function(data){
      $scope.addPerson = {};
      $scope.addPerson.Gender = $scope.Genders[0];
      $location.path('/persons');
    }, function(data){
      $scope.addPersonError.exist = true;
      $scope.addPersonError.msg = data;
    });
    
   
  };

}]);