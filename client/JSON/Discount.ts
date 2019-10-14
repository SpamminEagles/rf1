/**
 * Represents a 'Discount' structure
 * 
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
 */
export interface Discount{
    /** The name of the dish - that is discounted */
    Name: string;

    /** The description of the discounted dish */
    Desc: string;

    /** The price for the discounted dish */
    Price: number;

    /** The fraction the dish is discounted by */
    Discount: number;

    /** The URI to the picture representation */
    Pic: string;
}