import React from "react";
import { useLocation } from "react-router-dom";
import HolidayCarousal from "./HolidayCarousal";
import Footer from "../shared component/Footer";
import HolidayFooter from "./HolidayFooter";
import { useSelector, useDispatch } from "react-redux";

function HolidayDiscription() {
  let { state } = useLocation();
  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-between">
        <h3>
          {state.src} To {state.dest}
        </h3>
        <h5>Seller-BonVoyage.com</h5>
        {/* <div className="d-inline">
          <h2>{state.src}</h2> To <h2>{state.dest}</h2>
        </div> */}
      </div>
      <div className="text-end">
        <h4 className="safeinstructions call ">Call Us for details -</h4>
        <h4 className="text-danger safeinstructions call">844 844 9287</h4>
      </div>
      <div className="card p-1 border-0 shadow-lg mb-4">
        <HolidayCarousal Image={state.image} />
      </div>
      <div>
        <h3 className="text-danger">Overview</h3>
        <p>{state.description}</p>
      </div>
      <HolidayFooter />
      <Footer />
    </div>
  );
}

export default HolidayDiscription;
