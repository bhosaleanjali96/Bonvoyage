import React, { useState } from "react";
import Faq from "../FAQ/Faq";
import Policies from "../FAQ/Policies";
import { useLocation, useHistory } from "react-router-dom";
import ViewHotelcarousel from "../Hotel/ViewHotelcarousel";
import Hotelhighlights from "../Hotel/Hotelhighlights";
import tokencheck from "../UserDashboard/BookingTokenVerification";
import Login from "../Main Components/Login";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux-store/cartSlice";

function ViewHotels() {
  let history = useHistory();

  let { name } = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { state } = useLocation();
  let bookHotel = () => {
    let r = tokencheck(handleShow);
    if (r === 0)
      history.push({
        pathname: `/cart/${name}`,
      });
    let stateinfo = {};
    stateinfo.stateType = "hotel";
    stateinfo.stateObj = state;
    localStorage.setItem("state", JSON.stringify(stateinfo));
  };
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between">
        <div>
          <h2>{state.hotelname}</h2>
          <p>{state.location}</p>
        </div>
        <div>
          <h3 className="d-inline me-3 fs-3 mt-2">₹{state.price}</h3>
          <button className="btn btn-danger" onClick={bookHotel}>
            Book Now
          </button>
          <Login show={show} handleClose={handleClose} />
          <br />
          <p>For Two Nights</p>
        </div>
      </div>
      <div className="card p-1 border-0 shadow-lg mb-4">
        <ViewHotelcarousel Images={state.image} star={state.hotelstar} />
        <Hotelhighlights />
        <p className="hoteldesp">{state.desp}</p>
        <h5 className="fw-bold">Hotel Facilities</h5>
        <p className="hoteldesp">{state.hotelfacilities}</p>
        <h5 className="fw-bold">Room Facilities</h5>
        <p className="hoteldesp">{state.roomfacilities}</p>
        <h5 className="fw-bold">Important Landmarks</h5>
        <p className="hoteldesp">{state.landmarks}</p>
      </div>
      <Policies />
      <Faq />
    </div>
  );
}

export default ViewHotels;
