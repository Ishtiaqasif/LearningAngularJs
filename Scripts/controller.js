let app = angular.module('main', ['ngRoute']);
app.config($routeProvider => {
    $routeProvider
    .when('/',{
        templateUrl: 'page.html'
    })
    .when('/helloUser',{
        templateUrl: 'user.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});