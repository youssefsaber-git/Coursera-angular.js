// JavaScript source code
(function () {
    'use strict';
    angular.module('exApp', [])
        .directive('example', exampleDirective);
    function exampleDirective() {
        var ddo = {
            restrict: "AE",
            templateUrl: 'example.html'
        };
        return ddo;
    }
}
)();