import React from "react";
import { Card } from "./Card/Card";
import "./CardsField.css"

export const CardsField = ({ cards }) => {
  const renderCards = () => {
    if (!cards) return;
    const cardItems = [];
    cards.forEach((card) => {
      cardItems.push(<Card data={card} />);
    });
    return cardItems;
  };

  return <div id="cardsField">{renderCards()}</div>;
};
