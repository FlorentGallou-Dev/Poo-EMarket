import { Category } from './MODELS/Category';
import {Movie} from "./MODELS/Movie";
import { Catalog } from "./MODELS/Catalog";
import { ShoppingCart } from './MODELS/ShoppingCart';
import { Sum } from './MODELS/Sum';
import { SumWithTaxes } from './MODELS/SumWithTaxes';

//TODO:
/** Scéanrios de tests
● Création d'un catalogue
● Créer plusieurs instances de films
● Ajoutez les films au Catalogue,
● Ajoutez plusieurs films au panier,
● Calculez le montant HT et TTC du panier
*/

function main(): void {

    const horror_cat = new Category('Horror');
    const fantastic_cat = new Category('Fantastic');

    const jaws_movie = new Movie('Jaws', 13, 3, horror_cat);
    const ready_player_one_movie = new Movie('Ready Player One', 25, 6, fantastic_cat)

    const catalog = new Catalog();
    catalog.add_product(jaws_movie);
    catalog.add_product(ready_player_one_movie);

    const shopping_cart = new ShoppingCart();
    shopping_cart.add_product(jaws_movie);
    shopping_cart.add_product(ready_player_one_movie);

    const cart_sum = new Sum();
    cart_sum.make_sum(shopping_cart);

    const cart_sum_with_taxes = new SumWithTaxes();

    console.log('CATALOGUE : \n', catalog.list_products)
    console.log('PANIER : \n', shopping_cart.shopping_list)
    console.log(`TOTAL DU PANIER HT :  ${cart_sum.value} euros`)
    console.log(`TOTAL DU PANIER TTC :  ${cart_sum_with_taxes.make_taxes(cart_sum)} euros`)
}

const result: any = main();