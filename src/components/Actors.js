import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>
        Actors Page
    {actors.map((actor, index) => <div key={index}>
        {actor.name}
        <ul>{actor.movies.map((act, index) => <li key={index}>{act}</li>)}</ul>
        </div>)}
    </h1>
    </div>;
}

export default Actors;
