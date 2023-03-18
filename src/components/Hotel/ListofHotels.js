import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ImageModal from "../shared component/ImageModal";
import { useHistory } from "react-router";

function ListofHotels({ hot }) {
  let history = useHistory();
  const [lgShow, setLgShow] = useState(false);
  const showGallery = () => {
    setLgShow(true);
  };
  // To print star of hotel
  let star = [];
  for (let index = 0; index < hot.hotelstar; index++) {
    star.push(0);
  }
  // To redirect to hotel
  function directingToHotel() {
    history.push({
      pathname: `/viewhotel/${hot.hotelname}`,
      state: hot,
    });
  }
  return (
    <>
      <ImageModal setLgShow={setLgShow} lgShow={lgShow} hot={hot.image} />

      <div className="row g-0">
        <div className="col-md-3 imgcard" style={{ position: "relative" }}>
          <img
            src={hot.image[2]}
            className="img-fluid rounded-start w-100"
            alt=""
          />
          <div className="overlay">
            <button className="icon mybtn" onClick={showGallery}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/709/709592.png"
                width="25px"
              />
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title">{hot.hotelname}</h3>
            <p className="">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="location"
                width="25px"
              />
              {hot.location}
            </p>
            {star.map((val, ind) => {
              return (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/69/69495.png"
                  alt="star"
                  width="15px"
                  className="me-2"
                  key={ind}
                />
              );
            })}

            <p className="card-text">
              <small className="text-muted">Meals | Gym | WiFi | Pool</small>
            </p>
          </div>
        </div>

        <div className="col-md-3 mx-auto float-sm-end">
          <h5>₹ {hot.price}</h5>
          <button
            type="button"
            className="btn btn-info "
            onClick={directingToHotel}
          >
            Choose Room
          </button>
        </div>
      </div>
    </>
  );
}

export default ListofHotels;
