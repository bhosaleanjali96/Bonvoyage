import React, { useState } from "react";

import ImageModal from "../shared component/ImageModal";
import { useHistory } from "react-router";

function ListOfHolidays({ holiday }) {
  let history = useHistory();

  const [lgShow, setLgShow] = useState(false);
  const showGallery = () => {
    setLgShow(true);
  };

  // To redirect to holiday
  function directToPackageDiscription() {
    history.push({
      pathname: `/HolidayDiscription/${holiday.dest}`,
      state: holiday,
    });
  }

  let star = [];
  for (let index = 0; index < holiday.rating; index++) {
    star.push(0);
  }
  return (
    <>
      <ImageModal setLgShow={setLgShow} lgShow={lgShow} hot={holiday.image} />

      <div className="row g-0">
        <div className="col-md-3 imgcard" style={{ position: "relative" }}>
          <img
            src={holiday.image[0]}
            className="img-fluid rounded-start"
            alt=""
          />
          <div className="overlay">
            <button className="icon mybutton" onClick={showGallery}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/709/709592.png"
                width="25px"
              />
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title">
              {holiday.src} To {holiday.dest}
            </h3>
            <p className="card-text">
              <p>Number of days-{holiday.days}</p>

              <p className="mt-0">Seller-BonVoyage.com</p>

              {star.map((val, ind) => {
                return (
                  <img
                    src="https://as2.ftcdn.net/v2/jpg/01/48/42/25/500_F_148422552_NwhJoE8oMirgplSEgZnWOLHCDPcJ0tKD.jpg"
                    alt="star"
                    width="25px"
                    className="me-2"
                    key={ind}
                  />
                );
              })}
              <p>
                {holiday.description.substring(0, 100)}
                <a href="" onClick={directToPackageDiscription}>
                  read more...
                </a>
              </p>
            </p>
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
        </div>

        <div className="col-md-3 mx-auto mt-3">
          <h5>₹{holiday.price}</h5>
          <small className="text-muted">Per Person on twin sharing</small>
          <button
            type="button"
            class="btn btn-info"
            onClick={directToPackageDiscription}
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
}

export default ListOfHolidays;
