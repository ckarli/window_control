import React, {useEffect, useState} from 'react';
import {InferGetServerSidePropsType} from "next";
import Link from "next/link";
import {useRouter} from "next/router";
import {BarsArrowUpIcon, ChevronDownIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import useDebounce from "../utils/hooks";
import {getOrdersGlass_types, getOrdersOrders} from "../types/services";

const Index = (props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {

    const [data, setData] = useState(props.orders)
    const [limit, setLimit] = useState(10)
    const [search, setSearch] = useState(null)
        const [offset, setOffset] = useState(0)

    const router = useRouter()
    const debouncedSearch = useDebounce(search, 500)
    const handleOnCreate = () => {
        router.push('/new')
    }


    const onSearch = (e) => {
        setSearch(e.target.value)
    }
    const onHandleNextPage = () => {
        setOffset(offset + limit)
    }
    const onHandlePrevPage = () => {
        setOffset(offset - limit)
    }
    useEffect(() => {
        const handleChangePage = async () => {

            const data = await getOrdersOrders({
                limit,
                search: debouncedSearch,
                offset
            })
            setData(data)

        }

        if (limit || debouncedSearch !== null) {

            handleChangePage()
        }
    }, [limit,offset, debouncedSearch])


    return (
        <div>

            <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Job Postings</h3>
                <div className="flex flex-row gap-2">
                    <div className="mt-3 sm:mt-0 sm:ml-4">
                        <label htmlFor="mobile-search-candidate" className="sr-only">
                            Search
                        </label>
                        <label htmlFor="desktop-search-candidate" className="sr-only">
                            Search
                        </label>
                        <div className="flex rounded-md shadow-sm">
                            <div className="relative flex-grow focus-within:z-10">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                </div>

                                <input
                                    type="text"
                                    id="search"
                                    name="search"
                                    onChange={onSearch}
                                    value={search}
                                    className=" w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 "
                                    placeholder="Search"
                                />
                            </div>
                            <button
                                type="button"
                                className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                                <BarsArrowUpIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                <span className="ml-2">Sort</span>
                                <ChevronDownIcon className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
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
            </div>
            <div className="mt-5">
                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                    <ul>
                        {data.results.map((order) => (
                            <li key={order.id}>
                                <Link href={`/${order.id}`}>
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
            <nav
                className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                aria-label="Pagination"
            >
                <div className="hidden sm:block">
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{data.offset + 1}</span> to <span className="font-medium">

            {data.offset + data.results.length}
        </span> of{' '}
                        <span className="font-medium">{data.count}</span> results
                    </p>
                </div>
                <div className="flex flex-1 justify-between sm:justify-end">
                    <button
                        disabled={data.previous === null}
                        onClick={onHandlePrevPage}
                        type="button"
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    <select value={limit} onChange={(e) => setLimit(parseInt(e.target.value))}
                            className="rounded outline-gray-200 border-gray-300 ml-3">
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={50}>50</option>
                    </select>


                    <button
                        onClick={onHandleNextPage}
                        type="button"
                        disabled={data.next === null}
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Index;

export const getServerSideProps = async () => {
    // const pageUrl = "http://127.0.0.1:8000/orders/orders/"
    // const data = await fetch(pageUrl);
    // const orders = await data.json() as PaginatedData<Order>
    const pageUrl = getOrdersOrders.key

    const orders = await getOrdersOrders()

    return {
        props: {
            orders,
            pageUrl

        },
    };
}