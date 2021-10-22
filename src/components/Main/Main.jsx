import React, { useEffect } from "react";
import { CardsField } from "./CardsField/CardsField";
import { Filters } from "./Filters/Filters";

export const Main = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(process.env.REACT_APP_DATA_SOURCE)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <main>
      <Filters />
      <CardsField />
    </main>
  );
};
