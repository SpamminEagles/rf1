/**
 * Represents a 'Dish' structure
 * 
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
 */
export interface Dish{
    /** The name of the dish */
    Name: string;

    /** The access URI to the image resource on the server */
    Pic: string;

    /** The description string for the dish */
    Desc: string;

    /** The price of the dish */
    Price: number;
}
