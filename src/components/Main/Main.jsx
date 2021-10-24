import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { CardsField } from "./CardsField/CardsField";
import { Filters } from "./Filters/Filters";

export const Main = () => {
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

  const [data, setData] = useState(null);
  const [chosenCity, setChosenCity] = useState(null);
  const [chosenMonth, setChosenMonth] = useState(null);
  const [isOnlyFavorites, setIsOnlyFavorites] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getMonthFromDate = (date) => {
    if (typeof date === "number") return monthsMap[date];
    const monthNumber = moment(date, "DD.MM.YYYY").month() + 1;
    return monthsMap[monthNumber];
  };

  const getData = () => {
    fetch(process.env.REACT_APP_DATA_SOURCE)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setChosenCity("All");
        setChosenMonth("All");
      })
      .then(() => setFetching(false));
  };

  const renderFetchingData = () => {
    if (!fetching)
      return (
        <Fragment>
          <Filters
            data={data}
            chosenCity={chosenCity}
            setChosenCity={setChosenCity}
            chosenMonth={chosenMonth}
            setChosenMonth={setChosenMonth}
            isOnlyFavorites={isOnlyFavorites}
            setIsOnlyFavorites={setIsOnlyFavorites}
            getMonthFromDate={getMonthFromDate}
          />
          <CardsField
            cards={data}
            chosenCity={chosenCity}
            chosenMonth={chosenMonth}
            isOnlyFavorites={isOnlyFavorites}
            getMonthFromDate={getMonthFromDate}
          />
        </Fragment>
      );
  };

  return <main>{renderFetchingData()}</main>;
};
