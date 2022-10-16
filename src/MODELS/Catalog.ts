import { AbstractProduct } from './AbstractProduct';

//Le catalogue contient la liste des produits

export class Catalog {

  private _product_list: Array<AbstractProduct> = [];

  public add_product(product: AbstractProduct) {
    this._product_list.push(product);
  }

  public get list_products(): Array<AbstractProduct> {
    return this._product_list;
  }

}