import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

const People = () => {
  const { store, actions } = useContext(Context);
  const starWarsCharacters = store.people.map((character, index) => {
    return (
      <div className="container">
        <div className="card-header">
          <strong> {character.name} </strong>
        </div>
        <div className="card-details">
          Gender: {character.gender}
          <br></br>
          Hair Color: {character.hair_color}
          <br></br>
          Eye Color: {character.eye_color}
        </div>
      </div>
    );
  });

  return <div>{starWarsCharacters}</div>;
};

export default People;
