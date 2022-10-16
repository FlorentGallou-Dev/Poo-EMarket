import { AbstractProduct } from "./AbstractProduct";
import { Category } from './Category';

//Films dématérialisés avec caratéristiques : titre - tarif a la location - tarif a l'achat - auteur

export class Movie extends AbstractProduct {

  private _rent_price: number;
  private _category: Category;

  constructor(name: string, sell_price: number, rent_price: number, category: Category) {
    super();
    this._name = name;
    this._sell_price = sell_price;
    this._rent_price = rent_price;
    this._category = category;
  }

}