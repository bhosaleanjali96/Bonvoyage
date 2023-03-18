import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ListofHotels from "../Hotel/ListofHotels";
import { getHotels, deleteHotels } from "../redux-store/hotelSlice";
import HotelForm from "../Admin Dashboard/HotelForm";
import EditHotelForm from "../Hotel/EditHotelForm";

function Ownerdashboard() {
  let dispatch = useDispatch();
  let { name } = useParams();
  let [ed, seted] = useState(false);

  let [index, setindex] = useState(null);
  let [hotelForEdit, setHotelForEdit] = useState({});
  let [ownerhotel, setOwnerhotel] = useState([]);
  useEffect(() => {
    dispatch(getHotels());
  }, []);
  let { hotels } = useSelector((state) => state.hotel);
  useEffect(() => {
    setOwnerhotel(hotels.filter((el) => el.ownername === name));
  }, [hotels]);

  // when form submitted

  const edit = (val) => {
    let index = hotels.findIndex((obj) => obj._id === val._id);

    seted(!ed);
    setindex(index);
    setHotelForEdit({ ...val });
  };
  const deletehotel = (val) => {
    let index = hotels.findIndex((obj) => obj._id === val._id);
    setindex(index);
    dispatch(deleteHotels({ hid: val._id, index: index }));
  };

  return (
    <div className="row mt-3 ms-4 container-fluid">
      <div className="col-11 col-sm-12 col-md-5 card g-3 shadow-lg">
        <h4 className="text-center">Enter Hotel Details</h4>
        {!ed ? (
          <HotelForm />
        ) : (
          <EditHotelForm
            hotelForEdit={hotelForEdit}
            index={index}
            seted={seted}
          />
        )}
      </div>
      <div className="col-sm-12 col-md-7">
        {ownerhotel.length !== 0 &&
          ownerhotel.map((hot, index) => {
            return (
              <div className="card mt-4" key={index}>
                <div className="">
                  <ListofHotels hot={hot} />
                </div>
                <div className="ms-2">
                  <p className="hoteldesp">{hot.desp}</p>
                  <h5 className="fw-bold">Hotel Facilities</h5>
                  <p className="hoteldesp">{hot.hotelfacilities}</p>
                  <h5 className="fw-bold">Room Facilities</h5>
                  <p className="hoteldesp">{hot.roomfacilities}</p>
                  <h5 className="fw-bold">Important Landmarks</h5>
                  <p className="hoteldesp">{hot.landmarks}</p>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => {
                      edit(hot);
                    }}
                  >
                    <i class="far fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deletehotel(hot)}
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Ownerdashboard;
