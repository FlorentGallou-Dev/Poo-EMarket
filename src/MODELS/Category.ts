//Catégorie petmet de classer les produits de même familles quelque soit le produit.

export class Category {

  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}