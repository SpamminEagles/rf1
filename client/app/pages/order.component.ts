import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/app/services/cart.service';
import { Dish } from 'src/JSON/Dish';
import { AuthService } from 'src/app/services/auth.service';

/**
 * Component allowing users to order Dishes
 * 
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
 */
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  /** Groups available to be selected */
  groups: string[] = [];

  /** Group that is selected 
   * Property used to make life easier
  */
  _selectedGroup: string;
  get SelectedGroup(): string{
    return this._selectedGroup;
  }
  set SelectedGroup(value: string){
    this._selectedGroup = value;
    this.getGroupDishes(value);
  }

  /** Dishes that are available to  */
  groupDishes: Dish[] = [];

  /** Injections */
  constructor(
    /** HTTP Client for AJAX */
    private httpc: HttpClient,

    /** Allowing access to the cart */
    private carts: CartService,

    /** Authentication service */
    private auths: AuthService
  ) { }

  ngOnInit() {
  }

  /**
   * Gets dishes from a specified group
   * @param group In which group to look for dishes
   */
  async getGroupDishes(group: string){
    console.error("OrderComponent -> getGroupDishes() not implemented");
  }

  /**
   * Puts number pcs of name dish into the cart
   * @param name Name of the dish
   * @param number Pcs of the dish
   */
  addToCart(name, number){
    console.error("OrderComponent -> addToCart() not implemented");
  }
}
