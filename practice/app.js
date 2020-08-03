// JavaScript source code
(function () {
    'use strict';
    angular.module('exApp', []).controller('itemctrl',itemctrl)
        .directive('example', exampleDirective);
    function exampleDirective() {
        var ddo = {
            restrict: "AE",
            templateUrl: 'example.html',
            scope: {
                menu: '<items',
                onRemove: '&'
            },
        };
        return ddo;
    }
    function itemctrl() {
        var item = this;
        item.name = "";
        item.description = "";

    }
}
)();