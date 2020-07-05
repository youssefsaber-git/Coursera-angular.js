(function () {
    'use strict';
    angular.module('MenuApp').
        component('items', {
            TemplateUrl: 'src/templates/itemtemplate.html',
            bindings: {
                items: '<',
                onRemove: '&'
            }
        });
})();
