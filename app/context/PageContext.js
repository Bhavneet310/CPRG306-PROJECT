import React, { useState, createContext } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [showMainPage, setShowMainPage] = useState(true);
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const contextValue = {
    showMainPage,
    setShowMainPage,
    showMovieDetails,
    setShowMovieDetails,
    selectedMovieId,
    setSelectedMovieId
  };

  return (
    <PageContext.Provider value={contextValue}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
