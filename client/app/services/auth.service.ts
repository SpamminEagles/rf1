import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from 'src/JSON/UserData';
import { RegistFormData } from 'src/JSON/RegistFormData';

/**
 * Service for authentication
 * 
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /** Injections */
  constructor(
    /** Http client for ajax */
    private httpc: HttpClient
  ) { }

  /** This session's ID */
  private _sessionid: string = null;
  get SessionID(){
    return this._sessionid;
  }

  /**
   * Tells if the client thinks it's authenticatd.
   * Whether the server agrees with that is another story.
   */
  get AmIAuthenticated(): boolean{
    return this._sessionid != null && this._udata != null;
  }

  /**
   * Tells whether the client considers the logged in user an admin.
   * Server may have other ideas...
   */
  private _amIAdmin = false;
  get AmIAdmin(): boolean{
    return this._amIAdmin;
  }

  /**
   * The user's data. 
   * Get only format, the caller recieves a new copy each time.
   */
  private _udata: UserData = null;
  get UserData(): UserData{
    return JSON.parse(JSON.stringify(this._udata));
  }

  /**
   * Performs a login operation.
   * Also sets other variables based on the result.
   * @param user Username of the user
   * @param pwd Password of the user
   */
  async login(user: string, pwd: string){
    console.error("AuthService -> login() not implemented");
  }

  /**
   * Initiates the registraion procedure by sending the formdata to the server
   * @param regdata Registration data coming from the form
   */
  async register(regdata: RegistFormData){
    console.error("AuthService -> register() not implemented");
  }

  /**
   * Loggs the user out and destroys the session
   */
  async logout(){
    console.error("AuthService -> register() not implemented");
  }
}
