import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFlights, getFlights } from "../redux-store/flightSlice";
import EditFlightForm from "../Flight/EditFlightForm";
import ListofFlights from "../Flight/ListofFlights";
import FlightForm from "../Admin Dashboard/FlightForm";

function Addflight() {
  let dispatch = useDispatch();
  let [ed, seted] = useState(false);
  useEffect(() => {
    dispatch(getFlights());
  }, []);
  let { flights } = useSelector((state) => state.flight);

  let [flightForEdit, setFlightForEdit] = useState({});

  let [index, setindex] = useState(null);

  // Edit Flight
  const edit = (val, index) => {
    seted(!ed);
    setindex(index);
    setFlightForEdit({ ...val });
  };

  // Delete Flight
  const deleteflight = (val, index) => {
    dispatch(deleteFlights({ fid: val._id, index: index }));
  };

  return (
    <div className="container-fluid">
      <div className="row mt-3 ms-4 ">
        <div className="col-11 col-sm-12 col-md-5 card g-3">
          <h4 className="text-center">Enter Flight Details</h4>
          {!ed ? (
            <FlightForm />
          ) : (
            <EditFlightForm
              seted={seted}
              flightForEdit={flightForEdit}
              index={index}
            />
          )}
        </div>

        <div className="col-sm-12 col-md-7">
          {flights.map((fli, index) => {
            return (
              <div className="card mt-4" key={index}>
                <div className="">
                  <ListofFlights fli={fli} />
                </div>
                <div className="">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => {
                      edit(fli, index);
                    }}
                  >
                    <i class="far fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteflight(fli, index)}
                  >
                    <i class="far fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Addflight;
