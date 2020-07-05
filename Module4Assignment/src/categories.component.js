(function() {
    'use strict';
    angular.module('MenuApp').
        component('categories', {
            TemplateUrl: 'src/templates/categorytemplate.html',
            controller: categoriesComponentController,
            bindings: {
                categorylist: '<',
                onRemove: '&'
            }
        });
}) ();