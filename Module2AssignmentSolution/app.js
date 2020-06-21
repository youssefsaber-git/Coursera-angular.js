(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var itemBuy = this;
        try {
            itemBuy.items = ShoppingListCheckOffService.getbuy();
        } catch (error) {
            itemBuy.errorMessage = error.message;
        }
        itemBuy.buyItem = function (itemIndex) {
                ShoppingListCheckOffService.buyItem(itemIndex); 
            
        };
    }
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var itemBought = this;
        try {
            itemBought.items = ShoppingListCheckOffService.getbought();
        } catch (error) {
            itemBought.errorMessage = error.message;
        }

    }
    function ShoppingListCheckOffService() {
        var service = this;
        var tobuyI = [];
        var boughtI = [];
        var item1 = { name: "cookies", quantity: 10 };
        tobuyI.push(item1);
        var item2 = { name: "pizzas", quantity: 2 };
        tobuyI.push(item2);
        var item3 = { name: "chips", quantity: 20 };
        tobuyI.push(item3);
        var item4 = { name: "burgers", quantity: 5 };
        tobuyI.push(item4);
        var item5 = { name: "apple", quantity: 1 };
        tobuyI.push(item5);
        service.buyItem = function (itemIndex) {
            var temp = tobuyI.splice(itemIndex, 1);
            boughtI.push(temp);
        };
        service.getbuy = function () {
            if (tobuyI.length !== 0) {
                return tobuyI;
            } else {
                throw new Error("all items bought");
            }
        }
        service.getbought = function () {
            if (boughtI.length !== 0) {
                return boughtI;
            } else {
                throw new Error("nothing bought yet");
            }
        }
    }
}
)();
