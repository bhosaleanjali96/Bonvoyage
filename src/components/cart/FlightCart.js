import React from "react";

const FlightCart = ({ state }) => {
  return (
    <div>
      <div className="card mt-3 shadow">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className="row">
              <div className="col-2 ">
                <img
                  src={state.image}
                  className="img-fluid rounded-start ms-2"
                  width="50px"
                  alt="logo"
                />
              </div>
              <div className="col-10">
                <div className="row">
                  <p className="card-text">
                    {state.fname}{" "}
                    <span className="text-muted">({state.class})</span>{" "}
                  </p>
                </div>
                <div className="row">
                  <p className="card-text">{state.fnumber}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7"></div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-12">
            <div className="row mb-3">
              <div className=" col-sm-12 col-md-5">
                <h3 className="card-text text-center">
                  {state.source}
                  <span>
                    <i className="fas fa-plane-departure ms-3"></i>
                  </span>
                </h3>
              </div>
              <div className="col-sm-12 col-md-2 ">
                {/* duration */}
                <p className="card-text text-center">
                  <i className="far fa-clock"></i>
                  <span className="text-muted"> {state.duration}hr</span>
                </p>
              </div>
              <div className="col-sm-12 col-md-5">
                <h3 className="card-text text-center">
                  <i className="fas fa-plane-arrival me-3"></i>
                  {state.des}
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
        </div>

        <div className="row mt-3">
          <div className="col-md-10 offset-md-1">
            <h6 className="fw-bold">
              <i class="fas fa-exclamation-circle text-warning"></i>Compulsory
              Guidelines for Passengers
            </h6>
            <ul className="safeinstructions">
              <li>
                You need to certify your health status through Aarogya Setu app
                preactivated on your mobile or self-declaration form.
              </li>
              <li>Face Mask is mandatory both at the airport & in flight.</li>
              <li>
                Failure to comply with Covid-19 protocols and the directions of
                ground staff and/or crew may attract penal action against the
                concerned individual.
              </li>
              <li>
                Only passengers with confirmed web check-in will be allowed to
                enter 2 hours prior to the flight departure.
              </li>
              <li>
                Only one check-in bag and cabin bag will be allowed per customer
                with a baggage tag affixed on the bag.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCart;
