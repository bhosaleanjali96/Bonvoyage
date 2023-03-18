import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "../redux-store/flightSlice";
import Footer from "../shared component/Footer";
import ListofFlights from "../Flight/ListofFlights";
import { useRef } from "react";
import { SearchforLocation } from "../shared component/Search";

function Flight() {
  let history = useHistory();
  let dispatch = useDispatch();
  let [result, setResult] = useState([]);
  let [val, setVal] = useState("");
  useEffect(() => {
    dispatch(getFlights());
  }, []);
  let { flights } = useSelector((state) => state.flight);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let res;
  let textInput = useRef(null);
  // sorting
  let sortByPrice = (flights) => {
    let newFlight = [...flights];
    newFlight.sort(function (a, b) {
      return a.price - b.price;
    });

    setResult(newFlight);
  };
  // Search
  let onFlightSubmit = (flightObj) => {
    let temp = [];
    for (const key in flights) {
      res = SearchforLocation(
        flights[key].source,
        flights[key].des,
        flightObj.floatingSource,
        flightObj.floatingDest
      );
      if (res === true) {
        temp.push(...[flights[key]]);
        setVal("Found");
      } else {
        setVal("Not Found");
      }
      setResult([...temp]);
    }

    window.scrollTo(0, textInput.current.offsetTop);
  };
  return (
    <div>
      <div className="container mt-4">
        <div className="card p-3 g-2 shadow">
          <form action="" onSubmit={handleSubmit(onFlightSubmit)}>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
              <div className="col">
                <select
                  name="flightType"
                  id="flightType"
                  className="form-select drpdown"
                  {...register("flightType", { required: true })}
                >
                  <option value="Domestic">Domestic</option>
                  <option value="International">International</option>
                </select>
              </div>
              <div className="col">
                <select
                  name="noOfmembers"
                  id="noOfmembers"
                  className="form-select drpdown"
                  {...register("noOfmembers", { required: true })}
                >
                  <option value="1">1 traveller</option>
                  <option value="2">2 travellers</option>
                  <option value="3">3 travellers</option>
                  <option value="4">4 travellers</option>
                  <option value="5">5 travellers</option>
                  <option value="6">6 travellers</option>
                  <option value="7">7 travellers</option>
                </select>
              </div>
              <div className="col">
                <select
                  name="classType"
                  id="classType"
                  class="form-select drpdown"
                  {...register("classType", { required: true })}
                >
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                </select>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 mb-4 my-auto">
              <div className="col mt-4">
                <div class="form-floating">
                  <select
                    class="form-select fw-bold"
                    id="floatingSource"
                    style={{ fontSize: "18px" }}
                    aria-label="Floating label select example"
                    {...register("floatingSource", { required: true })}
                  >
                    <option selected>Select City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                  </select>
                  <label for="floatingSource">Depart From</label>
                </div>
              </div>
              {errors.floatingSource?.type === "required" && (
                <p className="alert alert-danger">Source required</p>
              )}

              <div className="col mt-4">
                <div class="form-floating ">
                  <select
                    class="form-select fw-bold "
                    id="floatingDest"
                    style={{ fontSize: "18px" }}
                    aria-label="Floating label select example"
                    {...register("floatingDest", { required: true })}
                  >
                    <option selected>Select City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Leh">Leh</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Goa">Goa</option>
                  </select>
                  <label for="floatingDest">Going To</label>
                </div>
              </div>
              {errors.floatingDest?.type === "required" && (
                <p className="alert alert-danger">Destination required</p>
              )}

              <div className="col mt-4">
                <div className="form-floating">
                  <input
                    type="date"
                    className="form-control"
                    id="depatureDate"
                    placeholder="01/01/2000"
                    {...register("depatureDate", { required: true })}
                  />
                  <label for="depatureDate">Departure Date</label>
                </div>
              </div>
              {errors.depatureDate?.type === "required" && (
                <p className="alert alert-danger">
                  Date of Departure is required
                </p>
              )}

              <div className="col mt-4">
                <button className="btn btn-info glow-on-hover ">
                  Search Flights
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* card part */}
      {result.length !== 0 || val === "Found" ? (
        <div className="container">
          <h3 className="mt-3">Your Search Results..,</h3>
          <div className="row">
            <div className="col-sm-12 col-md-9">
              {result.map((fli, index) => {
                return (
                  <div className="card mt-4">
                    <ListofFlights fli={fli} />
                  </div>
                );
              })}
            </div>
            <div className="col-sm-12 col-md-3">
              <button
                className="btn btn-success rounded-pill"
                onClick={() => sortByPrice(result)}
              >
                sort by price
              </button>
              <div className="mt-5">
                <img
                  src="https://www.ecdc.europa.eu/sites/default/files/styles/is_large/public/images/EASA-ECDC-Posters-%20Blue-portrait-airport-arrival.png?itok=MzHljfJV"
                  alt="banner"
                  className="w-100 pt-4"
                />
              </div>
            </div>
          </div>
        </div>
      ) : val === "Not Found" ? (
        <div>
          <h2 className="text-center mt-5 mb-5 text-danger ">
            No Result found
          </h2>
        </div>
      ) : (
        <div className="container">
          <h3 className="mt-3">Flight Booking</h3>
          <div className="row">
            <div className="col-sm-12 col-md-9">
              {flights.map((fli, index) => {
                return (
                  <div className="card mt-4">
                    <ListofFlights fli={fli} />
                  </div>
                );
              })}
            </div>
            <div className="col-sm-12 col-md-3">
              <button
                className="btn btn-success rounded-pill"
                onClick={() => sortByPrice(flights)}
              >
                sort by price
              </button>
              <div className="mt-5 pt-4">
                <img
                  src="https://www.ecdc.europa.eu/sites/default/files/styles/is_large/public/images/EASA-ECDC-Posters-%20Blue-portrait-airport-arrival.png?itok=MzHljfJV"
                  alt="banner1"
                  className="w-100 "
                />
              </div>
              <div className="mt-5 pt-4">
                <img
                  src="https://previews.123rf.com/images/mikalaimanyshau/mikalaimanyshau1703/mikalaimanyshau170300142/74108108-travel-to-world-road-trip-tourism-open-book-with-landmarks-travelling-vector-vertical-banner-the-wor.jpg"
                  className="w-100 "
                  alt="banner2"
                  className="w-100 "
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Flight;
