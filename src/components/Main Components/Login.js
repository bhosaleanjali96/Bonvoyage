import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { clearLoginStatus, userLogin } from "../redux-store/userSlice";
import bcryptjs from "bcryptjs";

const Login = ({ show, handleClose }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let dispatch = useDispatch(clearLoginStatus);
  let history = useHistory();
  let { userObj, isSuccess, invalidLoginMessage } = useSelector(
    (state) => state.user
  );
  let [userCredentialsObj, setUserCredentialsObj] = useState({
    type: "",
    username: "",
    password: "",
  });

  // ON Form Submit Function
  let onFormSubmit = async (loginObj) => {
    let hashedPassword = await bcryptjs.hash(loginObj.password, 6);
    // loginObj.password = hashedPassword;
    setUserCredentialsObj({ ...loginObj });
    dispatch(userLogin(loginObj));
    reset();
  };

  // useEffect
  useEffect(() => {
    if (isSuccess && userCredentialsObj.type === "User") {
      handleClose();
      //navigate  to userdashboard
      // history.push(`/home/${userCredentialsObj.name}`);
    }
    if (isSuccess && userCredentialsObj.type === "HotelOwner") {
      handleClose();
      //navigate  to userdashboard
      history.push(`/Ownerdashboard/${userCredentialsObj.name}`);
    }
    if (isSuccess && userCredentialsObj.type === "Admin") {
      handleClose();
      history.push(`/Admin/${userCredentialsObj.name}`);
    }
  }, [isSuccess]);

  // Function to redirect Register page
  function directingToRegister() {
    history.push("/register");
    handleClose();
  }
  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header className="d-flex justify-content-between">
        <Modal.Title>Login Form</Modal.Title>
        <button className="btn-close" onClick={handleClose}></button>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-danger text-center">{invalidLoginMessage}</h4>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          {/* category */}
          <select
            name="type"
            id="type"
            className="form-select mb-4"
            {...register("type", { required: true })}
          >
            <option disabled>--Select One--</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="HotelOwner">HotelOwner</option>
          </select>

          {/* Name */}
          <div className="form-floating mb-4">
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="name"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" ? (
              <label className="text text-danger ">*Name is Required</label>
            ) : (
              <label htmlFor="name">Name*</label>
            )}
          </div>

          {/* password */}
          <div className="form-floating mb-4">
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="password"
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" ? (
              <label className="text text-danger ">*Password is Required</label>
            ) : (
              <label htmlFor="password">Password*</label>
            )}
          </div>

          {/* Submit */}
          <button className="btn w-50 d-block mx-auto mb-4 mt-3 rounded-pill glow-on-hover">
            Login
          </button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <p className="text-start">If you are New User--</p>
        <Button
          variant="primary"
          onClick={directingToRegister}
          type="submit"
          type="reset"
        >
          Sign Up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
