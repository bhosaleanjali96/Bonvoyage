import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
//import Popup from "reactjs-popup";
import { editProfileimg } from "../redux-store/userSlice";
import ChangeProfileInfo from "../UserDashboard/ChangeProfileInfo";
import { getCart } from "../redux-store/cartSlice";

function Userdashboard() {
  let errors = errors;
  let [callback, setcallback] = useState(false);
  let history = useHistory();
  let dispatch = useDispatch();
  let username = localStorage.getItem("username");
  let profileimage = localStorage.getItem("profile");
  let { userObj } = useSelector((state) => state.user);

  // To redirect to home
  function RedirectToHome() {
    history.push({
      pathname: "/Home",
    });
  }

  // To redirect to cart
  function myBookings() {
    history.push(`/mybooking`);
  }

  // To redirect to ChangeProfileInfo
  function RedirectToChangeProfileInfo() {
    history.push({
      pathname: "/ChangeProfileInfo",
    });
  }

  //for callback
  function Callback() {
    setcallback(true);
  }

  let [file, setFile] = useState(null);

  const onProfilePicSelect = async (e) => {
    setFile(e.target.files[0]);
    let formData = new FormData();
    formData.append("profileimage", e.target.files[0], e.target.files[0].name);

    dispatch(editProfileimg({ imgID: userObj._id, formData: formData }));
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-4">
          <div class="list-group">
            <button
              type="button"
              class="list-group-item list-group-item-action active"
              aria-current="true"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/667/667429.png"
                alt=""
                width="25px"
              />
              My Profile
            </button>
            <button
              onClick={RedirectToHome}
              type="button"
              class="list-group-item list-group-item-action"
            >
              Home
            </button>
            <button
              onClick={myBookings}
              type="button"
              class="list-group-item list-group-item-action"
            >
              My Bookings
            </button>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              type="button"
              class="list-group-item list-group-item-action"
              onClick={() => setcallback(false)}
            >
              Request a Callback
            </button>

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
                    <h5 class="modal-title" id="exampleModalLabel">
                      Request a Callback
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body mx-auto">
                    {callback ? (
                      <div className="thankyouimg">
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/5579/5579256.png"
                          alt=""
                          width="50px"
                        />

                        <h4>We will reach you soon!!!</h4>
                      </div>
                    ) : (
                      <div class="input-group mb-3">
                        <input
                          id="callback"
                          type="number"
                          class="form-control"
                          placeholder="*Your Mobile Number"
                          required
                        />
                        <button
                          class="btn btn-primary"
                          type="button"
                          onClick={Callback}
                        >
                          Confirm
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={RedirectToChangeProfileInfo}
              type="button"
              class="list-group-item list-group-item-action"
            >
              Change Profile Info
            </button>
          </div>
        </div>
        <div className="col-md-8">
          <div class="card p-3 mx-auto w-100 shadow-lg">
            <img
              src={userObj.profileimage}
              alt="profilepic"
              width="80px"
              className="rounded-pill mx-auto"
            />
            {/*profile pic update */}
            <label
              for="fileInput"
              className="mx-auto "
              style={{ marginTop: "-10px" }}
            >
              <i className="fas fa-camera text-primary"></i>
            </label>
            <input id="fileInput" type="file" onChange={onProfilePicSelect} />
            <div className="mx-auto">
              <span className="text-primary">Name:</span>
              {userObj.name}
            </div>
            <div className="mx-auto">
              <span className="text-primary">Email:</span>
              {userObj.email}
            </div>
            <div className="mx-auto">
              <span className="text-primary">Address:</span>
              {userObj.address}
            </div>
            <div className="mx-auto">
              <span className="text-primary">Mobile No.</span>
              {userObj.mobilenumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userdashboard;
