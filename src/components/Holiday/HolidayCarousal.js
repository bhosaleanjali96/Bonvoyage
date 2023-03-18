import React from "react";
import { useLocation } from "react-router-dom";
import tokencheck from "../UserDashboard/BookingTokenVerification";
import { useState } from "react";
import Login from "../Main Components/Login";
import { useParams, useHistory } from "react-router-dom";

const HolidayCarousal = ({ Image }) => {
  let { state } = useLocation();
  let history = useHistory();
  let { name } = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let bookHoliday = () => {
    let r = tokencheck(handleShow);
    if (r === 0)
      history.push({
        pathname: `/cart/${name}`,
      });
    let stateinfo = {};
    stateinfo.stateType = "holiday";
    stateinfo.stateObj = state;
    localStorage.setItem("state", JSON.stringify(stateinfo));
  };
  return (
    <div className="row ms-2">
      <div className="col-md-8">
        {/* carousel */}
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <img
                src={Image[0]}
                class="d-block w-100 "
                style={{ maxHeight: "500px" }}
                alt="holidayimg"
              />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img
                src={Image[1]}
                class="d-block w-100"
                style={{ maxHeight: "500px" }}
                alt="holidayimg"
              />
            </div>
            <div class="carousel-item " data-bs-interval="5000">
              <img
                src={Image[2]}
                class="d-block w-100"
                alt="holidayimg"
                style={{ maxHeight: "500px" }}
              />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img
                src={Image[3]}
                class="d-block w-100"
                alt="holidayimg"
                style={{ maxHeight: "500px" }}
              />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img
                src={Image[4]}
                class="d-block w-100"
                alt="holidayimg"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="col-md-4">
        <div className="mt-3">
          <h5>*Best Seller Package</h5>
          {/* <p>Number of days-{holiday.days}</p> */}
          <p className="card-text">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1052/1052191.png"
                width="30px"
                alt=""
              />{" "}
              <img
                src="https://cdn-icons-png.flaticon.com/128/75/75929.png"
                width="30px"
                alt=""
              />{" "}
              <img
                src="https://cdn-icons-png.flaticon.com/128/254/254613.png"
                width="30px"
                alt=""
              />{" "}
              <img
                src="https://cdn-icons-png.flaticon.com/128/2932/2932366.png"
                width="30px"
                alt=""
              />
            </div>
          </p>
        </div>
        <hr />
        <div className="mt-3">
          <h3>₹ {state.price}</h3>
          <button className="btn btn-danger" onClick={bookHoliday}>
            Book Now
          </button>
          <Login show={show} handleClose={handleClose} />
          <br />
          <p className="safeinstructions ">Per Person on twin sharing</p>
        </div>
        <hr />
        <div>
          <h5>
            <i class="fab fa-cc-amazon-pay"></i>Pay & Hold
          </h5>
          <p className="safeinstructions ">
            Pay Rs. 1,000 per person now and hold the package at this price,
            payment as per policy can be made in the next 24/48 hrs. Holding of
            seats are subject to availability and in case of non availability of
            selected seats you can choose from a wide range of departures. To
            avail this option, click "Book Now".
          </p>
          <hr />
          <button type="button" class="btn btn-dark call">
            EMI
          </button>
          <p className="safeinstructions call">From Rs 1,599</p>
        </div>
      </div>
    </div>
  );
};

export default HolidayCarousal;
