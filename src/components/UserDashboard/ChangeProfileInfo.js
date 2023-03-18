import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { editProfile } from "../redux-store/userSlice";
import Loader from "../shared component/Loader";

function UserRegister() {
  let dispatch = useDispatch();
  let { userObj, isLoading } = useSelector((state) => state.user);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: userObj,
  });
  let history = useHistory();

  // full form submission
  const onFormSubmit = async (newuserObj) => {
    dispatch(editProfile({ EditID: newuserObj._id, formData: newuserObj }));
    history.push(`/userdashboard/${newuserObj.name}`);
  };

  return (
    <div className="row mt-3 container-fluid">
      {/*change profile info*/}
      <div className="row mt-3 container-fluid ">
        <form
          className="col-11 col-sm-8 col-md-6 col-lg-5 shadow mx-auto scale-up-center"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <h4 className="text-center">Change Profile Info</h4>

          {/* email id */}
          <div className="form-floating mb-4">
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="email"
              {...register("email", { required: true })}
            />
            <label htmlFor="email">Email*</label>
          </div>
          {errors.email?.type === "required" && (
            <p className="alert alert-danger ">*Email is Required</p>
          )}

          {/* email id */}
          <div className="form-floating mb-4">
            <input
              type="text"
              name="address"
              id="address"
              className="form-control"
              placeholder="Address"
              {...register("address", { required: true })}
            />
            <label htmlFor="address">Address*</label>
          </div>
          {errors.Address?.type === "required" && (
            <p className="alert alert-danger ">*Address is Required</p>
          )}
          {/* Mobile Number */}
          <div className="form-floating mb-4">
            <input
              type="number"
              name="mobilenumber"
              id="mobilenumber"
              className="form-control"
              placeholder="mobilenumber"
              {...register("mobilenumber", { required: true })}
            />
            <label htmlFor="mobilenumber">MobileNumber*</label>
          </div>
          {errors.mobilenumber?.type === "required" && (
            <p className="alert alert-danger ">*MobileNumber is Required</p>
          )}
          {isLoading && <Loader />}
          {/* Submit */}
          <button className="btn w-50 d-block mx-auto mb-4 mt-3 rounded-pill glow-on-hover">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
