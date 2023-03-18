import React from "react";

const HotelCarousel = () => {
  return (
    <div>
      {/* carousel */}
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
            <img
              src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              class="d-block w-100"
              style={{ maxHeight: "500px" }}
              alt="hotelimage"
            />
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img
              src="https://images.pexels.com/photos/9400832/pexels-photo-9400832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              class="d-block w-100"
              style={{ maxHeight: "500px" }}
              alt="hotelimage"
            />
          </div>
          <div class="carousel-item" data-bs-interval="5000">
            <img
              src="https://images.pexels.com/photos/4025955/pexels-photo-4025955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              class="d-block w-100"
              style={{ maxHeight: "500px" }}
              alt="hotelimage"
            />
          </div>

          <div class="carousel-item" data-bs-interval="5000">
            <img
              src="https://images.pexels.com/photos/3680912/pexels-photo-3680912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
  );
};

export default HotelCarousel;
