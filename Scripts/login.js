let app = angular.module('login-app', ['ngRoute']);
app.config($routeProvider => {
    $routeProvider
    .when('/',{
        templateUrl: 'login.html'
    })
    .when('/dashboard',{
        templateUrl: 'dashboard.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});


app.controller('loginController',($scope, $location) => {
    $scope.submit = () => {
        let username = $scope.username;
        let password = $scope.password;

        if(username == 'admin' && password == 'admin'){
           //$window.location.href = '/dashboard';
       
                $location.path('/dashboard');
                console.log($location.path());
              
        }
        else{
            alert('Authentication Failed');
        }
    };
});