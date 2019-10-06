import { Component, OnInit } from '@angular/core';
import { Discount } from 'src/JSON/Discount';
import { HttpClient } from '@angular/common/http';

/**
 * Angular component representing the 'Home' page
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  
  /**
   * List of discounds
   * To be bound to
   */
  discounts: Discount[] = [];
  
  /**
   * Used for injecting stuff
   */
  constructor(
    /** HTTP Client for AJAX */
    private httpc: HttpClient
  ){}

  /** Preppin' some data */
  ngOnInit(){
    this.getDiscounts();
  }

  /**
   * Pulls discount data from the server
   */
  getDiscounts(){
    console.error("HomeCompolelnt -> getDiscounts() not implemented!!!");
  }
}
