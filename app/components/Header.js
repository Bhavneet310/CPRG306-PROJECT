import React, { useContext } from 'react';
import PageContext from '../context/PageContext';

const Header = () => {
    const { setShowMainPage } = useContext(PageContext);

    return (
        <header className="bg-black text-red-500 p-4">
            <nav className="container mx-auto flex justify-between">
                <h1 
                  className="text-2xl font-bold cursor-pointer"
                  onClick={() => setShowMainPage(true)}
                >
                    MoviesHub
                </h1>
            </nav>
        </header>
    );
};

export default Header;
