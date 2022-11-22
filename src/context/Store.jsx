import React, { createContext, useState, useContext } from "react";

const StoreDataContext = createContext({
  selectedItems: [],
  setSelectedItems: () => {},
  number: 0,
  count: 0,
  setNumber: () => {},
  setCount: () => {},
});

//!!!!!!

export const StoreProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <StoreDataContext.Provider
      value={{
        selectedItems,
        setSelectedItems,
      }}
    >
      {children}
    </StoreDataContext.Provider>
  );
};

//!!!!!!

export const useStoreDataContext = () => {
  const context = useContext(StoreDataContext);

  return {
    selectedItems: context.selectedItems,
    setSelectedItems: context.setSelectedItems,
  };
};
