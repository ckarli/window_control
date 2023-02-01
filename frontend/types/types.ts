//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

export interface GetOrdersOrdersQueryParams {
  /**
   *
   * Number of results to return per page.
   */
  limit?: number;
  /**
   *
   * The initial index from which to return the results.
   */
  offset?: number;
  /**
   *
   * A search term.
   */
  search?: string;
}

/**
 *
 * serializer for glass type model
 */

export interface GlassType {
  /**
   *
   * - maxLength: 100
   */
  glass_type: string;
  id: number;
}

/**
 *
 * serializer for glass type model
 */

export interface GlassTypeRequest {
  /**
   *
   * - maxLength: 100
   * - minLength: 1
   */
  glass_type: string;
}

/**
 *
 * Adds nested create feature
 */

export interface Order {
  /**
   *
   * - maxLength: 100
   */
  customer_address: string;
  /**
   *
   * - maxLength: 100
   */
  customer_name: string;
  /**
   *
   * - maxLength: 100
   */
  customer_phone: string;
  id: number;
  /**
   *
   * - Format: date
   */
  order_date: string;
  rows: OrderRow[];
}

/**
 *
 * Adds nested create feature
 */

export interface OrderRequest {
  /**
   *
   * - maxLength: 100
   * - minLength: 1
   */
  customer_address: string;
  /**
   *
   * - maxLength: 100
   * - minLength: 1
   */
  customer_name: string;
  /**
   *
   * - maxLength: 100
   * - minLength: 1
   */
  customer_phone: string;
  /**
   *
   * - Format: date
   */
  order_date: string;
  rows: OrderRowRequest[];
}

/**
 *
 * serializer for order row model
 */

export interface OrderRow {
  glass_type: GlassType;
  id: number;
  /**
   *
   * - Format: decimal
   * - pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
   */
  length: string;
  /**
   *
   * - Format: decimal
   * - pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
   */
  quantity: string;
  /**
   *
   * - Format: decimal
   * - pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
   */
  unit_price: string;
  /**
   *
   * - Format: decimal
   * - pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
   */
  width: string;
}

/**
 *
 * serializer for order row model
 */

export interface OrderRowRequest {
  glass_type: number;
  /**
   *
   * - Format: decimal
   * - pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
   */
  length: string;
  /**
   *
   * - Format: decimal
   * - pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
   */
  quantity: string;
  /**
   *
   * - Format: decimal
   * - pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
   */
  unit_price: string;
  /**
   *
   * - Format: decimal
   * - pattern: ^-?\d{0,8}(?:\.\d{0,2})?$
   */
  width: string;
}

export interface PaginatedOrderList {
  /**
   * @example
   *   123
   */
  count?: number;
  /**
   * @example
   *   123
   */
  current_page?: number;
  /**
   *
   * - Format: uri
   * @example
   *   http://api.example.org/accounts/?offset=400&limit=100
   */
  next?: string;
  /**
   * @example
   *   123
   */
  offset?: number;
  /**
   *
   * - Format: uri
   * @example
   *   http://api.example.org/accounts/?offset=200&limit=100
   */
  previous?: string;
  results?: Order[];
}

/**
 *
 * serializer for glass type model
 */

export interface PatchedGlassTypeRequest {
  /**
   *
   * - maxLength: 100
   * - minLength: 1
   */
  glass_type?: string;
}

/**
 *
 * Adds nested create feature
 */

export interface PatchedOrderRequest {
  /**
   *
   * - maxLength: 100
   * - minLength: 1
   */
  customer_address?: string;
  /**
   *
   * - maxLength: 100
   * - minLength: 1
   */
  customer_name?: string;
  /**
   *
   * - maxLength: 100
   * - minLength: 1
   */
  customer_phone?: string;
  /**
   *
   * - Format: date
   */
  order_date?: string;
  rows?: OrderRowRequest[];
}
