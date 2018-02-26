///<reference path="angular.min.js"/>
(function () {
    'use strict';
    angular.module('ShoppingListApp', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var toBuyList = this;
        toBuyList.Lists = ShoppingListCheckOffService.ToBuyList;
        toBuyList.AddItemToBoughtList = function (index) {
            ShoppingListCheckOffService.removefromToBuyList(index);
        }
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.CheckIfEmpty = function () {
            alreadyBought.Lists = ShoppingListCheckOffService.getAlreadyBoughtList();
            if (alreadyBought.Lists.length === 0) {
                return true;
            } else {
                //alreadyBought.Lists = ShoppingListCheckOffService.getAlreadyBoughtList();
                return false;
            }
        }

        alreadyBought.Lists = ShoppingListCheckOffService.getAlreadyBoughtList();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        service.ToBuyList = [{
            name: 'Cake',
            quantity: '1 kg'
        }, {
            name: 'Ice Cream',
            quantity: '2 boxes'
        }, {
            name: 'Chips',
            quantity: '10 bags'
        }, {
            name: 'Pizza',
            quantity: '2 large'
        }, {
            name: 'Pasta',
            quantity: '1 plate'
        }];

        service.alreadyboughtList = [];

        service.addItemInAlreadyBoughtList = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            }
            service.alreadyboughtList.push(item)
        }

        service.removefromToBuyList = function (index) {
            var item = service.ToBuyList.splice(index,1);
            service.addItemInAlreadyBoughtList(item[0].name, item[0].quantity);
        }

        service.getAlreadyBoughtList = function () {
            return service.alreadyboughtList;
        }

    }
})();