import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(r => r.json())
    .then(data => setDirectors(data))
  }, [])

  const directorsElement = directors.map((director, index) => {
    return (
      <article key={index}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>
          })}
        </ul>
      </article>
    )
  })

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directorsElement}
      </main>
    </>
  );
};

export default Directors;
