/**
 * Describes how the server responds
 * 
 * @author Melkvi Dániel
 * @augments T The type the payload should be serialized to
 * @version 0.1
 * @since 0.1
 */
export interface ServerResponse<T>{
    Message: string;
    Success: boolean;
    Data: T;
}
