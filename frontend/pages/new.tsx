import React from 'react';
import OrderForm from "../components/OrderForm";
import axios from "axios";
import {useRouter} from "next/router";
import {postOrdersOrders} from "../types/services";
import {Order, OrderRequest} from '../types/types';

const New = () => {
    const router = useRouter();

    const onSubmit = async (data: Order) => {
     try {

      await postOrdersOrders(data as unknown as OrderRequest)
         router.push('/')
     } catch (e) {
            console.log("server error",e)
     }
    }


    return (
        <div>
            Create New Order



            <OrderForm onSubmit={onSubmit}/>
        </div>
    );
};

export default New;