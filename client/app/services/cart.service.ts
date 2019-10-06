import { Injectable } from '@angular/core';
import { Cart } from 'src/JSON/Cart';

/**
 * Service dedicated to maintain the information abou the cart
 * 
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
 */
@Injectable({
  providedIn: 'root'
})
export class CartService {

  /** Injects */
  constructor() { }

  /** 
   * Cart data.
   * Property used to prevent undesired overrides 
   */
  private _cartData: Cart = {} as Cart;
  public get Cart(): Cart {
    return this._cartData;
  }

}
