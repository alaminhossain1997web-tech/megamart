import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getAccessToken = () => {
  if (typeof window === "undefined") {
    return "";
  }

  try {
    const storedSession = window.localStorage.getItem("megamart-auth");
    if (!storedSession) {
      return "";
    }

    const parsedSession = JSON.parse(storedSession);
    return parsedSession?.accessToken ?? "";
  } catch {
    return "";
  }
};

export const API = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
    prepareHeaders: (headers) => {
      const accessToken = getAccessToken();

      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Auth"],
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
    login: build.mutation({
      query: ({ username, password, expiresInMins = 30 }) => ({
        url: "auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          username,
          password,
          expiresInMins,
        },
      }),
      invalidatesTags: ["Auth"],
    }),
    getCurrentUser: build.query({
      query: () => ({
        url: "auth/me",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
    addCart: build.mutation({
      query: ({ userId = 1, products }) => ({
        url: "carts/add",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          userId,
          products,
        },
      }),
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetproductdetailsQuery,
  useGetcategorylistQuery,
  useLoginMutation,
  useGetCurrentUserQuery,
  useAddCartMutation,
} = API;
