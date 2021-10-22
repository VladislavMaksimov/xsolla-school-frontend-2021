import React, { useEffect, useState } from "react";
import "./Filters.css";

export const Filters = ({ data }) => {
  const [cities, setCities] = useState(null);
  const [months, setMonths] = useState(null);

  useEffect(() => {
    if (!data) return;
    const cities = new Set();
    data.forEach((item) => {
      cities.add(item.city);
    });
    setCities(cities);
  }, [data]);

  const renderOptions = (dataset) => {
    if (!dataset) return;
    const options = [];
    dataset.forEach((item) => {
      options.push(<option key={item}> {item} </option>);
    });
    return options;
  };

  return (
    <div className="filters">
      <label htmlFor="cityPicker">City:</label>
      <select id="cityPicker" className="filter">
        {renderOptions(cities)}
      </select>

      <label htmlFor="monthPicker">Month:</label>
      <select id="monthPicker" className="filter">
        <option value="">Ipsum Lorem</option>{" "}
      </select>
    </div>
  );
};
