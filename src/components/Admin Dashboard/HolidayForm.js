import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHoliday } from "../redux-store/holidaySlice";
import Loader from "../shared component/Loader";

const HolidayForm = () => {
  let dispatch = useDispatch();
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let { isLoading } = useSelector((state) => state.holiday);
  let [file, setFile] = useState(null);

  const onFileSelect = (e) => {
    setFile([...e.target.files]);
  };
  // create formData obj
  let formData = new FormData();

  // On Form Submit
  const formSubmitInHoliday = (holidayObj) => {
    //append image to it
    file.forEach((element, index) => {
      let temp = `holidayImg`;
      formData.append(temp, element, element.name);
    });

    //append holidayObj
    formData.append("holidayObj", JSON.stringify(holidayObj));

    dispatch(addHoliday(formData));

    reset();
  };
  return (
    <form onSubmit={handleSubmit(formSubmitInHoliday)}>
      <div class="form-floating mb-3 mt-4">
        <input
          type="text"
          class="form-control"
          id="src"
          placeholder="source"
          {...register("src", { required: true })}
        />
        {errors.src?.type === "required" ? (
          <label className="text text-danger">Source is Required</label>
        ) : (
          <label for="src">Source</label>
        )}
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="dest"
          placeholder="destination"
          {...register("dest", { required: true })}
        />
        {errors.dest?.type === "required" ? (
          <p className="text text-danger">Destination is Required</p>
        ) : (
          <label for="dest">Destination</label>
        )}
      </div>

      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="days"
          placeholder="days"
          {...register("days", { required: true })}
        />
        {errors.days?.type === "required" ? (
          <label className="text text-danger">
            number of days are required
          </label>
        ) : (
          <label for="days">Number of days</label>
        )}
      </div>

      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="price"
          placeholder="price"
          {...register("price", { required: true })}
        />
        {errors.price?.type === "required" ? (
          <label className="text text-danger">price/person is Required</label>
        ) : (
          <label for="price">Price/Person</label>
        )}
      </div>

      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="rating"
          placeholder="rating"
          {...register("rating", { required: true })}
        />
        {errors.rating?.type === "required" ? (
          <label className="text text-danger">Rating is Required</label>
        ) : (
          <label for="rating">Ratings</label>
        )}
      </div>

      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          id="description"
          placeholder="package description"
          rows="15"
          {...register("description", { required: true })}
        />
        {errors.description?.type === "required" ? (
          <label className="text text-danger">Descrption is Required</label>
        ) : (
          <label for="description">Package description</label>
        )}
      </div>

      {/* images */}
      <div className="form-floating mb-3">
        <input
          type="file"
          className="form-control"
          id="himage"
          name="himage"
          onChange={onFileSelect}
          accept="image/*"
          multiple
        />
      </div>
      {isLoading && <Loader />}
      <button className="btn btn-success rounded-pill mb-3">
        Add Holiday Package
      </button>
    </form>
  );
};

export default HolidayForm;
