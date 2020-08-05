// JavaScript source code
(function () {
    'use strict';
    angular.module('exApp', [])
        .controller('itemctrl', itemctrl)
        .directive('example', exampleDirective);
    function exampleDirective() {
        var ddo = {
            restrict: "AE",
            templateUrl: 'example.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
        };
        return ddo;
    }
    function itemctrl() {
        var item = this;
        item.book = [];
        item.name = "gold";
        item.description = "precious metal";
        item.save = function () {
            var temp = { name: item.name, des: item.description };
            item.book.push(temp);
            console.log(item.book);
        }
    }
}
)();