let app = angular.module('factories-app',[]);

app.factory('randNumGenerator', function() {
    let randObj = {};
    let randNum = Math.ceil(Math.random()*100);
    randObj.generate = () => randNum;

    return randObj;
});

app.controller('factoriesCtrlr', ($scope, randNumGenerator) => {
    $scope.generateRandom = () =>{
        $scope.randomNumber = randNumGenerator.generate();
    };
});