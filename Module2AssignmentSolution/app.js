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
       // try {
           itemBuy.items = ShoppingListCheckOffService.getbuy();
          //  itemBuy.length = itemBuy.items.length;
        //} catch (error) {
         //   itemBuy.errorMessage = error.message;
        //}
        itemBuy.num = ShoppingListCheckOffService.getbuycheck();
        itemBuy.buyItem = function (itemIndex) {
                ShoppingListCheckOffService.buyItem(itemIndex); 
            
        };
    }
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var itemBought = this;
        
       // try {
        itemBought.items = ShoppingListCheckOffService.getbought();
        itemBought.num = ShoppingListCheckOffService.boughtcheck();
           // itemBought.length = itemBought.items.length;
        //} catch (error) {
       //     itemBought.errorMessage = error.message;
       // }
    
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
        var buycount = tobuyI.length;
        var boughtcount = boughtI.length;
        service.buyItem = function (itemIndex) {
            var tempnum = tobuyI[itemIndex].quantity;
            var tempname = tobuyI[itemIndex].name;
            tobuyI.splice(itemIndex, 1);
            var temp = {name:tempname,quantity:tempnum};
            boughtI.push(temp);
        };
        service.getbuy = function () {
                return tobuyI;
        }
        service.getbought = function () {
                return boughtI;
        }
        service.getbuycheck = function () {
            return tobuyI.length;
        }
        service.boughtcheck = function () {
            return boughtI.length;
        }
    }
}
)();
