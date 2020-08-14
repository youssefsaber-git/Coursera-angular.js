(function () {
    'use strict';
    angular.module('MenuApp').
        component('narrow', {
            TemplateUrl: 'src/templates/narrow.template.html',
            bindings: {
                items: '<',
                onRemove: '&'
            }
        });
})();
