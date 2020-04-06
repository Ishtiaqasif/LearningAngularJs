let app = angular.module('myLangApp',[]);
    app.controller('languages', $scope => {
        $scope.myFavLang = 'None';

        $scope.cpp = () => {
            $scope.myFavLang = 'C++';
            alert($scope.myFavLang);
        }
        $scope.java = () => {
            $scope.myFavLang = 'JAVA';
        }
        $scope.cSharp = () => {
            $scope.myFavLang = 'C#';
        }
        $scope.javaScript = () => {
            $scope.myFavLang = 'JavaScript';
        }
    });