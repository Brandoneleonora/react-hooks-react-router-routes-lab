import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>
      Directors Page
      {directors.map((dir, index) => <div key={index}>
        {dir.name}
        <ul>{dir.movies.map((dr, index) => <li key={index}>{dr}</li>)}</ul>
        </div>)}
    </h1>
    </div>;
}

export default Directors;
