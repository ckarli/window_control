import React from 'react';
import {UseFormRegister} from "react-hook-form";
import {Order} from "../types/types";

const OrderRow = ({register, index}: {
    register: UseFormRegister<Order>, index: number
}) => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2">
                <input
                    type="number"
                    {...register(`rows.${index}.length`, {required: true})}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="col-span-2">
                <input
                    type="number"
                    {...register(`rows.${index}.width`, {required: true})}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="col-span-2">
                <input
                    type="number"
                    {...register(`rows.${index}.unit_price`, {
                        required: true,


                    })}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="col-span-2">
                <input
                    type="number"
                    {...register(`rows.${index}.quantity`, {required: true})}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="col-span-2">


                <select
                    {...register(`rows.${index}.glass_type.id`, {
                        required: true

                    })}

                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >

                    <option value="1">Buğulu</option>
                    <option value="2">Düz</option>
                </select>
            </div>
            <div className="col-span-2">

            </div>

        </div>
    );
};

export default OrderRow;