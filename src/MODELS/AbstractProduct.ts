//Abstraction produit regroupant tout type de produits vendus actuellement et dans le future

export abstract class AbstractProduct {

  protected _name: string;
  protected _sell_price: number;

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get price(): number {
    return this._sell_price;
  }
  public set price(value: number) {
    this._sell_price = value;
  }
}