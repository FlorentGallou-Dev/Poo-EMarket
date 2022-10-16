"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sum = void 0;
//taxes incluses est une classe permettent de renvoyer les prix TTC
//const taxe_value: number = 0.2;
class Sum {
    constructor(productList) {
        for (const product in productList) {
            this._value += product['Movie']._sell_price;
            //this._sum += product['price'];
        }
        //this._price_with_taxes = product.price * (1+taxe_value);
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
}
exports.Sum = Sum;
//# sourceMappingURL=Sum.js.map