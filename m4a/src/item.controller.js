(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('itemController', itemController);


    itemController.$inject = ['MenuDataService', 'items'];
    function itemController(MenuDataService, items) {
        var List = this;
        List.items = items;
    }

})();