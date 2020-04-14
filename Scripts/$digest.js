let app = angular.module('digest-app',[]);
app.controller('digestCtrlr', ($scope) => {
    $scope.randNumber = Math.ceil((Math.random()*10));
    document.querySelector('input').addEventListener('click', () => {
        console.log('Clicked');
        $scope.randNumber = Math.ceil((Math.random()*10));
        $scope.digest;
    }, false);
    // $scope.randCreator = () => {
    //     $scope.randNumber = Math.ceil((Math.random()*10));
    //     $scope.digest;    
    // }
});