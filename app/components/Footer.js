import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-red-500 p-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} MoviesHub. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
