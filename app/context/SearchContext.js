import React, { createContext, useState } from 'react';

export const SearchContext = createContext({
    searchResults: [],
    setSearchResults: () => {},
    searchTerm: "",
    setSearchTerm: () => {}
});

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SearchContext.Provider value={{ searchResults, setSearchResults, searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};