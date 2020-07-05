(function () {
    'use strict';
    angular.module('MenuApp').
        component('items', {
            TemplateUrl: 'src/templates/itemtemplate.html',
            controller: itemsComponentController,
            bindings: {
                itemlist: '<',
                onRemove: '&'
            }
        });
})();
