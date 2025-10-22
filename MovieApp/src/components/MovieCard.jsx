import { FcLike } from 'react-icons/fc';
import '../css/MovieCard.css'

function MovieCard({movie}) {

    function handleLikeClick() {
        alert("Like button clicked!")
    }

  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title} />
            <div className="movie-favorite">
                <button className="like-btn" onClick={handleLikeClick}><FcLike/></button>
            </div>
        </div>
        <div className='movie-info'>
            <h3>{movie.title}</h3>
            <h3>{movie.release_date}</h3>
        </div>        
    </div>
  )
}

export default MovieCard