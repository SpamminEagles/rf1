import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserData } from 'src/JSON/UserData';

/**
 * Shows the user's profile data
 * 
 * @author Melkvi Dániel
 * @version 0.1
 * @since 0.1
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  /** Injects */
  constructor(
    private auths: AuthService
  ) { }

  ngOnInit() {

  }

  /** local istance of the user data */
  userInfo: UserData = {} as UserData;

  /**
   * Applies modifications to the user's data
   */
  applyModifications(){
    console.error("applyModifications not implemented");
  }

  /**
   * Deletes the user's profile
   */
  deleteProfile(){
    console.error("deleteProfile not implemented");
  }

}
