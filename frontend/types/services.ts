//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

import type { AxiosRequestConfig } from "axios";
import type { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";
//@ts-ignore
import qs from "qs";
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __DEV__ = process.env.NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrideConfig(
  config?: AxiosRequestConfig,
  configOverride?: AxiosRequestConfig
): AxiosRequestConfig {
  return {
    ...config,
    ...configOverride,
    headers: {
      ...config?.headers,
      ...configOverride?.headers,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach((key) => {
    const re = new RegExp(`{${key}}`, "i");
    path = path.replace(re, obj[key]);
  });

  return path;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToForm(requestBody: object) {
  const formData = new FormData();

  Object.entries(requestBody).forEach(([key, value]) => {
    value && formData.append(key, value);
  });

  return formData;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToUrlencoded(requestBody: object) {
  return qs.stringify(requestBody);
}

export const deleteOrdersGlass_typesId = (
  /**
   *
   * A unique integer value identifying this glass type.
   */
  id: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    template(deleteOrdersGlass_typesId.key, { id }),
    undefined,
    undefined,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteOrdersGlass_typesId.key = "/orders/glass_types/{id}/";

export const deleteOrdersOrdersId = (
  /**
   *
   * A unique integer value identifying this order.
   */
  id: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    template(deleteOrdersOrdersId.key, { id }),
    undefined,
    undefined,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteOrdersOrdersId.key = "/orders/orders/{id}/";

export const getOrdersGlass_types = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<GlassType[]>> => {
  return Http.getRequest(
    getOrdersGlass_types.key,
    undefined,
    undefined,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getOrdersGlass_types.key = "/orders/glass_types/";

export const getOrdersGlass_typesId = (
  /**
   *
   * A unique integer value identifying this glass type.
   */
  id: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<GlassType>> => {
  return Http.getRequest(
    template(getOrdersGlass_typesId.key, { id }),
    undefined,
    undefined,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getOrdersGlass_typesId.key = "/orders/glass_types/{id}/";

export const getOrdersOrders = (
  queryParams?: GetOrdersOrdersQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<PaginatedOrderList>> => {
  return Http.getRequest(
    getOrdersOrders.key,
    queryParams,
    undefined,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getOrdersOrders.key = "/orders/orders/";

export const getOrdersOrdersId = (
  /**
   *
   * A unique integer value identifying this order.
   */
  id: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Order>> => {
  return Http.getRequest(
    template(getOrdersOrdersId.key, { id }),
    undefined,
    undefined,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getOrdersOrdersId.key = "/orders/orders/{id}/";

export const patchOrdersGlass_typesId = (
  /**
   *
   * A unique integer value identifying this glass type.
   */
  id: number,
  requestBody: PatchedGlassTypeRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<GlassType>> => {
  return Http.patchRequest(
    template(patchOrdersGlass_typesId.key, { id }),
    undefined,
    requestBody,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
patchOrdersGlass_typesId.key = "/orders/glass_types/{id}/";

export const patchOrdersOrdersId = (
  /**
   *
   * A unique integer value identifying this order.
   */
  id: number,
  requestBody: PatchedOrderRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Order>> => {
  return Http.patchRequest(
    template(patchOrdersOrdersId.key, { id }),
    undefined,
    requestBody,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
patchOrdersOrdersId.key = "/orders/orders/{id}/";

export const postOrdersGlass_types = (
  requestBody: GlassTypeRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postOrdersGlass_types.key,
    undefined,
    requestBody,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postOrdersGlass_types.key = "/orders/glass_types/";

export const postOrdersOrders = (
  requestBody: OrderRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postOrdersOrders.key,
    undefined,
    requestBody,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postOrdersOrders.key = "/orders/orders/";

export const putOrdersGlass_typesId = (
  /**
   *
   * A unique integer value identifying this glass type.
   */
  id: number,
  requestBody: GlassTypeRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<GlassType>> => {
  return Http.putRequest(
    template(putOrdersGlass_typesId.key, { id }),
    undefined,
    requestBody,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putOrdersGlass_typesId.key = "/orders/glass_types/{id}/";

export const putOrdersOrdersId = (
  /**
   *
   * A unique integer value identifying this order.
   */
  id: number,
  requestBody: OrderRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Order>> => {
  return Http.putRequest(
    template(putOrdersOrdersId.key, { id }),
    undefined,
    requestBody,
    _CONSTANT1,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putOrdersOrdersId.key = "/orders/orders/{id}/";
export const _CONSTANT0 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const _CONSTANT1 = [{ cookieAuth: [] }, { basicAuth: [] }, {}];
