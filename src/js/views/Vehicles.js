import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const starWarsVehicles = store.vehicles.map((vehicles, index) => {
    return (
      <div className="container">
        <div className="card-header">
          <strong> {vehicles.name} </strong>
        </div>
        <div className="card-details">
          Passangers: {vehicles.passengers}
          <br></br>
          Cargo-Capacity: {vehicles.cargo_capacity}
          <br></br>
          Vehicle-Class: {vehicles.vehicle_class}
        </div>
      </div>
    );
  });

  return <div>{starWarsVehicles}</div>;
};

export default Vehicles;
