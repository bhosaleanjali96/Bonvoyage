import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editHoliday } from "../redux-store/holidaySlice";
import Loader from "../shared component/Loader";

const EditHolidayForm = ({ holidayForEdit, seted, index }) => {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: holidayForEdit,
  });
  let { isLoading } = useSelector((state) => state.holiday);
  let diapatch = useDispatch();
  let [file, setFile] = useState([]);
  // For Image
  const onFileSelect = (e) => {
    setFile([...e.target.files]);
  };

  // create Formdata Object
  let formData = new FormData();

  // On Submitting Form
  const formSubmitInHoliday = async (holidayObj) => {
    //append image to it
    file.forEach((element, ind) => {
      let temp = `holidayImg`;
      formData.append(temp, element, element.name);
    });

    //append holidayObj
    formData.append("holidayObj", JSON.stringify(holidayObj));

    diapatch(
      editHoliday({ holId: holidayObj._id, formData: formData, index: index })
    );
    seted(false);
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
          <p className="text text-danger">Source is Required</p>
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
          <label className="text text-danger">Destination is Required</label>
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
          <p className="text text-danger">number of days are required</p>
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
          <p className="text text-danger">price/person is Required</p>
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
          id="flogo"
          name="flogo"
          onChange={onFileSelect}
          accept="image/*"
          multiple
        />
      </div>
      {isLoading && <Loader />}
      <button className="btn btn-success rounded-pill mb-3">
        Update Holiday Package
      </button>
    </form>
  );
};

export default EditHolidayForm;
