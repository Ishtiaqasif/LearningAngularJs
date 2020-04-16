let app = angular.module('providers-app',[]);

app.provider('date', function() {
    return{
        $get: () => {
            return {
                showDate: () => {
                    let date = new Date();
                    return date.getHours();
                }
            }
        }
    }
});

app.controller('providersCtrlr', ($scope, date) => {
    $scope.greetMsg = date.showDate();
});