import { BrowserRouter, NavLink, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Main Components/Home";
import Hotel from "./components/Hotel/Hotel";
import Flight from "./components/Flight/Flight";
import Holidays from "./components/Holiday/Holidays";
import Login from "./components/Main Components/Login";
import Register from "./components/Main Components/Register";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearLoginStatus } from "./components/redux-store/userSlice";
import React, { useEffect, Suspense } from "react";

function App() {
  // lazy loading of components
  let UserRegister = React.lazy(() =>
    import("./components/Main Components/UserRegister")
  );
  let HotelOwnerRegister = React.lazy(() =>
    import("./components/Hotel/HotelOwnerRegister")
  );
  let ViewHotels = React.lazy(() => import("./components/Hotel/ViewHotels"));
  let HolidayDiscription = React.lazy(() =>
    import("./components/Holiday/HolidayDiscription")
  );
  let Admin = React.lazy(() => import("./components/Admin Dashboard/Admin"));
  let Ownerdashboard = React.lazy(() =>
    import("./components/Main Components/Ownerdashboard")
  );
  let Userdashboard = React.lazy(() =>
    import("./components/UserDashboard/Userdashboard")
  );
  let Cart = React.lazy(() => import("./components/cart/Cart"));
  let ChangeProfileInfo = React.lazy(() =>
    import("./components/UserDashboard/ChangeProfileInfo")
  );
  let Mybooking = React.lazy(() =>
    import("./components/UserDashboard/Mybooking")
  );
  let [token, setToken] = useState(null);

  let userDetails = JSON.parse(localStorage.getItem("userDetails"));

  let activeLinkStyles = {
    fontWeight: "bold",
    color: "red",
  };
  let { isSuccess, userObj } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  const onUserLogout = () => {
    // remove token frm Local Storage
    localStorage.clear();
    setToken(null);
    dispatch(clearLoginStatus());
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token, isSuccess]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <BrowserRouter>
      <Login show={show} handleClose={handleClose} />
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top p-2">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/home">
            <span className="BonVoyage ">BonVoyage</span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/45/45873.png"
              width="30px"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarSupportedContent"
            aria-controls="offcanvasRight"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* offcanvas */}
          <div
            className="offcanvas offcanvas-end offp"
            tabindex="-1"
            id="navbarSupportedContent"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-body">
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto menu">
                <button
                  className="btn-close text-reset d-lg-none"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
                <li className="nav-item me-2 ">
                  <NavLink
                    activeStyle={activeLinkStyles}
                    className="nav-link active"
                    to="/Home"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/609/609803.png"
                      alt="home-icon"
                      width="25px"
                    />
                    <span className="ms-1">Home</span>
                  </NavLink>
                </li>

                <li className="nav-item me-2 ">
                  <NavLink
                    activeStyle={activeLinkStyles}
                    className="nav-link active"
                    to="/Hotel"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1475/1475996.png"
                      alt="hotel-icon"
                      width="25px"
                    />
                    <span className="ms-1">Hotel</span>
                  </NavLink>
                </li>

                <li className="nav-item me-2 ">
                  <NavLink
                    activeStyle={activeLinkStyles}
                    className="nav-link active"
                    to="/Flight"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/984/984233.png"
                      alt="flight-icon"
                      width="25px"
                    />
                    <span className="ms-1">Flight</span>
                  </NavLink>
                </li>

                <li className="nav-item me-2 ">
                  <NavLink
                    activeStyle={activeLinkStyles}
                    className="nav-link active"
                    to="/Holidays"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4336/4336777.png"
                      alt="hotel-icon"
                      width="25px"
                    />
                    <span className="ms-1">Holidays</span>
                  </NavLink>
                </li>
                {token === null && !isSuccess ? (
                  <>
                    <li className="nav-item me-2 ">
                      <button
                        activeStyle={activeLinkStyles}
                        className="nav-link active border-0 bg-transparent"
                        onClick={handleShow}
                        data-bs-dismiss="offcanvas"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
                          alt="login-icon"
                          width="25px"
                        />
                        <span className="ms-1">Login</span>
                      </button>
                    </li>
                    <li className="nav-item me-2 ">
                      <NavLink
                        activeStyle={activeLinkStyles}
                        className="nav-link active"
                        to="/Register"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/4883/4883294.png"
                          alt="register-icon"
                          width="25px"
                        />
                        <span className="ms-1">Register</span>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    {userDetails && (
                      <li className="nav-item me-2 dropdown">
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          data-bs-toggle="dropdown"
                          role="button"
                          aria-expanded="false"
                        >
                          <img
                            src={userDetails.profileimage}
                            alt="profilepic"
                            width="25px"
                            className="rounded-pill"
                          />
                          {userDetails.username}
                        </a>
                        <ul className="dropdown-menu">
                          <li className="">
                            <Link
                              className="nav-link  dropdown-item"
                              to="/home"
                              onClick={onUserLogout}
                            >
                              Logout
                            </Link>
                          </li>

                          {userDetails.type === "Admin" ? (
                            <li>
                              <Link
                                className="nav-link  dropdown-item"
                                to={`/Admin/${userDetails.username}`}
                              >
                                Admindashboard
                              </Link>
                            </li>
                          ) : userDetails.type === "User" ? (
                            <li>
                              <Link
                                className="nav-link  dropdown-item"
                                to={`/userdashboard/${userDetails.username}`}
                              >
                                UserDashboard
                              </Link>
                            </li>
                          ) : (
                            <li>
                              <Link
                                className="nav-link  dropdown-item"
                                to={`/Ownerdashboard/${userDetails.username}`}
                              >
                                hotelownerDashboard
                              </Link>
                            </li>
                          )}
                        </ul>
                      </li>
                    )}
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Suspense
        fallback={
          <div class="d-flex justify-content-center align-content-center">
            <div
              className="spinner-border text-dark mx-auto my-auto"
              role="status"
            >
              {" "}
              <span className="visually-hidden">Loading...</span>{" "}
            </div>
          </div>
        }
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Hotel">
            <Hotel />
          </Route>
          <Route path="/Flight">
            <Flight />
          </Route>
          <Route path="/Holidays">
            <Holidays />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/Admin/:name">
            <Admin />
          </Route>
          <Route path="/Ownerdashboard/:name">
            <Ownerdashboard />
          </Route>
          <Route path="/Viewhotel/:name">
            <ViewHotels />
          </Route>
          <Route path="/cart/:name">
            <Cart />
          </Route>
          <Route path="/userregister">
            <UserRegister />
          </Route>
          <Route path="/hotelownerregister">
            <HotelOwnerRegister />
          </Route>
          <Route path="/holidaydiscription/:name">
            <HolidayDiscription />
          </Route>
          <Route path="/userdashboard/:name">
            <Userdashboard />
          </Route>
          <Route path="/ChangeProfileInfo">
            <ChangeProfileInfo />
          </Route>
          <Route path="/mybooking">
            <Mybooking />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
