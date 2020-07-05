(function() {
    'use strict';
    angular.module('MenuApp').
        component('categorieslist', {
            TemplateUrl: 'src/templates/categoriestemplate.html',
            bindings: {
                items: '<',
            }
        });
}) ();