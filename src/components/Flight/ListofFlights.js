import React, { useState } from "react";
import tokencheck from "../UserDashboard/BookingTokenVerification";
import Login from "../Main Components/Login";
import { useRouteMatch, useHistory } from "react-router-dom";

function ListofFlights({ fli }) {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let bookFlight = () => {
    let r = tokencheck(handleShow);
    if (r === 0)
      history.push({
        pathname: `/cart/${fli.fname}`,
      });
    let stateinfo = {};
    stateinfo.stateType = "flights";
    stateinfo.stateObj = fli;
    localStorage.setItem("state", JSON.stringify(stateinfo));
  };
  return (
    <>
      <div className="row">
        <div className="col-5 col-sm-12 col-md-5">
          <div className="row">
            <div className="col-2 ">
              <img
                src={fli.image}
                className="img-fluid rounded-start ms-2"
                width="50px"
                alt="logo"
              />
            </div>
            <div className="col-10">
              <div className="row">
                <p className="card-text">
                  {fli.fname} <span className="text-muted">({fli.class})</span>{" "}
                </p>
              </div>
              <div className="row">
                <p className="card-text">{fli.fnumber}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-12 col-md-4"></div>
        <div className="col-3 col-sm-12 col-md-3"></div>
      </div>
      <div className="row mt-3">
        <div className="col-8 col-sm-12 col-md-8">
          <div className="row mb-3">
            <div className=" col-sm-12 col-md-5">
              <h3 className="card-text text-center">
                {fli.source}
                <span>
                  <i className="fas fa-plane-departure ms-3"></i>
                </span>
              </h3>
            </div>
            <div className="col-sm-12 col-md-2 ">
              {/* duration */}
              <p className="card-text text-center">
                <i className="far fa-clock"></i>
                <span className="text-muted"> {fli.duration}hr</span>
              </p>
            </div>
            <div className="col-sm-12 col-md-5">
              <h3 className="card-text text-center">
                <i className="fas fa-plane-arrival me-3"></i>
                {fli.des}
              </h3>
            </div>
          </div>
          <div className="row mt-3 pb-2">
            <div className="col-sm-12 col-md-6">
              <p className="card-text text-center">
                <small className="text-muted">
                  Checkin Baggage: <i className="fas fa-suitcase"></i> 25 kg
                </small>
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p className="card-text text-center">
                <small className="text-muted">
                  <i className="fas fa-utensils"></i> Paid Meal
                </small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-4 col-sm-12 col-md-4">
          <h5 className="text-center h5">₹{fli.price}</h5>
          <button
            type="button"
            className="btn btn-success mx-auto d-block"
            onClick={bookFlight}
          >
            Book Now
          </button>
          <Login show={show} handleClose={handleClose} />
        </div>
      </div>
    </>
  );
}

export default ListofFlights;
