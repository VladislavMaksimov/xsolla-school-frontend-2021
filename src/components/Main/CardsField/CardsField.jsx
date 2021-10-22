import React from "react";
import { Card } from "./Card/Card";
import "./CardsField.css";

export const CardsField = ({
  cards,
  chosenCity,
  chosenMonth,
  getMonthFromDate,
}) => {
  const renderCards = () => {
    if (!cards) return;
    const cardItems = [];
    cards.forEach((card) => {
      const city = card.city;
      const month = getMonthFromDate(card.date);
      if (
        (chosenCity === "All" || city === chosenCity) &&
        (chosenMonth === "All" || month === chosenMonth)
      )
        cardItems.push(<Card key={card.id} data={card} />);
    });
    return cardItems;
  };

  return <div id="cardsField">{renderCards()}</div>;
};
