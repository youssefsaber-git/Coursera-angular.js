(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController',NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");

    NarrowItDownController.$inject['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        var search = "";
        var found=[];
        menu.narrowit = function () {
            if (search !== "") {
                found = MenuSearchService.getMatchedMenuItems(search);
            }
        }

    }
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems=function(searchTerm){
            return $http({
                method: "GET",
                url: (ApiBasePath)
            }).then(function (result) {
                var foundItems = [];
                for (var x = 0; x < result.length; x++) {
                    if (result[x].description.includes(searchTerm)) {
                        foundItems.push(result[x]);
                    }
                }
                return foundItems;
            });
        }

    };

})();