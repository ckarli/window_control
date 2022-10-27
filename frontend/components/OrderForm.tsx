import React from 'react';
import {useFieldArray, useForm} from "react-hook-form";
import {Order} from "../types/Order";
import axios from "axios";
import OrderRow from "./OrderRow";
import {useRouter} from "next/router";

type OrderFormPropsType = {
    order?: Order
    onSubmit?: (data: Order) => void
}
const OrderForm = (props:OrderFormPropsType) => {

  const { register, handleSubmit, formState: { errors,isSubmitting,isDirty } ,control} = useForm<Order>({
    defaultValues: props.order

  });
  const rowsArray = useFieldArray({
    control: control,
    name: "rows"
  })


    const onError = (errors: any) => {
        console.log("error",errors)
    }

    return (
<form onSubmit={handleSubmit(props.onSubmit,onError)}>
  <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
              </div>

              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="customer-name" className="block text-sm font-medium text-gray-700">
                    Customer name
                  </label>
                  <input


                    type="text"
                    {...register("customer_name", { required:{
                        value: true,
                        message: "Customer name is required"
                      } })}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  <span className="text-red-600 font-semibold">{errors.customer_name?.message}</span>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="order-date" className="block text-sm font-medium text-gray-700">
                    Order Date
                  </label>
                  <input
                    type="date"
                    {...register("order_date", { required: true })}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>




                <div className="col-span-6">
                  <label htmlFor="customer-address" className="block text-sm font-medium text-gray-700">
                    Customer address
                  </label>
                  <input
                    type="text"
                    {...register("customer_address", { required: true })}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>



                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label htmlFor="customer-phone" className="block text-sm font-medium text-gray-700">
                    Customer Phone
                  </label>
                  <input
                    type="text"
                    {...register("customer_phone", { required: true })}

                    autoComplete="address-level1"
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
    <button type="button" onClick={() => rowsArray.append({
        glass_type: null,
        length: null,
        quantity: null,
        unit_price: null,
        width: null

    })}>Add row</button>


              </div>
            </div>
                        <div>
                      {
                            rowsArray.fields.map((item,index) => {
                                return (
                                    <OrderRow register={register} item={item} index={index} key={item.id}/>
                                )



                      })
                        }
                  </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                  disabled={isSubmitting || !isDirty}
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save
              </button>
            </div>
          </div>
</form>
    );
};

export default OrderForm;