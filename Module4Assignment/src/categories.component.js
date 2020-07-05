(function() {
    'use strict';
    angular.module('MenuApp').
        component('categories', {
            TemplateUrl: 'src/templates/categorytemplate.html',
            bindings: {
                items: '<',
                onRemove: '&'
            }
        });
}) ();