import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import Footer from "../shared component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../redux-store/hotelSlice";
import HotelCarousel from "../Hotel/HotelCarousel";
import ListofHotels from "../Hotel/ListofHotels";
import { useRef } from "react";
import Search from "../shared component/Search";

function Hotel() {
  let history = useHistory();
  let dispatch = useDispatch();
  let [result, setResult] = useState([]);
  let [val, setVal] = useState("");
  useEffect(() => {
    dispatch(getHotels());
  }, []);
  let { hotels } = useSelector((state) => state.hotel);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let res;
  let textInput = useRef(null);

  // Search
  let onHotelSubmit = (hotelObj) => {
    let temp = [];
    for (const key in hotels) {
      res = Search(hotels[key].location, hotelObj.destination);
      if (res === true) {
        temp.push(...[hotels[key]]);
        setVal("Found");
      } else {
        setVal("Not Found");
      }
      setResult([...temp]);
    }
    window.scrollTo(0, textInput.current.offsetTop);
  };

  // Sort by price
  const sortByPrice = (hotels) => {
    let newhotel = [...hotels];
    newhotel.sort(function (a, b) {
      return a.price - b.price;
    });
    setResult(newhotel);
  };

  return (
    <div>
      <HotelCarousel />

      {/* search bar */}
      <div className="container mt-3" ref={textInput}>
        <div className="card p-3 g-2 shadow">
          <form action="" onSubmit={handleSubmit(onHotelSubmit)}>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
              {/* destination */}
              <div className="form-floating col mt-2">
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="destination"
                  className="form-control rounded-pill"
                  {...register("destination", { required: true })}
                />
                {errors.destination?.type === "required" ? (
                  <label className="text text-danger">
                    Destination Required
                  </label>
                ) : (
                  <label className="ms-2">Destination</label>
                )}
              </div>

              {/* check in */}
              <div className="form-floating col mt-2">
                <input
                  type="date"
                  name="checkin"
                  id="checkin"
                  placeholder="CheckIn"
                  className="form-control rounded-pill"
                  {...register("checkIn", { required: true })}
                />
                {errors.checkIn?.type === "required" ? (
                  <label className="text text-danger">CheckIn Required</label>
                ) : (
                  <label className="ms-2">CheckIn</label>
                )}
              </div>

              {/* check out */}
              <div className="form-floating col mt-2">
                <input
                  type="date"
                  name="checkout"
                  id="checkout"
                  placeholder="CheckOut"
                  className="form-control rounded-pill"
                  {...register("checkOut", { required: true })}
                />
                {errors.checkOut?.type === "required" ? (
                  <label className="text text-danger">CheckOut Required</label>
                ) : (
                  <label className="ms-2">CheckOut</label>
                )}
              </div>

              {/* search */}
              <button className="btn btn-info p-2 col mt-2 glow-on-hover ps-sm-2 ps-md-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/49/49116.png"
                  alt="search"
                  width="25px"
                />
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* card part */}
      {result.length !== 0 || val === "Found" ? (
        <div className="container">
          <div className="d-flex justify-content-between">
            <h3 className="mt-3">Your Search Results..,</h3>
            <button
              className="btn btn-success float-end rounded-pill mt-2"
              onClick={() => sortByPrice(result)}
            >
              sort by price
            </button>
          </div>
          {result.map((hot, index) => {
            return (
              <div className="card mt-4">
                <ListofHotels hot={hot} />
              </div>
            );
          })}
        </div>
      ) : val === "Not Found" ? (
        <div>
          <h2 className="text-center mt-5 mb-5 text-danger">No Result found</h2>
        </div>
      ) : (
        <div className="container">
          <div className="d-flex justify-content-between">
            <h3 className="mt-3">Premium Hotels in India</h3>
            <button
              className="btn btn-success float-end rounded-pill mt-2"
              onClick={() => sortByPrice(hotels)}
            >
              sort by price
            </button>
          </div>
          {hotels.map((hot, index) => {
            return (
              <div className="card mt-4">
                <ListofHotels hot={hot} />
              </div>
            );
          })}
        </div>
      )}

      {/* Famous Hotels */}
      <div className="mt-3 mb-5 container-fluid">
        <h3>Cities</h3>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 mb-5">
          {/* card-1 GOA */}
          <div
            className="col mt-2"
            onClick={() => onHotelSubmit({ destination: "goa" })}
          >
            <div className="card shadow">
              <img
                src="https://images.pexels.com/photos/4428289/pexels-photo-4428289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="card-img-top w-100"
                alt="hotel image"
              />
              <h3 className="mt-1 mb-1 text-center">Goa</h3>
            </div>
          </div>
          {/* card-2 MUMBAI */}
          <div
            className="col mt-2 "
            onClick={() => onHotelSubmit({ destination: "mumbai" })}
          >
            <div className="card shadow">
              <img
                src="https://images.pexels.com/photos/5414587/pexels-photo-5414587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="card-img-top w-100"
                alt="hotel image"
              />
              <h3 className="mt-1 mb-1 text-center">Mumbai</h3>
            </div>
          </div>
          {/* card-3 BANGALORE*/}
          <div
            className="col mt-2"
            onClick={() => onHotelSubmit({ destination: "bangalore" })}
          >
            <div className="card shadow">
              <img
                src="https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="card-img-top w-100"
                alt="hotel image"
              />
              <h3 className="mt-1 mb-1 text-center">Bangalore</h3>
            </div>
          </div>
          {/* card-4 MANALI */}
          <div className="col mt-2">
            <div
              className="card shadow"
              onClick={() => onHotelSubmit({ destination: "manali" })}
            >
              <img
                src="https://images.pexels.com/photos/5205097/pexels-photo-5205097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="card-img-top w-100"
                alt="hotel image"
              />
              <h3 className="mt-1 mb-1 text-center">Manali</h3>
            </div>
          </div>
          {/* card-5 LEH */}
          <div className="col mt-2">
            <div
              className="card shadow w-100"
              onClick={() => onHotelSubmit({ destination: "leh" })}
            >
              <img
                src="https://images.pexels.com/photos/9106696/pexels-photo-9106696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className="card-img-top"
                alt="hotel image"
              />
              <h3 className="mt-1 mb-1 text-center">Ladakh</h3>
            </div>
          </div>
          {/* card-6 Kochin */}
          <div className="col mt-2">
            <div
              className="card shadow w-100"
              onClick={() => onHotelSubmit({ destination: "cochin" })}
            >
              <img
                src="https://images.pexels.com/photos/980180/pexels-photo-980180.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="card-img-top"
                alt="hotel image"
              />
              <h3 className="mt-1 mb-1 text-center">Cochin</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hotel;
