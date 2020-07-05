(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('itemsController', itemsController);


    itemsController.$inject = ['MenuDataService', 'items'];
    function itemsController(MenuDataService, items) {
        var List = this;
        List.items = items;
    }

})();