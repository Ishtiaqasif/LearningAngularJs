let app = angular.module('services-app',[]);

app.service('randNumGenerator', function() {
    let randNum = Math.ceil(Math.random()*100);
    this.generate = () => randNum;
});

app.controller('servicesCtrlr', ($scope, randNumGenerator) => {
    $scope.generateRandom = () =>{
        $scope.randomNumber = randNumGenerator.generate();
    };
});