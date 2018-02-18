///<reference path="angular.min.js"/>
(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.names = "";
        $scope.result = "";
        $scope.message = "";
        $scope.changecolor = { 'background-color': 'white' };


        $scope.CheckFood = function () {

            $scope.message = "";
            var namesArr = $scope.names.split(',');

            if (namesArr.length >1 ) {

                for (var i = namesArr.length; i > 0; i--) {
                    if ((namesArr[i] == ' ') || (namesArr[i] == '')) {
                        $scope.message = 'We do NOT consider empty item(""||" ") as an item towards to the count';
                        namesArr.pop(namesArr[i-1])
                    }

                }
                if (namesArr.length <= 3) {
                    $scope.result = "Enjoy!";
                    $scope.changecolor = { 'border-color': 'green' }
                }
                else {
                    $scope.result = "Too Much!";
                    $scope.changecolor = { 'border-color': 'red' };
                }
            }
            else if (namesArr.length == 1 && namesArr[0] == "") {
                $scope.result = "Please enter data first";
                $scope.message = "";
                $scope.changecolor = { 'border-color': 'red' };
            }
            else {
                $scope.result = "Enjoy!";
                $scope.changecolor = { 'border-color': 'green' };
            }


        }
    }
})();