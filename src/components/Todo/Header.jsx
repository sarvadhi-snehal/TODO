import React from "react";
import PropTypes from "prop-types";


const Header = ({ day, date, month, year }) => {
  return (
    <header className="todoHeader">
      <h1>{day}</h1>
      <p>
        {date}/{month}/{year}
      </p>
    </header>
  );
};

Header.defaultProps = {
  day: new Date().getDay("en-us", { weekday: "long" }),
  date: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
};

Header.propTypes = {
  day: PropTypes.string,
  date: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
};

export default Header;
