import React, { createContext, useContext, useState } from "react";
const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [activeFilters, setActiveFilters] = useState([]); 

  return (
    <FilterContext.Provider value={{ activeFilters, setActiveFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
