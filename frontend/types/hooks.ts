//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

import { AxiosRequestConfig } from "axios";
import {
  UseQueryOptions,
  useQuery,
  useMutation,
  UseMutationOptions,
  QueryClient,
  QueryKey,
} from "@tanstack/react-query";
import { RequestError, SwaggerResponse } from "./config";

import type {
  GetOrdersOrdersQueryParams,
  GlassType,
  GlassTypeRequest,
  Order,
  OrderRequest,
  PaginatedOrderList,
  PatchedGlassTypeRequest,
  PatchedOrderRequest,
} from "./types";
import {
  deleteOrdersGlass_typesId,
  deleteOrdersOrdersId,
  getOrdersGlass_types,
  getOrdersGlass_typesId,
  getOrdersOrders,
  getOrdersOrdersId,
  patchOrdersGlass_typesId,
  patchOrdersOrdersId,
  postOrdersGlass_types,
  postOrdersOrders,
  putOrdersGlass_typesId,
  putOrdersOrdersId,
} from "./services";

export type SwaggerTypescriptMutationDefaultParams<TExtra> = {
  _extraVariables?: TExtra;
  configOverride?: AxiosRequestConfig;
};
type SwaggerTypescriptUseQueryOptions<TData> = UseQueryOptions<
  SwaggerResponse<TData>,
  RequestError | Error
>;

type SwaggerTypescriptUseMutationOptions<TData, TRequest, TExtra> =
  UseMutationOptions<
    SwaggerResponse<TData>,
    RequestError | Error,
    TRequest & SwaggerTypescriptMutationDefaultParams<TExtra>
  >;

type SwaggerTypescriptUseMutationOptionsVoid<TData, TExtra> =
  UseMutationOptions<
    SwaggerResponse<TData>,
    RequestError | Error,
    SwaggerTypescriptMutationDefaultParams<TExtra> | void
  >;

export const useDeleteOrdersGlass_typesId = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    {
      /**
       *
       * A unique integer value identifying this glass type.
       */
      id: number;
    },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      id,

      configOverride,
    } = _o || {};

    return deleteOrdersGlass_typesId(
      id,

      configOverride
    );
  }, options);
};

export const useDeleteOrdersOrdersId = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    {
      /**
       *
       * A unique integer value identifying this order.
       */
      id: number;
    },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      id,

      configOverride,
    } = _o || {};

    return deleteOrdersOrdersId(
      id,

      configOverride
    );
  }, options);
};

export const useGetOrdersGlass_types = (
  options?: SwaggerTypescriptUseQueryOptions<GlassType[]>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetOrdersGlass_types.info(configOverride);
  return useQuery(key, fun, options);
};
useGetOrdersGlass_types.info = (configOverride?: AxiosRequestConfig) => {
  return {
    key: [getOrdersGlass_types.key] as QueryKey,
    fun: () => getOrdersGlass_types(configOverride),
  };
};
useGetOrdersGlass_types.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<GlassType[]>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetOrdersGlass_types.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetOrdersGlass_typesId = (
  /**
   *
   * A unique integer value identifying this glass type.
   */
  id: number,
  options?: SwaggerTypescriptUseQueryOptions<GlassType>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetOrdersGlass_typesId.info(
    id,

    configOverride
  );
  return useQuery(key, fun, options);
};
useGetOrdersGlass_typesId.info = (
  /**
   *
   * A unique integer value identifying this glass type.
   */
  id: number,
  configOverride?: AxiosRequestConfig
) => {
  return {
    key: [getOrdersGlass_typesId.key, id] as QueryKey,
    fun: () =>
      getOrdersGlass_typesId(
        id,

        configOverride
      ),
  };
};
useGetOrdersGlass_typesId.prefetch = (
  client: QueryClient,

  /**
   *
   * A unique integer value identifying this glass type.
   */
  id: number,
  options?: SwaggerTypescriptUseQueryOptions<GlassType>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetOrdersGlass_typesId.info(
    id,

    configOverride
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetOrdersOrders = (
  queryParams?: GetOrdersOrdersQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<PaginatedOrderList>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetOrdersOrders.info(queryParams, configOverride);
  return useQuery(key, fun, options);
};
useGetOrdersOrders.info = (
  queryParams?: GetOrdersOrdersQueryParams,
  configOverride?: AxiosRequestConfig
) => {
  return {
    key: [getOrdersOrders.key, queryParams] as QueryKey,
    fun: () =>
      getOrdersOrders(
        queryParams,

        configOverride
      ),
  };
};
useGetOrdersOrders.prefetch = (
  client: QueryClient,
  queryParams?: GetOrdersOrdersQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<PaginatedOrderList>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetOrdersOrders.info(queryParams, configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetOrdersOrdersId = (
  /**
   *
   * A unique integer value identifying this order.
   */
  id: number,
  options?: SwaggerTypescriptUseQueryOptions<Order>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetOrdersOrdersId.info(
    id,

    configOverride
  );
  return useQuery(key, fun, options);
};
useGetOrdersOrdersId.info = (
  /**
   *
   * A unique integer value identifying this order.
   */
  id: number,
  configOverride?: AxiosRequestConfig
) => {
  return {
    key: [getOrdersOrdersId.key, id] as QueryKey,
    fun: () =>
      getOrdersOrdersId(
        id,

        configOverride
      ),
  };
};
useGetOrdersOrdersId.prefetch = (
  client: QueryClient,

  /**
   *
   * A unique integer value identifying this order.
   */
  id: number,
  options?: SwaggerTypescriptUseQueryOptions<Order>,
  configOverride?: AxiosRequestConfig
) => {
  const { key, fun } = useGetOrdersOrdersId.info(
    id,

    configOverride
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const usePatchOrdersGlass_typesId = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    GlassType,
    {
      /**
       *
       * A unique integer value identifying this glass type.
       */
      id: number;
      requestBody: PatchedGlassTypeRequest;
    },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      id,
      requestBody,

      configOverride,
    } = _o || {};

    return patchOrdersGlass_typesId(
      id,
      requestBody,

      configOverride
    );
  }, options);
};

export const usePatchOrdersOrdersId = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    Order,
    {
      /**
       *
       * A unique integer value identifying this order.
       */
      id: number;
      requestBody: PatchedOrderRequest;
    },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      id,
      requestBody,

      configOverride,
    } = _o || {};

    return patchOrdersOrdersId(
      id,
      requestBody,

      configOverride
    );
  }, options);
};

export const usePostOrdersGlass_types = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: GlassTypeRequest },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postOrdersGlass_types(
      requestBody,

      configOverride
    );
  }, options);
};

export const usePostOrdersOrders = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: OrderRequest },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postOrdersOrders(
      requestBody,

      configOverride
    );
  }, options);
};

export const usePutOrdersGlass_typesId = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    GlassType,
    {
      /**
       *
       * A unique integer value identifying this glass type.
       */
      id: number;
      requestBody: GlassTypeRequest;
    },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      id,
      requestBody,

      configOverride,
    } = _o || {};

    return putOrdersGlass_typesId(
      id,
      requestBody,

      configOverride
    );
  }, options);
};

export const usePutOrdersOrdersId = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    Order,
    {
      /**
       *
       * A unique integer value identifying this order.
       */
      id: number;
      requestBody: OrderRequest;
    },
    TExtra
  >
) => {
  return useMutation((_o) => {
    const {
      id,
      requestBody,

      configOverride,
    } = _o || {};

    return putOrdersOrdersId(
      id,
      requestBody,

      configOverride
    );
  }, options);
};
