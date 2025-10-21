import React, { useState } from "react";

import MovieCard from "../components/MovieCard";

function Home() {
    const movies = [
        { id: 1, title: "Inception", release_date: "2010-07-16" },
        { id: 2, title: "The Dark Knight", release_date: "2008-07-18" },
        { id: 3, title: "Interstellar", release_date: "2014-11-07" }
    ];

    const [searchMovieInput, setSearchMovieInput] = useState("");

    function handleSearchMovie(e) {
        e.preventDefault();
        alert(searchMovieInput);
    }


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
                movie.title.toLowerCase().includes(searchMovieInput.toLowerCase()) && <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
  )
}

export default Home