import React, { useContext } from 'react';
import PageContext from '../context/PageContext';

const MovieListItem = ({ movie }) => {
    const { setShowMainPage, setShowMovieDetails, setSelectedMovieId } = useContext(PageContext);

    const handleClick = () => {
        setShowMainPage(false);
        setShowMovieDetails(true);
        setSelectedMovieId(movie.id);
    };

    return (
        <div className='bg-black rounded overflow-hidden shadow-lg flex flex-col h-full' onClick={handleClick}>
            <img 
                src={movie.Poster} 
                alt={`Poster of ${movie.Title}`} 
                className='w-full h-auto object-cover cursor-pointer '
                style={{ transition: 'transform 0.3s' }}
            />
           
            <div className='p-4 flex flex-col justify-between'>
                <h5 className='text-red-500 font-bold text-lg mb-2 line-clamp-2 cursor-pointer hover:underline'>{movie.Title}</h5>
                <p className='text-red-500 text-base'>Year: {movie.Year}</p>
            </div>
            
        </div>
    );
};

export default MovieListItem;
