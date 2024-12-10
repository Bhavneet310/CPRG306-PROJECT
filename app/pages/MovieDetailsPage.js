import React, { useEffect, useState, useContext } from 'react';
import { fetchMovieDetails } from '../_utils/tmdbApi';
import PageContext from '../context/PageContext';

const MovieDetailsPage = () => {
    const { selectedMovieId, setShowMovieDetails, setShowMainPage } = useContext(PageContext);
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        if (selectedMovieId) {
            fetchMovieDetails(selectedMovieId).then(data => {
                setMovieDetails(data);
            });
        }
    }, [selectedMovieId]);

    const goBack = () => {
        setShowMovieDetails(false);
        setShowMainPage(true);
    };

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mx-auto p-4 my-2'>
            <div className="flex">
                <img 
                    src={movieDetails.Poster} 
                    alt={movieDetails.Title} 
                    style={{ width: '350px', marginLeft: '10px', marginBottom: '10px'}} 
                />
                <div className="pl-4">
                    <h1 className='font-bold text-4xl mb-8'>{movieDetails.Title}</h1>
                    <p>Year: {movieDetails.ReleaseDate}</p>
                    <p>Duration: {movieDetails.Duration} minutes</p>
                    <p>Director(s): {movieDetails.Directors && movieDetails.Directors.join(", ")}</p>
                    <p>Writer(s): {movieDetails.Writers && movieDetails.Writers.join(", ")}</p>
                    <p>Rating: {movieDetails.VoteAverage}/10</p>
                    <p>Language: {movieDetails.Language}</p>
                    <div>
                        <h3>Main Actors:</h3>
                        <div className="flex flex-wrap">
                            {movieDetails.MainActors.map((actor, index) => (
                                <div key={index} className="flex flex-col items-center m-2">
                                    <img 
                                        src={actor.ProfilePic} 
                                        alt={actor.Name} 
                                        className="w-24 h-24 rounded-full object-cover" 
                                    />
                                    <p className="text-center">{actor.Name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <button className=" bg-black hover:bg-red-300 text-red-500 font-bold py-2 px-6 rounded" onClick={goBack}>
                    Back to list
                </button>
            </div>
        </div>
    );
};

export default MovieDetailsPage;
