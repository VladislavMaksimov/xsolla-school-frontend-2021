import React from "react";
import { Card } from "./Card/Card";
import "./CardsField.css"

export const CardsField = ({ cards }) => {
  const renderCards = () => {
    if (!cards) return;
    const cardItems = [];
    console.log(cards)
    cards.forEach((card) => {
        console.log(card)
      cardItems.push(<Card key={card.id} data={card} />);
    });
    return cardItems;
  };

  return <div id="cardsField">{renderCards()}</div>;
};
