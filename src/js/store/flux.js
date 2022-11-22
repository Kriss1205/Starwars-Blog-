const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      vehicles: [],
    },
    actions: {
      getPeople: () => {
        fetch("https://swapi.dev/api/people")
          .then((data) => data.json())
          .then((res) => setStore({ people: res.results }));
      },
    },
    actions: {
      getPlanets: () => {
        fetch("https://swapi.dev/api/planets")
          .then((data) => data.json())
          .then((res) => setStore({ planets: res.results }));
      },
    },
    actions: {
      getVehicles: () => {
        fetch("https://swapi.dev/api/vehicles")
          .then((data) => data.json())
          .then((res) => setStore({ vehicles: res.results }));
      },
    },
  };
};

export default getState;
