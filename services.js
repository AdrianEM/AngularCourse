app.service('personService', function($http, $q) {
  this.getAll = function() {
    let deferred = $q.defer();
    let promise = deferred.promise;

    $http.get("http://curso-api.azurewebsites.net/api/Persons").then(function(response) {
      deferred.resolve(response.data);
    }, function(Error) {
      console.log(Error);
      deferred.reject('Error calling all persons.');
    });
    return promise;
  };

  this.getById = function(personId) {
    let deferred = $q.defer();
    let promise = deferred.promise;

    $http.get("http://curso-api.azurewebsites.net/api/Persons/" + personId).then(function(response) {
      deferred.resolve(response.data);
    }, function(Error) {
      console.log(Error);
      deferred.reject('Error retrieving all persons.');
    });
    return promise;
  };
  
  this.addPerson = function(person){
    let deferred = $q.defer();
    let promise = deferred.promise;

    $http.post("http://curso-api.azurewebsites.net/api/Persons/", person).then(function(response) {
      deferred.resolve(response.data);
    }, function(Error) {
      console.log(Error);
      deferred.reject('Error adding a person.');
    });
    return promise;
  };
  
  this.deletePerson = function(id){
    let deferred = $q.defer();
    let promise = deferred.promise;

    $http.post("http://curso-api.azurewebsites.net/api/Persons/" + id).then(function(response) {
      deferred.resolve(response.data);
    }, function(Error) {
      console.log(Error);
      deferred.reject('Error adding a person.');
    });
    return promise;
  };
});