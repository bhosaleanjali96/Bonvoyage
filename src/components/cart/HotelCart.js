import React from "react";
import ListOfHotels from "../Hotel/ListofHotels";
import HotelCancelatonPolicy from "../Hotel/HotelCancelatonPolicy";
const HotelCart = ({ state }) => {
  return (
    <div className="card mt-1 shadow">
      <ListOfHotels hot={state} />
      <HotelCancelatonPolicy />
    </div>
  );
};

export default HotelCart;
