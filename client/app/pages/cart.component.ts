import { Component, OnInit } from '@angular/core';
import { Cart, CartEntry } from 'src/JSON/Cart';
import { HttpClient } from '@angular/common/http';
import { Reciept } from 'src/JSON/Reciept';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';

/**
 * Component used to give an overview of the user's cart
 * 
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
 */
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /** For injecting stuff */
  constructor(
    /** HTTP Client for AJAX */
    private httpc: HttpClient,

    /** Importing the cart... */
    private carts: CartService,

    /** Authentication service */
    private auths: AuthService
  ) { }

  ngOnInit() {
  }

  /**
   * Places the order for the user, and halndes miscellaneus tasks
   * (Basically hooks up the other functions dedicated to processing the cart)
   */
  placeOrder(){
    console.error("CartComponent -> placeOrder() not implemented!");
  }

  /**
   * Unwinds the cart's embedded CartEntry structure before sending to the server
   * @param cartData The data describing the cart or a singleton- or an array of CartEntries
   * @returns Array, containing the unwound cart entries (sides will be set to 'null')
   */
  unwindCartEntries(cartData: Cart | CartEntry | CartEntry[]): CartEntry[]{
    console.error("CartComponent -> unwindCartEntries() not implemented");
    return null;
  }
 
  /**
   * Display the result of the order - the reciept - to the user
   * @param reciept The reciept
   */
  displayResults(reciept: Reciept){
    console.error("CartComponent -> displayResults() not implemented");
  }
}
