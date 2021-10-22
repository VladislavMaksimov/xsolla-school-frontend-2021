import React, { useEffect, useState } from "react";
import "./Filters.css";

export const Filters = ({
  data,
  chosenCity,
  setChosenCity,
  chosenMonth,
  setChosenMonth,
  getMonthFromDate,
}) => {
  const [cities, setCities] = useState(null);
  const [months, setMonths] = useState(null);

  useEffect(() => {
    if (!data) return;
    const cities = new Set(["All"]);
    const months = new Set(["All"]);
    data.forEach((item) => {
      cities.add(item.city);
      months.add(getMonthFromDate(item.date));
    });
    setCities(cities);
    setMonths(months);
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
      <select
        id="cityPicker"
        className="filter"
        value={chosenCity}
        onChange={(e) => setChosenCity(e.target.value)}
      >
        {renderOptions(cities)}
      </select>

      <label htmlFor="monthPicker">Month:</label>
      <select
        id="monthPicker"
        className="filter"
        value={chosenMonth}
        onChange={(e) => setChosenMonth(e.target.value)}
      >
        {renderOptions(months)}
      </select>
    </div>
  );
};
