import React from "react";
import ListOfHolidays from "../Holiday/ListOfHolidays";

const HolidayCart = ({ state }) => {
  return (
    <div>
      <div className="card mt-1 shadow">
        <ListOfHolidays holiday={state} />
      </div>
    </div>
  );
};

export default HolidayCart;
