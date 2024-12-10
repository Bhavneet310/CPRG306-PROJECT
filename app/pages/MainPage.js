// MainPage.js

import React, { useContext, useState } from 'react';
import PageContext from '../context/PageContext';
import SearchBar from '../components/SearchBar';
import { SearchContext } from '../context/SearchContext';
import { fetchMovies, fetchActors } from '../_utils/tmdbApi';
import Trending from './Trending';

const MainPage = () => {
    const { setShowMainPage } = useContext(PageContext);
    const { setSearchResults, setSearchTerm } = useContext(SearchContext);
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = async () => {
        const movieResults = await fetchMovies(searchQuery);
        const actorResults = await fetchActors(searchQuery);
        setSearchResults({ movies: movieResults || [], actors: actorResults || [] });
        setSearchTerm(searchQuery);  
        setSearchQuery("");  
        setShowMainPage(false); 
    };
    const handleSearchQueryChange = (query) => {
        setSearchQuery(query); 
    };
    return (
        <div>
            <SearchBar 
                onSearch={handleSearch} 
                value={searchQuery} 
                onChange={handleSearchQueryChange}
            />
            <Trending />
        </div>
    );
};
export default MainPage;
