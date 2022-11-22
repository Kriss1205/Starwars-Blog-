import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Planets = () => {
  const { store, actions } = useContext(Context);
  const starWarsPlanets = store.planets.map((planets, index) => {
    return (
      <div className="container">
        <div className="card-header">
          <strong> {planets.name} </strong>
        </div>
        <div className="card-details">
          Population: {planets.population}
          <br></br>
          Terrain: {planets.terrain}
        </div>
      </div>
    );
  });

  return <div>{starWarsPlanets}</div>;
};

export default Planets;
