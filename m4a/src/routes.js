(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/');

       
        $stateProvider

         
            .state('home', {
                url: '/',
                templateUrl: 'src/templates/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/templates/categorytemplate.html',
                controller: 'categoriesController as Ccontrol',
               resolve: {
                   items: ['MenuDataService', function (MenuDataService) {
                      return MenuDataService.getAllCategories();
                   }]
                }
            })
    }
})();
