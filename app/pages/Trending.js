import React, { useContext, useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../_utils/tmdbApi';
import PageContext from '../context/PageContext'; 
const Trending = () => {
    const [state, setState] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const { setShowMainPage, setShowMovieDetails, setSelectedMovieId } = useContext(PageContext); 

    const fetchTrending = async () => {
        const trendingMovies = await fetchTrendingMovies(currentPage);
        setState(trendingMovies);
    };
    useEffect(() => {
        fetchTrending();
    }, [currentPage]);

    const handleMovieClick = (id) => {
        setShowMainPage(false);
        setShowMovieDetails(true);
        setSelectedMovieId(id);
    };

    return (
        <div className='container mx-auto px-4'>
            <div className='my-8'>
                <h1 className='text-3xl font-bold text-red-500'>Trending</h1>
                <i className='bi bi-fire'></i>
            </div>
            <div className='flex flex-wrap -mx-2'>
                {state.map((movie) => {
                    return (
                        <div key={movie.id} className='w-full md:w-1/3 lg:w-1/4 px-2 mb-4'>
                            <div className='bg-black text-red-500 rounded overflow-hidden shadow-lg h-full flex flex-col'>
                                <img 
                                    src={movie.Poster} 
                                    alt={movie.Title} 
                                    className='w-full h-auto cursor-pointer' 
                                    onClick={() => handleMovieClick(movie.id)}
                                    style={{ transition: 'transform 0.3s' }}
                                />
                                <div className='p-4 flex flex-col justify-between flex-grow'>
                                    <h5 
                                        className='font-bold text-lg mb-2 line-clamp-2 cursor-pointer hover:underline'
                                        onClick={() => handleMovieClick(movie.id)}
                                    >
                                        {movie.Title}
                                    </h5>
                                    <p className='text-red-700 text-base'>Release Date: {movie.ReleaseDate}</p>
                                    <p className='text-red-700 text-base mb-4'>Rating: {movie.VoteAverage} / 10</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="pagination text-center mt-2 mb-5 text-xl">
                <button className="mx-4 font-bold hover:underline" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>⬅ Previous</button>
                <button className=" font-bold hover:underline" onClick={() => setCurrentPage(prev => prev + 1)}>Next ➡</button>
            </div>
        </div>
    );
};

export default Trending;