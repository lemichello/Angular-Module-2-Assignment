(function () {
    'use-strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(checkOffService) {
        let buy = this;

        buy.items = checkOffService.getToBuyItems();

        buy.buyItem = function (index) {
            checkOffService.buyItem(index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(checkOffService) {
        let bought = this;

        bought.items = checkOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        let service = this;

        let toBuy = [
            {name: "Cookies", quantity: 4},
            {name: "Milk", quantity: 1},
            {name: "Bread", quantity: 5},
            {name: "Peanut butter", quantity: 1},
            {name: "Apples", quantity: 15}
        ];
        let bought = [];

        service.getToBuyItems = function () {
            return toBuy;
        };

        service.getBoughtItems = function () {
            return bought;
        };

        service.buyItem = function (index) {
            bought.push(toBuy[index]);

            toBuy.splice(index, 1);
        }
    }
})();
