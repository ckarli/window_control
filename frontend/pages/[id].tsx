import React from 'react';
import {Order} from "../types/Order";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import OrderForm from "../components/OrderForm";
import axios from "axios";

const OrderDetail =  (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const onSubmit = async (data: Order) => {
     try {
         const rows = data.rows.map(row => {
                return {
                    ...row,
                   glass_type: row.glass_type.id,
                }
         })
         const postData =  {...data,rows: rows}
      await axios.put(
          `http://127.0.0.1:8000/orders/orders/${props.order.id}/`,
            postData
      )

     } catch (e) {
            console.log("server error",e)
     }
    }


    return (
        <div>
            <OrderForm order={props.order} onSubmit={onSubmit}/>
        </div>
    );
};

export default OrderDetail


export const getServerSideProps  = async (ctx) => {
    const params = ctx.params;
    const id = params?.id;
    try {


        const data = await fetch('http://127.0.0.1:8000/orders/orders/' + id);
        const order = await data.json() as Order;

        return {
            props: {
                order
            },
        };
    } catch (e) {
        return {
            notFound: true
        } as const
    }
}

