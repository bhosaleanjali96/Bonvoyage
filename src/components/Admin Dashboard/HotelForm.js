import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import { addHotels } from "../redux-store/hotelSlice";
import Loader from "../shared component/Loader";
const HotelForm = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let dispatch = useDispatch();
  let [file, setFile] = useState([]);
  let { userObj } = useSelector((state) => state.user);
  let { isLoading } = useSelector((state) => state.hotel);
  // image adding
  const onFileSelect = (e) => {
    setFile([...e.target.files]);
  };

  // create Formdata Object
  let formData = new FormData();

  // On Form Submit
  const addHotelForm = async (hotelObj) => {
    // append image to it
    file.forEach((element, index) => {
      let temp = `hotelImg`;
      formData.append(temp, element, element.name);
    });
    //append hotel ownername
    hotelObj.ownername = userObj.ownername;

    // append hotel object
    formData.append("hotelObj", JSON.stringify(hotelObj));
    dispatch(addHotels(formData));
    // HTTP Post
    // let response = await axiosRequestWithToken.post(
    //   "/hotel/addhotel",
    //   formData
    // );
    // text(response.data.message);

    reset();
  };
  return (
    <form onSubmit={handleSubmit(addHotelForm)}>
      <div className="form-floating mb-3">
        <input
          type="file"
          className="form-control"
          id="img"
          multiple
          accept="image/*"
          placeholder="Hotel Images"
          onChange={onFileSelect}
        />
      </div>
      {/* hotelname */}
      <div className="form-floating mb-4">
        <input
          type="text"
          name="hotelname"
          id="hotelname"
          className="form-control"
          placeholder="hotelname"
          {...register("hotelname", { required: true })}
        />
        {errors.hotelname?.type === "required" ? (
          <label className="text text-danger ">*Hotelname is Required</label>
        ) : (
          <label htmlFor="hotelname">Hotelname*</label>
        )}
      </div>

      {/* hotelstar */}
      <div className="form-floating mb-4">
        <input
          type="number"
          name="hotelstar"
          id="hotelstar"
          className="form-control"
          placeholder="hotelstar"
          {...register("hotelstar", { required: true })}
        />
        {errors.hotelstar?.type === "required" ? (
          <label className="text text-danger ">*hotelstar is Required</label>
        ) : (
          <label htmlFor="hotelstar">hotelStar*</label>
        )}
      </div>

      {/* location */}
      <div className="form-floating mb-4">
        <input
          type="text"
          name="location"
          id="location"
          className="form-control"
          placeholder="location"
          {...register("location", { required: true })}
        />
        {errors.location?.type === "required" ? (
          <label className="text text-danger ">*Location is Required</label>
        ) : (
          <label htmlFor="location">Location*</label>
        )}
      </div>

      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          id="noOfRooms"
          placeholder="destination"
          {...register("noOfRooms", { required: true })}
        />
        {errors.noOfRooms?.type === "required" ? (
          <label className="text text-danger">
            Number of rooms are Required
          </label>
        ) : (
          <label for="floatingInput">Number of rooms</label>
        )}
      </div>

      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="roomname"
          placeholder="days"
          {...register("roomname", { required: true })}
        />
        {errors.roomname?.type === "required" ? (
          <label className="text text-danger">Room name is required</label>
        ) : (
          <label for="floatingInput">Room Name</label>
        )}
      </div>

      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          id="price"
          placeholder="price"
          {...register("price", { required: true })}
        />
        {errors.price?.type === "required" ? (
          <label className="text text-danger">Price is Required</label>
        ) : (
          <label for="floatingInput">Room Price</label>
        )}
      </div>

      <div className="form-floating mb-3">
        <input
          type="textarea"
          className="form-control"
          id="desp"
          placeholder="package description"
          {...register("desp", { required: true })}
        />
        {errors.desp?.type === "required" ? (
          <label className="text text-danger">Descrption is Required</label>
        ) : (
          <label for="floatingInput">Hotel description</label>
        )}
      </div>

      {/* hotel facilities */}
      <div className="form-floating mb-3">
        <input
          type="textarea"
          className="form-control"
          id="hotelfacilities"
          placeholder="hotelfacilities"
          {...register("hotelfacilities", { required: true })}
        />
        {errors.hotelfacilities?.type === "required" ? (
          <label className="text text-danger">
            hotel Facilities is Required
          </label>
        ) : (
          <label for="floatingInput">Hotel Facilities</label>
        )}
      </div>

      {/* Room Facilities */}
      <div className="form-floating mb-3">
        <input
          type="textarea"
          className="form-control"
          id="roomfacilities"
          placeholder="roomfacilities"
          {...register("roomfacilities", { required: true })}
        />
        {errors.roomfacilities?.type === "required" ? (
          <label className="text text-danger">
            Room Facilities is Required
          </label>
        ) : (
          <label for="floatingInput">Room Facilities</label>
        )}
      </div>

      {/*Important Land Marks */}
      <div className="form-floating mb-3">
        <input
          type="textarea"
          className="form-control"
          id="landmarks"
          placeholder="landmarks"
          {...register("landmarks", { required: true })}
        />
        {errors.landmarks?.type === "required" ? (
          <label className="text text-danger">Landmarks is Required</label>
        ) : (
          <label for="floatingInput">Landmarks</label>
        )}
      </div>

      {isLoading && <Loader />}
      <button className="btn btn-success w-50">Add Hotel</button>
    </form>
  );
};

export default HotelForm;
