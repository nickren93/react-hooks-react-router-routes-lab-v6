import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(()=> {
    fetch("http://localhost:4000/movies")
    .then(resp => resp.json())
    .then(data => setMovies(data))
  }, [])

  const moviesElement = movies.map(movie => {
    return <MovieCard key={movie.id} movie={movie} />
  })

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {moviesElement}
      </main>
    </>
  );
};

export default Home;
