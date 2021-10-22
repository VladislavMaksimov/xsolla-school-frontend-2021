import React, { useEffect, useState } from "react";
import "./Filters.css";
import moment from "moment";

export const Filters = ({ data }) => {
  const monthsMap = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const [cities, setCities] = useState(null);
  const [months, setMonths] = useState(null);

  const getMonthFromDate = (date) => {
    const monthNumber = moment(date, "DD.MM.YYYY").month() + 1;
    return monthsMap[monthNumber];
  };

  useEffect(() => {
    if (!data) return;
    const cities = new Set();
    const months = new Set();
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
      <select id="cityPicker" className="filter">
        {renderOptions(cities)}
      </select>

      <label htmlFor="monthPicker">Month:</label>
      <select id="monthPicker" className="filter">
        {renderOptions(months)}
      </select>
    </div>
  );
};
