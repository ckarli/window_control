import React from 'react';
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import OrderForm from "../components/OrderForm";
import axios from "axios";
import {getOrdersOrdersId, putOrdersOrdersId} from "../types/services";
import {Order} from "../types/types";

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
         await putOrdersOrdersId(props.order.id,postData)


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




        const order = await getOrdersOrdersId(id)
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

