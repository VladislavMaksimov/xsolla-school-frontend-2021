import React from "react";
import "./Filters.css";

export const Filters = () => {
  return (
    <div className="filters">
      <label htmlFor="cityPicker">City:</label>
      <select id="cityPicker" className="filter">
        <option value="">Lorem Ipsum</option>{" "}
      </select>

      <label htmlFor="monthPicker">Month:</label>
      <select id="monthPicker" className="filter">
        <option value="">Ipsum Lorem</option>{" "}
      </select>
    </div>
  );
};
