let app = angular.module('rangeApp',[]);
app.controller('rangeCtrl', $scope => {
    let range = 10;
    let myRange = [];
    for (let index = 1; index <= range; index++) {
        myRange.push(0);
    }
    $scope.myRange = myRange;
});