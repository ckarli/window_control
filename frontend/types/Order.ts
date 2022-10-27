import {OrderRow} from "./OrderRow";

export type Order = {
            id?: number,
        customer_name: string,
        order_date: string,
        customer_phone: string,
        customer_address: string,
    rows: OrderRow[],
}