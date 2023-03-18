import React from "react";
import Footer from "../shared component/Footer";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ListOfHolidays from "../Holiday/ListOfHolidays";
import { getHoliday } from "../redux-store/holidaySlice";
import { useRef } from "react";
import { SearchforLocation } from "../shared component/Search";

function Holidays() {
  let history = useHistory();
  let dispatch = useDispatch();
  let [result, setResult] = useState([]);
  let [val, setVal] = useState("");
  useEffect(() => {
    dispatch(getHoliday());
  }, [result]);
  let { holidaypackage } = useSelector((state) => state.holiday);

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let res;
  let textInput = useRef(null);

  // Search
  let onHolidaySubmit = (holidayObj) => {
    let temp = [];
    for (const key in holidaypackage) {
      res = SearchforLocation(
        holidaypackage[key].src,
        holidaypackage[key].dest,
        holidayObj.floatingSource,
        holidayObj.Dest
      );
      if (res === true) {
        temp.push(...[holidaypackage[key]]);
        setVal("Found");
      } else {
        setVal("Not Found");
      }
      setResult([...temp]);
    }
  };
  // sorting
  let sortByPrice = (holidays) => {
    let newHoliday = [...holidays];
    newHoliday.sort(function (a, b) {
      return a.price - b.price;
    });

    setResult(newHoliday);
  };

  return (
    <div>
      {/* crausol*/}

      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.pexels.com/photos/7086906/pexels-photo-7086906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              class="w-100"
              style={{ maxHeight: "500px" }}
              alt=" "
            />
            <div class="carousel-caption d-none d-md-block">
              <h3>Blissful Manali</h3>
              <p>Ready to take family trip to Manali</p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/1266831/pexels-photo-1266831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              class="w-100"
              style={{ maxHeight: "500px" }}
              alt=""
            />
            <div class="carousel-caption d-none d-md-block">
              <h3>Magical Maldives</h3>
              <p>Magical Maldives -Summer Special</p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/4491951/pexels-photo-4491951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              class="w-100"
              style={{ maxHeight: "500px" }}
              alt=""
            />
            <div class="carousel-caption d-none d-md-block">
              <h3>Dubai</h3>
              <p>Luxurious Dubai With Burj Khalifa</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* Offer imges*/}
      <div className="container mt-2">
        <div class="">
          <div className="row g-0 ">
            <div className="col-md-6 mt-2">
              <img
                src="https://www.yatra.com/ythomepagecms/media/todayspick_home/2021/Jul/8ee5b16ed7bcb517337639c1e4348792.jpg"
                alt="banner"
                width="100%"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
            </div>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-primary" id="exampleModalLabel">
                      Bonvoyage Offer With Banks Credit Cards
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <h5>For EMI Tranactions</h5>
                    Get the Best deals on Flights, Domestic Hotels and Domestic
                    Holidays with Bank Credit Cards on EMI Transactions. Flat
                    10% OFF (max. Rs.1,000) on domestic flights and Flat 10% OFF
                    (max. Rs.5,000) on international flights , Save up to 45%
                    (max. Rs.5,000) on domestic hotels and Flat 25% OFF (max.
                    Rs.25,000) on domestic holidays . Use promo code HDFCEMI to
                    avail this offer. This offer is valid between July 9 -
                    September 30, 2021. Hurry! Book now.
                    <p>Offer validity - July 9 - September 30, 2021.</p>
                    <p>@ Terms and Condition Apply</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-info"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-2">
              <img
                src="https://www.yatra.com/ythomepagecms/media/todayspick/2020/Feb/b52102ffb04588807dfc276c62995bfe.jpg"
                alt="banner"
                width="100%"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
            </div>
          </div>
        </div>
        <p className="text-muted">*Click on images to know more</p>
      </div>

      {/* search form */}
      <div className="container mt-4 mx-auto " ref={textInput}>
        <div className="card p-3 mx-auto w-75 shadow-lg">
          <h5 className="">Book Domestic and International Holidays</h5>
          <form action="" onSubmit={handleSubmit(onHolidaySubmit)}>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 mb-4 mx-auto">
              <div className="col mt-2">
                <div class="form-floating">
                  <select
                    class="form-select fw-bold rounded-pill"
                    id="floatingSource"
                    style={{ fontSize: "18px" }}
                    aria-label="Floating label select example"
                    {...register("floatingSource", { required: true })}
                  >
                    <option selected>Select City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bengaluru">Bengaluru</option>
                  </select>
                  <label for="floatingSource">Depart From</label>
                </div>
              </div>
              {errors.floatingSource?.type === "required" && (
                <p className="alert alert-danger">Source required</p>
              )}

              <div className="col mt-2">
                <div class="form-floating ">
                  <select
                    class="form-select fw-bold rounded-pill"
                    id="Dest"
                    name="Dest"
                    style={{ fontSize: "18px" }}
                    aria-label="Floating label select example"
                    {...register("Dest", { required: true })}
                  >
                    <option selected>Select City</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Paris">Paris</option>
                    <option value="Kerala">Kerala</option>
                  </select>
                  <label for="floatingDest">Going To</label>
                </div>
              </div>
              {errors.floatingDest?.type === "required" && (
                <p className="alert alert-danger">Destination required</p>
              )}

              <div className="col mt-2">
                <button className="btn btn-info rounded-pill">
                  Search Packages
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {result.length !== 0 || val === "Found" ? (
        <div className="container">
          <div className="d-flex justify-content-between">
            <h3 className="mt-3 text-danger">
              Showing Packages By Destination
            </h3>
            <button
              className="btn btn-success float-end mt-3 rounded-pill"
              onClick={() => sortByPrice(result)}
            >
              sort by price
            </button>
          </div>
          {result.map((holiday, index) => {
            return (
              <div className="card mt-4">
                <ListOfHolidays holiday={holiday} />
              </div>
            );
          })}
        </div>
      ) : val === "Not Found" ? (
        <div>
          <h2 className="text-center mt-5 mb-5 text-danger ">
            No Package Available..."You can select from Our Bestselling
            Packages"
          </h2>
        </div>
      ) : (
        <div className="container">
          <div className="d-flex justify-content-between">
            <h3 className="mt-3">BestSelling Holiday Packages:</h3>
            <button
              className="btn btn-success float-end mt-3 rounded-pill"
              onClick={() => sortByPrice(holidaypackage)}
            >
              sort by price
            </button>
          </div>
          {holidaypackage.map((holiday, index) => {
            return (
              <div className="card mt-4">
                <ListOfHolidays holiday={holiday} />
              </div>
            );
          })}
        </div>
      )}

      {/* corona*/}
      <div className="container mt-3 ">
        <h3>Our Commitment to Safe Holidays</h3>
        <div className="card mt-3" style={{ maxwidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src="https://img.traveltriangle.com/experiment/assests/Covid-safe-packages-illustrations1.png?tr=w-238,h-120"
                className="img-fluid rounded-start"
                alt=""
              />
              <h5 className="safeinstructions">
                Availability of Protection Gear
              </h5>
              <p className="coronainstructions">
                Ensuring availability of sanitizers, masks and gloves during
                commute and at hotels
              </p>
            </div>
            <div className="col-md-3">
              <img
                src="https://img.traveltriangle.com/experiment/assests/Covid-safe-packages-illustrations2.png?tr=w-238,h-120"
                className="img-fluid rounded-start"
                alt=""
              />
              <h5 className="safeinstructions">Sanitized Premises</h5>
              <p className="coronainstructions">
                Thoroughly sanitized commute Vehicles, Hotel rooms and premises
              </p>
            </div>

            <div className="col-md-3 ">
              <img
                src="https://img.traveltriangle.com/experiment/assests/Covid-safe-packages-illustrations3.png?tr=w-238,h-120"
                className="img-fluid rounded-start"
                alt=""
              />
              <h5 className="safeinstructions">Social Distancing Measures</h5>
              <p className="coronainstructions">
                Maintaining social distancing measures at hotel premises like
                restaurants, bars, lobby areas, etc
              </p>
            </div>

            <div className="col-md-3 ">
              <img
                src="https://img.traveltriangle.com/experiment/assests/Covid-safe-packages-illustrations4.png?tr=w-238,h-120"
                className="img-fluid rounded-start"
                alt=""
              />
              <h5 className="safeinstructions">Regular Temperature Checks</h5>
              <p className="coronainstructions">
                Regular screening of Hotel Staff, Guests, Drivers and Guides
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Holidays;
