import React, { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import { getAllMovies } from "../services/MoviesApi";

function Home() {    
    const [movies, setMovies] = useState([]);
    const [searchMovieInput, setSearchMovieInput] = useState("");

    function handleSearchMovie(e) {
        e.preventDefault();
        alert(searchMovieInput);
    }

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getAllMovies();
                setMovies(moviesData);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }finally{
                console.log("Finished fetching movies");
            }
        };
        fetchMovies();
    }, []);

  return (
    <div className="home">
        <form className="search-form" onSubmit={handleSearchMovie}>
            <input className="searchInput" type="text" placeholder="Search for movies..." 
            value={searchMovieInput}
            onChange={(e) => setSearchMovieInput(e.target.value)}/>
            <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
                movie.title.toLowerCase().includes(searchMovieInput.toLowerCase()) && 
                    <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
  )
}

export default Home