import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsApi";

export default function useProducts(
  searchQuery,
  selectedCategory,
  maxPrice
) {
  return useQuery({
    queryKey: [
      "products",
      searchQuery,
      selectedCategory,
      maxPrice,
    ],

    queryFn: () =>
      getProducts({
        searchQuery,
        selectedCategory,
        maxPrice,
      }),

    staleTime: 1000 * 60 * 5,
  });
}