import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({ genres: [] })
  const params = useParams();

  //console.log(params)

  const movieId = params.id;

  useEffect(() =>{
      fetch(`http://localhost:4000/movies/${movieId}`)
      .then(r => r.json())
      .then(data => {
        //console.log(data.genres)
        setMovie(movie => data)
      })
      .catch(error => console.error(error));
  }, [movieId]);

  
  const movieGenres = movie.genres.map( (genre, index)  => {
    return <span key={index}>{genre}</span>
  })
  
  
  if(!movie.title){
    return <h1>Loading...</h1>;
  };

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>{movie.time} min</p>
        <p>
          Genres: {movieGenres}
        </p>
      </main>
    </>
  );
};

export default Movie;
