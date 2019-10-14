/**
 * Defines the data of a user
 * 
 * @author Melkvi Dániel - h8579476
 * @version 0.1
 * @since 0.1
 */
export interface UserData{
    Username: string;
    Email: string;
    Phone: number;
    Addr: Address;
}

/**
 * Defines an address
 * 
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
 */
export interface Address{
    Postal: number;
    Street: string;
    /** House number */
    HNum: number;
    Building: string;
    Door: number;
}
