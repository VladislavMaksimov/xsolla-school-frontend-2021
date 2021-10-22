import React, { useEffect, useState } from "react";
import { CardsField } from "./CardsField/CardsField";
import { Filters } from "./Filters/Filters";

export const Main = () => {
  const [data, setData] = useState(null);
  const [cards, setCards] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(process.env.REACT_APP_DATA_SOURCE)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setCards(json);
      });
  };

  return (
    <main>
      <Filters data={data} />
      <CardsField cards={cards} />
    </main>
  );
};
