import React from "react";
import { Link } from "react-router-dom";
import "./Page404.css"

function Page404() {
  return (
    <div id="wrapper">
      <img id="pic404" src="https://i.imgur.com/qIufhof.png" alt="404pic" />
      <div id="info">
        <h3>This page could not be found</h3>
        <Link to = "/">
          <button id="btn-404">Homepage</button>
        </Link>
      </div>
    </div>
  );
}

export default Page404;
