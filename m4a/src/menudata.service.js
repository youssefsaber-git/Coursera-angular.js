(function () {
    'use strict';

    angular.module('Data')
        .service('MenuDataService ', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/categories.json")
        .constant('itemsPath', "https://davids-restaurant.herokuapp.com/menu_items.json?category=");
    MenuDataService.$inject = ['$http', 'ApiBasePath', 'itemsPath'];
    function MenuDataService($http, ApiBasePath,itemsPath) {
        var service = this;
        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: (ApiBasePath)
            }
            ).then(function (result) {
                var Catagories = [];
                 Catagories = result.data;
                return Catagories;
            })
        }
        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: (itemsPath + categoryShortName)
            }
            ).then(function (result) {
                var items = [];
                items = result.data.menu_items;
                return items;
            })
        }
        }
})();
