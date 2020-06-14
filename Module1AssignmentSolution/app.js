(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
        LunchCheckController.$inject = ['$scope'];
        function LunchCheckController($scope) {
            $scope.inputstring = "";
            $scope.fourthoption = "";
            $scope.message = "";
            $scope.words ="";
            
            $scope.CheckTooMuch = function () {
                $scope.fourthoption = "";
                $scope.words = $scope.inputstring.split(',');
               
                if ($scope.words[3] != null) {
                    $scope.fourthoption = $scope.words[3];
                }
                if ($scope.words[3] == "") {
                    $scope.fourthoption = "x";
                }
                if ($scope.inputstring == "") {
                    $scope.message = "please enter data first";
                } else {
                    if ($scope.fourthoption == "") {
                        $scope.message = "enjoy!";
                    } else {
                        $scope.message = "too Much!";
                    }
                }
                }
            }
        }
  
)();