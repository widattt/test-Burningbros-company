import { Product } from "./../model/index";
import { useProductStore } from "../component/useProductStore";
// useProductQuery.ts

import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

export interface SearchProductQueryParams {
  searchQuery: string;
  limit?: number;
  skip?: number;
  select?: string[];
}

export const useProductsQuery = () => {
  return useQuery<Product[]>("products", async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  });
};

export const useSearchProductQuery = ({

  searchQuery,
  limit = 0, // Default to 0 to get all items
  skip = 0,
  select = [],
}: SearchProductQueryParams) => {
  const isEnabled = Boolean(searchQuery)
  const queryParams = new URLSearchParams();
  queryParams.append("q", searchQuery);
  limit > 0 && queryParams.append("limit", limit.toString());
  skip > 0 && queryParams.append("skip", skip.toString());
  select.length > 0 && queryParams.append("select", select.join(","));

  const url = `https://dummyjson.com/products/search?${queryParams.toString()}`;
  const queryKey = ["products", searchQuery, limit, skip, select];

  const { data, isLoading, isError, error, refetch } = useQuery<Product[]>(
    ['products', queryKey],
    async () => {
      const response = await axios.get(url);
      return response.data.products;
    },
    {enabled: searchQuery ? isEnabled : !isEnabled, }
  );

  return { data, isLoading, isError, error, refetch };
};
