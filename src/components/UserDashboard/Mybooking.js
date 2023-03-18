import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart } from "../redux-store/cartSlice";

const Mybooking = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  let { cart } = useSelector((state) => state.cart);
  let userDetails = localStorage.getItem("userDetails");
  let { username } = JSON.parse(userDetails);
  let bookingDetails = cart.filter((el) => {
    return el.username === username;
  });

  const cancelBooking = (val) => {
    let index = cart.findIndex((obj) => obj._id === val._id);
    dispatch(deleteCart({ id: val._id, index: index }));
  };
  return (
    <div>
      <h1 className="text-center top-heading mt-3 mb-3">Your Bookings.,</h1>
      {bookingDetails.map((val, index) => {
        return val.stateType === "hotel" ? (
          <div className="card mb-4 container">
            <div className="row">
              <div className="col-md-3">
                <img src={val.stateInfo.image[0]} alt="image" width="100%" />
              </div>
              <div className="col-md-6">
                <h3>{val.stateInfo.hotelname}</h3>
                <p>{val.stateInfo.location}</p>
              </div>
              <div className="col-md-3">
                <button
                  className="btn-danger btn mt-3"
                  onClick={() => cancelBooking(val)}
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        ) : val.stateType === "flights" ? (
          <div className="card mb-4 container">
            <div className="row">
              <div className="col-md-1">
                <img src={val.stateInfo.image} alt="image" width="75%" />
              </div>
              <div className="col-md-3">
                <h4>
                  {val.stateInfo.fname}
                  <span className="text-muted">
                    ({val.stateInfo.class})
                  </span>{" "}
                </h4>
                <h4>{val.stateInfo.fnumber}</h4>
              </div>
              <div className="col-md-3">
                <h3>
                  {val.stateInfo.source}{" "}
                  <span>
                    <i className="fas fa-plane-departure ms-3"></i>
                    {/* <p className="card-text text-center ms-3">
                      <i className="far fa-clock"></i>
                      <span className="text-muted">
                        {" "}
                        {val.stateInfo.duration}hr
                      </span>
                    </p> */}
                  </span>
                </h3>
                <p className="text-vertically center">
                  <small className="text-muted">
                    Baggage: <i className="fas fa-suitcase"></i> 25 kg
                  </small>
                </p>
              </div>
              {/* <div className="col-md-2 my-auto">
                <p className="card-text text-center">
                  <i className="far fa-clock"></i>
                  <span className="text-muted">
                    {" "}
                    {val.stateInfo.duration}hr
                  </span>
                </p>
              </div> */}
              <div className="col-md-3">
                <h3>
                  {" "}
                  <i className="fas fa-plane-arrival me-3"></i>
                  {val.stateInfo.des}
                </h3>
                <p className="text-vertically center">
                  <small className="text-muted">
                    <i className="fas fa-utensils"></i> Paid Meal
                  </small>
                </p>
              </div>
              <div className="col-md-2 my-auto">
                <button
                  className="btn-danger btn "
                  onClick={() => cancelBooking(val)}
                >
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        ) : (
          val.stateType === "holiday" && (
            <div className="card mb-4 container">
              <div className="row">
                <div className="col-md-3">
                  <img src={val.stateInfo.image[0]} alt="image" width="100%" />
                </div>
                <div className="col-md-6">
                  <h3 className="card-title">
                    {val.stateInfo.src} To {val.stateInfo.dest}
                  </h3>
                  <p>Number Of Days:{val.stateInfo.days}</p>
                </div>
                <div className="col-md-3">
                  <button
                    className="btn-danger btn mt-3"
                    onClick={() => cancelBooking(val)}
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Mybooking;
