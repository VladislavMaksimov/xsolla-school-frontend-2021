import moment from "moment";
import React, { useEffect, useState } from "react";
import "./Filters.css";

export const Filters = ({
  data,
  chosenCity,
  setChosenCity,
  chosenMonth,
  setChosenMonth,
  isOnlyFavorites,
  setIsOnlyFavorites,
  getMonthFromDate,
}) => {
  const [cities, setCities] = useState(null);
  const [months, setMonths] = useState(null);

  const sortMonths = (months) => {
    const sortedMonthNumbers = Array.from(months);
    sortedMonthNumbers.sort((a, b) => {
      return a - b;
    });
    const sortedMonths = sortedMonthNumbers.map((monthNum) => {
      return getMonthFromDate(monthNum);
    });
    sortedMonths.unshift("All");
    return sortedMonths;
  };

  useEffect(() => {
    if (!data) return;
    const cities = new Set(["All"]);
    const months = new Set();
    data.forEach((item) => {
      cities.add(item.city);
      months.add(moment(item.date, "DD.MM.YYYY").month() + 1);
    });
    const sortedMonths = sortMonths(months);
    setCities(cities);
    setMonths(sortedMonths);
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
      <div class="filterWrapper">
        <label htmlFor="cityFilter">City:</label>
        <select
          id="cityFilter"
          className="filter"
          value={chosenCity}
          onChange={(e) => setChosenCity(e.target.value)}
        >
          {renderOptions(cities)}
        </select>
      </div>

      <div class="filterWrapper">
        <label htmlFor="monthFilter">Month:</label>
        <select
          id="monthFilter"
          className="filter"
          value={chosenMonth}
          onChange={(e) => setChosenMonth(e.target.value)}
        >
          {renderOptions(months)}
        </select>
      </div>

      <div class="filterWrapper">
        <label htmlFor="favoriteFilter">Only favorites:</label>
        <input
          type="checkbox"
          id="favoriteFilter"
          value={isOnlyFavorites}
          onChange={(e) => {
            const value = e.target.value === "false" ? true : false;
            setIsOnlyFavorites(value);
          }}
        />
      </div>
    </div>
  );
};
