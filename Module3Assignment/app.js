(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController',NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
      .directive('foundItems', foundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");
        
   function foundItemsDirective() {
        var ddo = {
            templateUrl: 'founditems.html',
            scope: {
                founditems: '<',
                onRemove: '&'
            },
            controller: founditemsController,
            controllerAs: 'menu',
            bindToController: true
        };

        return ddo;
    }
    function founditemsController(){
        var menu = this;
    }
    NarrowItDownController.$inject=['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        var search = "";
        var promise;
        var found = [];
        menu.narrowit = function () {
            menu.found= MenuSearchService.getMatchedMenuItems(menu.search);
            
            console.log(menu.found);
        }
        menu.removeitem=function(index){
            found.splice(index,1);
        }

    }
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
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
                return foundItems;
            });
           
        }

    };

})();