(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('categoryController', categoryController);


    categoryController.$inject = ['items'];
    function categoryController(items) {
        var List = this;
        List.items = items;
    }

})();