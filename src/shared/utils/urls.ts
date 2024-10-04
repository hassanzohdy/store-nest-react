// append urls here, DO NOT remove this line
import type { Category, Product } from "app/shop/utils";

export const URLS = {
  wishlist: "/wishlist",
  cart: "/cart",
  pagesInfo: "/pages-info", 
  catalog: "/catalog",
  home: "/",
  compare: "/compare",
  checkout: {
    page: "/checkout",
    success: "/checkout/success/:id",
    failed: "/checkout/failed",
  },
  account: {
    dashboard: "/account/dashboard",
    orders: "/account/orders",
    trackOrder: "account/track-order",
    addresses: "/account/addresses",
    details: "/account/details",
    logout: "/account/logout",
    resetPassword: "/account/reset-password",
  },
  addresses: "/addresses",
  orders: "/orders",
  venders: "/venders",
  notFound: "/404",
  shop: {
    list: "/products",
    viewCategoryRoute: "/category/:id",
    viewCategory: (category: Category) =>
      `/category/${category.id}/${category.slug}`,
    viewProductRoute: "products/:id/:slug",
    viewProduct: (product: Product) =>
      `/products/${product.id}/${product.slug}`,
  },
  product: {
    root: "/product",
    viewRoute: "/product/:id/:slug",
    view: (product: Product) => `/product/${product.id}/${product.slug}`,
  },
  blog: {
    root: "/blog",
    viewRoute: "/blog/:id/:slug",
    view: (post: any) => `/blog/${post.id}/${post.slug}`,
  },
  faq: "/faq",
  auth: {
    login: "/login",
    forgetPassword: "/forget-password",
    resetPassword: "/rest-password",
    register: "/register",
    verifyForgetPassword: "/forget-password/verify",
  },
  settings: "/settings",
  contactUs: "/contact-us",
  pages: {
    aboutUs: "/about-us",
    termsConditions: "/terms-conditions",
    contactUs: "/contact-us",
    privacyPolicy: "/privacy-policy",
    viewRoute: "/pages/:slug",
    view: (page: any) => `/pages/${page.id}/${page.slug}`,
  },
};
