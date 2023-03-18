import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFlights } from "../redux-store/flightSlice";
import Loader from "../shared component/Loader";

const FlightForm = () => {
  let dispatch = useDispatch();
  let { isLoading } = useSelector((state) => state.flight);
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let [file, setFile] = useState(null);
  const onFileSelect = (e) => {
    setFile(e.target.files[0]);
  };
  const formSubmitInFlight = async (flightObj) => {
    //create formData obj
    let formData = new FormData();
    //append image to it
    formData.append("flogo", file, file.name);
    //append FlightObj
    formData.append("flightObj", JSON.stringify(flightObj));

    dispatch(addFlights(formData));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(formSubmitInFlight)}>
      <div class="form-floating mb-3 mt-4">
        <input
          type="text"
          class="form-control"
          id="fname"
          placeholder="name"
          {...register("fname", { required: true })}
        />
        {errors.fname?.type === "required" ? (
          <label className="text text-danger">Flight Name is Required</label>
        ) : (
          <label for="fname">Flight Name</label>
        )}
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="fnumber"
          placeholder="number"
          {...register("fnumber", { required: true })}
        />
        {errors.number?.type === "required" ? (
          <label className="text text-danger">Flight number is Required</label>
        ) : (
          <label for="fnumber">Flight Number</label>
        )}
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="source"
          placeholder="source"
          {...register("source", { required: true })}
        />
        {errors.source?.type === "required" ? (
          <label className="text text-danger">Source is Required</label>
        ) : (
          <label for="source">Source</label>
        )}
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="des"
          placeholder="destination"
          {...register("des", { required: true })}
        />
        <label for="des">Destination</label>
      </div>
      {errors.des?.type === "required" && (
        <p className="text text-danger">Destination is Required</p>
      )}

      {errors.class?.type === "required" && (
        <p className="text text-danger">Class type is Required</p>
      )}

      {/* class type */}
      <div class="form-check-inline mb-3">
        <input
          {...register("class", { required: true })}
          type="radio"
          value="Economy"
          id="Economy"
          className="form-check-input"
        />
        <label class="form-check-label" for="Economy">
          Economy
        </label>
      </div>
      <div class="form-check-inline mb-3">
        <input
          {...register("class", { required: true })}
          type="radio"
          value="Business"
          id="Business"
          className="form-check-input"
        />
        <label class="form-check-label" for="Business">
          Business
        </label>
      </div>
      {errors.class?.type === "required" && (
        <p className="text text-danger">Class type is Required</p>
      )}
      {/* travel type */}
      <div class="form-check-inline mb-3">
        <input
          {...register("travel", { required: true })}
          type="radio"
          value="Domestic"
          id="domestic"
          className="form-check-input"
        />
        <label class="form-check-label" for="domestic">
          Domestic
        </label>
      </div>
      <div class="form-check-inline mb-3">
        <input
          {...register("travel", { required: true })}
          type="radio"
          value="International"
          id="int"
          className="form-check-input"
        />
        <label class="form-check-label" for="int">
          International
        </label>
      </div>

      {errors.travel?.type === "required" && (
        <p className="text text-danger">Travel type is Required</p>
      )}

      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="price"
          placeholder="price"
          {...register("price", { required: true })}
        />
        <label for="price">Price</label>
      </div>
      {errors.price?.type === "required" && (
        <p className="text text-danger">Price is Required</p>
      )}

      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="duration"
          placeholder="duration"
          {...register("duration", { required: true })}
        />
        <label for="duration">Duration</label>
      </div>
      {errors.duration?.type === "required" && (
        <p className="text text-danger">Duration is Required</p>
      )}

      {/* flightLogo */}
      <div className="form-floating mb-3">
        <input
          type="file"
          className="form-control"
          id="flogo"
          name="flogo"
          onChange={onFileSelect}
          accept="image/*"
        />
      </div>
      {isLoading && <Loader />}
      <button className="btn btn-success rounded-pill mb-3">Add flight</button>
    </form>
  );
};

export default FlightForm;
