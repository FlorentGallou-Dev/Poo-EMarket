"use strict";
//Catégorie petmet de classer les produits de même familles quelque soit le produit.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
class Category {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
exports.Category = Category;
//# sourceMappingURL=Category.js.map