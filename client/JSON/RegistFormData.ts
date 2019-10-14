import { Address } from "./UserData";

/**
 * Used to define and store data of the registration form
 * 
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
 */
export class RegistFormData{
    constructor(uname: string, pwd: string, email: string, addr: Address){
        this.Username = uname;
        this.Passwrod = pwd;
        this.Email = email;
        this.Addr = addr;
    }

    Username: string;
    Passwrod: string;
    Email: string;
    Addr: Address;
}
