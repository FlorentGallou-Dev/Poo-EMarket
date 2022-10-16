import { ShoppingCart } from './ShoppingCart';

export class Sum {

  private _value: number;

  public make_sum(productList: ShoppingCart) {

    let addings: number = 0;

    for (const product in productList.shopping_list) {
      addings += productList.shopping_list[product].price;
    }

    this._value = addings;
  }

  public get value(): number {
    return this._value;
  }

}