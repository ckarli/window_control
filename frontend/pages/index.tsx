import React from 'react';
import {Order} from "../types/Order";
import {InferGetServerSidePropsType} from "next";
import Link from "next/link";
import {useRouter} from "next/router";

const Index = (  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const router = useRouter()
    const orders = props.orders;
    const handleOnCreate = () => {
        router.push('/new')
    }
    return (
        <div>
                <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Job Postings</h3>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <button
            onClick={handleOnCreate}
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Create new job
        </button>
      </div>
    </div>
    <div className="mt-5">
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        <Link  href={`/${order.id}`}>
                        <a className="block hover:bg-gray-50">
                            <div className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-indigo-600 truncate">
                                        {order.customer_name}
                                    </p>
                                    <div className="ml-2 flex-shrink-0 flex">
                                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            {order.order_date}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </a>
                            </Link>
                        </li>
                ))}
            </ul>


        </div>
    </div>
            </div>
    );
};

export default Index;

export const getServerSideProps = async () => {
    const data = await fetch('http://127.0.0.1:8000/orders/orders/');
    const orders = await data.json() as Order[];

    return {
        props: {
            orders
        },
    };
}