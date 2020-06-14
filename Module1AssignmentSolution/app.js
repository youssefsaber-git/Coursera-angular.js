(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController',LunchCheckController )
        LunchCheckController.$inject = ['$scope'];
        function LunchCheckController($scope) {
            $scope.inputstring = "";
            $scope.fourthoption = "";
            $scope.sayMessage = function () {
                if (inputstring == "") {
                    return "please enter data first";
                } else {

                    if (fourthoption = "") {
                        return "enjoy!";
                    } else {
                        return "too Much!";
                    }
                }
            }
            $scope.CheckTooMuch = function () {
                const words = inputstring.split(",");
                fourthoption = words[3];
            }
        }

    }
  
)();