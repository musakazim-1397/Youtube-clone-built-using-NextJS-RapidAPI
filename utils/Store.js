import { createContext, useState } from "react";

const LinksContext = createContext({
  searchItemFtn: (searchTerm) => {},
  searchItem: "",
});

export default LinksContext;

export function LinksContextProvider(props) {
  const [searchText, setSearchText] = useState("");

  const searchFtn = (srchTerm) => {
   return setSearchText(srchTerm);
  };

  return (
    <LinksContext.Provider
      value={{ searchItemFtn: searchFtn, searchItem: searchText }}
    >
      {props.children}
    </LinksContext.Provider>
  );
}
