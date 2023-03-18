import React, { useState } from "react";

import { useHistory } from "react-router";
import DestinationIcon from "../Img/destination.png";

const Register = () => {
  let history = useHistory();

  return (
    <div className="background container-fluid bg-opacity-25 ">
      <div className="row ">
        <div className="col-11 col-sm-8 col-md-6 col-lg-5 shadow-lg mt-3 mx-auto register scale-up-center card">
          <h3 className="text-center">Welcome To Explore The World</h3>
          <p className="text-center">
            To keep Connected with us, Please Sign Up with your Info..!
          </p>
          <h3 className="text-center">Please Select The Category</h3>
          {/* category */}
          <button
            className="btn btn-primary w-50 mx-auto d-block rounded-pill mt-3 glow-on-hover"
            onClick={() => history.push("/userregister")}
          >
            User
          </button>
          <button
            className=" btn btn-danger w-50 mx-auto d-block mt-3 rounded-pill glow-on-hover"
            onClick={() => history.push("/hotelownerregister")}
          >
            Hotel-Owner
          </button>
          <div className="mt-3">
            <img
              src={DestinationIcon}
              width="90px"
              className="mx-auto d-block"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
