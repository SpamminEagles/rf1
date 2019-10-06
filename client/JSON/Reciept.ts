import { Tax } from "../Types/Tax";

/**
 * Represents the reciept
 * 
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
 */
export interface Reciept{
    Entries: RecieptEntry[];
    Sum: number;
    Tax: Tax;
}

/**
 * Represents an entry in the reciept
 * 
 * @author Melkvi Dániel - h879476
 * @version 0.1
 * @since 0.1
 */
export interface RecieptEntry{
    Name: string;
    Count: number;
    Value: number;
}
