import moment from "moment";
import React from "react";
import "./Card.css";
import { FavoriteIcon } from "./FavoriteIcon/FavoriteIcon";

export const Card = ({ data }) => {
  const renderDay = () => {
    let day = moment(data.date, "DD.MM.YYYY").date();
    if (day < 10) day = "0" + day;
    return day;
  };

  return (
    <div className="card" style={{ backgroundImage: `url(${data.image})` }}>
      <div className="cardDay">
        <span className="cardDayText"> {renderDay()} </span>
      </div>
      <FavoriteIcon />
      <h1 className="cardName"> {data.name} </h1>
    </div>
  );
};
