import React from "react";

const ViewHotelcarousel = ({ Images, star }) => {
  console.log("images", Images);

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
                src={Images[0]}
                class="d-block w-100 "
                style={{ maxHeight: "500px" }}
                alt="hotelimage"
              />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img
                src={Images[1]}
                class="d-block w-100"
                style={{ maxHeight: "500px" }}
                alt="hotelimage"
              />
            </div>
            <div class="carousel-item " data-bs-interval="5000">
              <img
                src={Images[2]}
                class="d-block w-100"
                alt="hotelimage"
                style={{ maxHeight: "500px" }}
              />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img
                src={Images[3]}
                class="d-block w-100"
                alt="hotelimage"
                style={{ maxHeight: "500px" }}
              />
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img
                src={Images[4]}
                class="d-block w-100"
                alt="hotelimage"
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
        <h3 className="text-primary">Excellent</h3>
        <h3>{star}/5 Ratings</h3>
        <hr />
        <ul>
          <li>Impressive Service:4.5/5</li>
          <li>Impressive Cleanliness :4.3/5</li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default ViewHotelcarousel;
