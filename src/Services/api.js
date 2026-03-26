import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const API = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({ limit = 20, skip = 0, category }) =>
        `/products${category ? `/category/${category}` : ""}?limit=${limit}&skip=${skip}`,  
    }),
    getproductdetails: build.query({
      query: (id) => `products/${id}`,
    }),
    getcategorylist: build.query({
      query: () => `products/category-list`,
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetproductdetailsQuery,
  useGetcategorylistQuery,
} = API;
