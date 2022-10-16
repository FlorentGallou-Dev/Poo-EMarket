import { AbstractProduct } from './AbstractProduct';

//TODO: Le panier comporte - liste des produits - le montant du panier - calculte le montant en HT et TTC

export class ShoppingCart {

  private _shopping_list: Array<AbstractProduct> = [];

  public add_product(product: AbstractProduct) {
    this._shopping_list.push(product);
  }

  public get shopping_list(): Array<AbstractProduct> {
    return this._shopping_list;
  }

}