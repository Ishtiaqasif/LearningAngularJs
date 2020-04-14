let app = angular.module('watch-app',[]);
app.controller('watchCtrlr', ($scope) => {
    $scope.counter = -1;
    $scope.$watch('myText', (newValue, oldValue) => {
        console.log('New Value: ' + newValue);
        console.log('Old Value: ' + oldValue);
        $scope.counter++;
    });

});