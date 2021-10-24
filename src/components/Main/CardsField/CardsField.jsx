import React, { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import "./CardsField.css";

export const CardsField = ({
  cards,
  chosenCity,
  chosenMonth,
  getMonthFromDate,
  isOnlyFavorites,
}) => {
  const getFirstFavorites = () => {
    if (!localStorage.favorites) {
      const firstFavorites = new Map();
      cards.forEach((card) => {
        firstFavorites[card.id] = false;
      });
      return JSON.stringify(firstFavorites);
    }
    return localStorage.favorites;
  };

  const [favorites, setFavorites] = useState(getFirstFavorites());

  useEffect(() => {
    localStorage.favorites = favorites;
  }, [favorites]);

  const returnFavorite = (idCard, mark) => {
    const newFavorites = JSON.parse(favorites);
    newFavorites[idCard] = mark;
    setFavorites(JSON.stringify(newFavorites));
  };

  const renderCards = () => {
    if (!cards) return;
    const cardItems = [];
    cards.forEach((card) => {
      const city = card.city;
      const month = getMonthFromDate(card.date);
      if (
        (chosenCity === "All" || city === chosenCity) &&
        (chosenMonth === "All" || month === chosenMonth) &&
        (!isOnlyFavorites || JSON.parse(favorites)[card.id] === true)
      )
        cardItems.push(
          <Card
            key={card.id}
            data={card}
            isFavorite={JSON.parse(favorites)[card.id]}
            returnFavorite={returnFavorite}
          />
        );
    });
    return cardItems;
  };

  return <div id="cardsField">{renderCards()}</div>;
};
