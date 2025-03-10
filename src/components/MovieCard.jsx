import {Link} from 'react-router-dom';

function MovieCard({ movie }) {
  
  return (
    <article>
        <h2>{movie.title}</h2>
        {/* What should go here? */}
        <Link to={`/movie/${movie.id}`}> View Info </Link>
    </article>
  );
};

export default MovieCard;