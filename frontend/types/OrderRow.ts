import {GlassType} from "./GlassType";

export type OrderRow = {
    id?: number,
    glass_type: GlassType,
    length: string,
    width: string,
    unit_price: string,
    quantity: string,


}