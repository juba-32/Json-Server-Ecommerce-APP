import "./Products.css";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard/ProductCard";
import ProductSearch from "./ProductSearch/ProductSearch";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import useProducts from "../../hooks/useProducts";
import { useSearchParams } from "react-router-dom";
import ProductSkeleton from "./ProductSkeleton/ProductSkeleton";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();
  const maxPrice = searchParams.get("maxPrice");
  const selectedCategory = useSelector((state) => state.cart.selectedCategory);

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useProducts(searchQuery, selectedCategory, maxPrice);

  return (
    <div>
      <Helmet>
        <title>PRODUCTS</title>
      </Helmet>
      <h1 className="title"> PRODUCTS</h1>
      <div className="filter-products">
        <ProductSearch setSearchQuery={setSearchQuery} />
        <CategoryFilter selectedCategory={selectedCategory} />
      </div>

      <div className="product-container">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))
        ) : isError ? (
          <h2>{error.message}</h2>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
