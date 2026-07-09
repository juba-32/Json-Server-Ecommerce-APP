import api from "./axios";

export const getProducts = async ({
  searchQuery,
  selectedCategory,
  maxPrice,
}) => {
  const params = {};

  if (searchQuery) {
    params.name_like = searchQuery;
  }

  if (selectedCategory) {
    params.category = selectedCategory;
  }

  if (maxPrice) {
    params.price_lte = maxPrice;
  }

  const { data } = await api.get("/products", {
    params,
  });

  return data;
};