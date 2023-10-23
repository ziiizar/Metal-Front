import { useState } from "react";

export function useFilters() {
  const [filters, setFilters] = useState({
    category: "all",
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return filters.category == "all" || product.category == filters.category;
    });
  };

  return { setFilters, filterProducts };
}
