(function() {
    'use strict';
    angular.module('MenuApp').
        component('found', {
            TemplateUrl: 'src/templates/found.template.html',
          //  controller: foundComponentController,
            bindings: {
                categorylist: '<',
                onRemove: '&'
            }
        });
}) ();