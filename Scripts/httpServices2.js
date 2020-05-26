let appl = angular.module('http-app2', []);

appl.controller ('men', ($http, $scope) => {
    $http.get('http://127.0.0.1:5500/db/db.json')
    .then (response => {
        $scope.friends = response.data.friends;
      }, response => {
        console.log(response.statusText);
      });
});