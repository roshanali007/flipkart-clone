import React, { createContext, useContext, useState } from "react";
const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [priceRange,setPriceRange] =useState({min:'Min',max:'10000+'})
  const [selectedFilters,setSelectFilters]=useState([])

  return (
    <FilterContext.Provider value={{ activeFilters, setActiveFilters,priceRange,setPriceRange,selectedFilters,setSelectFilters}}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
