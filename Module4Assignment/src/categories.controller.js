(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('categoriesController', categoriesController);


    categoriesController.$inject = ['items'];
    function categoriesController( items) {
        var List = this;
        List.items = items;
    }

})();