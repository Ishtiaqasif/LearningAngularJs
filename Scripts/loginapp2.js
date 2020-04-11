let app = angular.module('login-app', ['ngRoute']);
app.config($routeProvider => {
    $routeProvider
    .when('/',{
        templateUrl: 'login.html'
    })
    .when('/dashboard',{
        resolve:{
            'check': ($location, $rootScope) => {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'dashboard.html'
    })
    .when('/signup',{
        templateUrl:'signup.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});


app.controller('loginController',($scope, $location, $rootScope) => {
    $scope.submit = () => {
        let username = $scope.username;
        let password = $scope.password;

        if(username == 'admin' && password == 'admin'){
            $rootScope.loggedIn = true;
            $location.path('/dashboard');     
        }
        else{
            alert('Authentication Failed');
        }
    };
    $scope.logout = () => {
        $rootScope.loggedIn = false;
            $location.path('/');  
    };
});