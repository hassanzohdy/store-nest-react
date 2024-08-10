import { Product } from "apps/front-office/utils/types";
import endpoint from "shared/endpoint";

/**
 * Get Shops list
 */
export function getShopsList(params: any = {}) {
  return endpoint.get("/shop", {
    params,
  });
}

/**
 * Get Product details
 */
type ProductData = {
  product: Product;
};
export async function getProduct(id: string | number): Promise<ProductData> {
  const response = await endpoint.get("/products/" + id);

  return {
    product: response?.data?.product,
  };
}
