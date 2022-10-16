import { Sum } from './Sum';
//taxes incluses est une classe permettent de renvoyer le total du panier en TTC

const taxe_value: number = 0.2;

export class SumWithTaxes {

  public make_taxes(cart_sum: Sum) {
    return cart_sum.value * (1 + taxe_value );
  }

}