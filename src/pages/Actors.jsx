import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(r => r.json())
    .then(data => setActors(data))
  }, [])

  const actorsElement = actors.map((actor, index) => {
    return (
      <article key={index}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie, index) => {
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
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actorsElement}
      </main>
    </>
  );
};

export default Actors;
