"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
//TODO: Le panier comporte - liste des produits - le montant du panier - calculte le montant en HT et TTC
class ShoppingCart {
    constructor() {
        this._shopping_list = [];
    }
    //private _cart_sum: number;
    add_product(product) {
        this._shopping_list.push(product);
        //this._cart_sum = sum.value;
    }
    get shopping_list() {
        return this._shopping_list;
    }
}
exports.ShoppingCart = ShoppingCart;
//# sourceMappingURL=ShoppingCart.js.map