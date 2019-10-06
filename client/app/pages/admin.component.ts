import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from 'src/JSON/Dish';
import { AuthService } from 'src/app/services/auth.service';

/**
 * Used for administration of the data on the server
 * 
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
 */
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  /** Available groups */
  groups: string[] = [];

  /**
   * Selected group
   * Getter/Setter for safety and easyness
   */
  private _selectedGroup: string;
  get SelectedGroup(): string{
    return this._selectedGroup;
  }
  set SelectedGroup(value){
    this._selectedGroup = value;
    this.getDishes();
  }

  /** Dishes that are in the specified group */
  groupDishes: Dish[] = [];

  /** A list of all dishes' names */
  allDishes: string[] = [];

  /** Injections */
  constructor(
    /** HTTP client for ajax */
    private httpc: HttpClient,

    /** Authentication service */
    private auths: AuthService
  ) { }

  ngOnInit() {
  }

  /**
   * Gets the groups from the server
   */
  async getGroups(){
    console.error("AdmonComponent -> getGroups() not implemented");
  }

  /**
   * Gets the dishes in the current group
   */
  async getDishes(){
    console.error("AdmonComponent -> getDishes() not implemented");
  }

  /**
   * Tells the server the new state of the group
   * This includes creating a new one - in case the referenced group does not exist
   */
  async postGroup(){
    console.error("AdmonComponent -> postGroup() not implemented");
  }

  /**
   * Tells the server the new state of the specified Dish
   */
  async postDish(){
    console.error("AdmonComponent -> postDish() not implemented");
  }
}
