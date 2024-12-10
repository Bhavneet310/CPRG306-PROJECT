"use client";
import React, { useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { SearchProvider } from './context/SearchContext';
import { PageProvider } from './context/PageContext';
import MainPage from './pages/MainPage';
import SearchResultsPage from './pages/SearchResultsPage';
import MovieDetailsPage from './pages/MovieDetailsPage'; // Import MovieDetailsPage
import PageContext from './context/PageContext';

const Page = () => {
    return (
        <PageProvider> {/* Use PageProvider here */}
            <SearchProvider>
                <Header />
                <MainContent />
                <Footer />
            </SearchProvider>
        </PageProvider>
    );
};

const MainContent = () => {
    const { showMainPage, showMovieDetails } = useContext(PageContext);

    if (showMovieDetails) {
        return <MovieDetailsPage />;
    }

    return showMainPage ? <MainPage /> : <SearchResultsPage />;
};

export default Page;
