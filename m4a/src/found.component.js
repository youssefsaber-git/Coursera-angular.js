(function() {
    'use strict';
    angular.module('MenuApp').
        component('foundlist', {
            TemplateUrl: 'src/templates/found.template.html',
          //  controller: foundComponentController,
            bindings: {
                categorylist: '<',
                onRemove: '&'
            }
        });
}) ();