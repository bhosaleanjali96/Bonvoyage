import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import hotelSlice from "./hotelSlice";
import holidaySlice from "./holidaySlice";
import flightSlice from "./flightSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    hotel: hotelSlice,
    holiday: holidaySlice,
    flight: flightSlice,
    cart: cartSlice,
  },
});
