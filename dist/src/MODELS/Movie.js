"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const AbstractProduct_1 = require("./AbstractProduct");
//Films dématérialisés avec caratéristiques : titre - tarif a la location - tarif a l'achat - auteur
class Movie extends AbstractProduct_1.AbstractProduct {
    constructor(name, sell_price, rent_price, category) {
        super();
        this._name = name;
        this._sell_price = sell_price;
        this._rent_price = rent_price;
        this._category = category;
    }
}
exports.Movie = Movie;
//# sourceMappingURL=Movie.js.map