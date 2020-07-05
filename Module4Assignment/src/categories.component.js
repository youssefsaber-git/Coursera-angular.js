(function() {
    'use strict';
    angular.module('MenuApp').
        component('categories', {
            TemplateUrl: 'src/templates/categoriestemplate.html',
            bindings: {
                items: '<',
                onRemove: '&'
            }
        });
}) ();