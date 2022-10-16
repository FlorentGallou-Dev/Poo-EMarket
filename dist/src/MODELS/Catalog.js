"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog = void 0;
//Le catalogue contient la liste des produits
class Catalog {
    constructor() {
        this._product_list = [];
    }
    add_product(product) {
        this._product_list.push(product);
    }
    get list_products() {
        return this._product_list;
    }
}
exports.Catalog = Catalog;
//# sourceMappingURL=Catalog.js.map