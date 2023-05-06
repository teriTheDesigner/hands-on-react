import React, { Component } from "react";
import Welcome from "./components/Welcome";
import Support from "./components/Support";
import ListCast from "./components/ListCast";

function App() {
  const name = "StarGazers";
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="stargazers_group" />
          <Welcome name="StarGazers" />
          <p>
            Members of an <b>intergalactic alliance</b> paving the way for peace
            and benevolence among all species. They are known for their
            enthusiasm for science, for their love of fun, and their dedication
            to education.
          </p>
          <ListCast />
          <Support />
        </hgroup>
      </article>
    </div>
  );
}
export default App;
