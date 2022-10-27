import React from 'react';
import OrderForm from "../components/OrderForm";
import {Order} from "../types/Order";
import axios from "axios";
import {useRouter} from "next/router";

const New = () => {
    const router = useRouter();

        const onSubmit = async (data: Order) => {
     try {
      await axios.post(
          "http://127.0.0.1:8000/orders/orders/",
            data
      )
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