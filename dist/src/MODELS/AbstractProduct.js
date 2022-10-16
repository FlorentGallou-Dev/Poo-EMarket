"use strict";
//Abstraction produit regroupant tout type de produits vendus actuellement et dans le future
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractProduct = void 0;
class AbstractProduct {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._sell_price;
    }
    set price(value) {
        this._sell_price = value;
    }
}
exports.AbstractProduct = AbstractProduct;
//# sourceMappingURL=AbstractProduct.js.map