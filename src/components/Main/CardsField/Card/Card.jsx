import React from "react";
import "./Card.css";

export const Card = ({ data }) => {
  return <div className="card" style={{ backgroundImage: `url(${data.image})` }}></div>;
};
