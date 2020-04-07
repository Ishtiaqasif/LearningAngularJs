let app = angular.module('main', ['ngRoute']);
app.config($routeProvider => {
    $routeProvider
    .when('/',{
        template: 'Welcome User'
    })
    .when('/anotherPage',{
        template: 'This is another Page'
    })
    .otherwise({
        redirectTo: '/'
    });
});