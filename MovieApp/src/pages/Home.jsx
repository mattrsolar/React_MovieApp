import MovieCard from "../components/MovieCard";


function Home() {
    const movies = [
        { id: 1, title: "Inception", release_date: "2010-07-16" },
        { id: 2, title: "The Dark Knight", release_date: "2008-07-18" },
        { id: 3, title: "Interstellar", release_date: "2014-11-07" }
    ];


  return (
    <div className="home">
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </div>
  )
}

export default Home