import React from "react";
import { movies } from "../data";

function Movies() {

  console.log(movies)

  return <div>
    <h1>
      Movies Page
      {movies.map((movie, index) => <div key={index}>
        {movie.title} {movie.time}
        <ul>{movie.genres.map((mv, index) => <li key={index}>{mv}</li>)}</ul>
        </div>)}
      </h1>
   
    </div>;
}

export default Movies;
