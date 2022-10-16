"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("./MODELS/Category");
const Movie_1 = require("./MODELS/Movie");
const Catalog_1 = require("./MODELS/Catalog");
const ShoppingCart_1 = require("./MODELS/ShoppingCart");
const Sum_1 = require("./MODELS/Sum");
//TODO:
/** Scéanrios de tests
● Création d'un catalogue
● Créer plusieurs instances de films
● Ajoutez les films au Catalogue,
● Ajoutez plusieurs films au panier,
● Calculez le montant HT et TTC du panier
*/
function main() {
    const horror_cat = new Category_1.Category('Horror');
    const fantastic_cat = new Category_1.Category('Fantastic');
    const jaws_movie = new Movie_1.Movie('Jaws', 13, 3, horror_cat);
    const ready_player_one_movie = new Movie_1.Movie('Ready Player One', 25, 6, fantastic_cat);
    const catalog = new Catalog_1.Catalog();
    catalog.add_product(jaws_movie);
    catalog.add_product(ready_player_one_movie);
    const shopping_cart = new ShoppingCart_1.ShoppingCart();
    const cart_sum = new Sum_1.Sum(shopping_cart);
    shopping_cart.add_product(jaws_movie);
    console.log('CATALOGUE : \n', catalog.list_products);
    console.log('PANIER : \n', shopping_cart.shopping_list);
    console.log('TOTAL DU PANIER : ', cart_sum.value);
}
const result = main();
//# sourceMappingURL=main.js.map