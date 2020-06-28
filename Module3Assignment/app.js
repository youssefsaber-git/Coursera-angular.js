(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController',NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
      .directive('foundItems', foundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");
        
   function foundItemsDirective() {
       var ddo = {
           restrict: "AE",
            templateUrl: 'founditems.html',
            scope: {
                items : '<menu',
                onRemove: '&'
            },
        };
        return ddo;
    }
    NarrowItDownController.$inject=['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        var search = "";
        var menuitems;
        var promise
        var found = [];
        menu.found = MenuSearchService.getmenu();
        menu.narrowit = function () {
            if (menu.search !== "") {
                var promise = MenuSearchService.getMatchedMenuItems(menu.search);
                promise.then(function () {
                    menu.found = MenuSearchService.getmenu();
                });
            } else {
                menuitems = [];
            }
        console.log(menu.found)}
        menu.removeitem=function(index){
            MenuSearchService.removeoption(index);
        }

    }
    MenuSearchService.$inject = ['$http', 'ApiBasePath','$q','$timeout'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        var menuitems = [];
        service.getMatchedMenuItems = function (searchTerm) {
            console.log("try");
           return $http({
                method: "GET",
                url: (ApiBasePath)
            }
            ).then(function (result) {
                var foundItems = [];
                for (var x = 0; x < result.data.menu_items.length; x++) {
                    if (result.data.menu_items[x].description.includes(searchTerm)) {
                        foundItems.push(result.data.menu_items[x]);
                    }
                }
                menuitems = foundItems;
                return foundItems;
            })
        }
        service.getmenu=function(){
            return menuitems;
        }
        service.removeoption=function(index){
            menuitems.splice(index, 1);
        }
    };

})();