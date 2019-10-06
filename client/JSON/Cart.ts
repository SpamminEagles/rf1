/**
 * Structure for representing a cart, and its data
 * 
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
 */
export interface Cart{
    Orders: CartEntry[];
}

/** Defines an entry in the cart 
 * 
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
*/
export interface CartEntry{
    /** The name of the entry */
    Name: string;

    /** The quantity the user orders */
    Quantity: number;

    /** The sides that go with this specific dish.
     * Only for ease of display, at placing the order the list will be unwound
     */
    Sides: CartEntry[];
}
