import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteHoliday, getHoliday } from "../redux-store/holidaySlice";
import EditHolidayForm from "../Holiday/EditHolidayForm";
import ListOfHolidays from "../Holiday/ListOfHolidays";
import HolidayForm from "../Admin Dashboard/HolidayForm";

function Addholiday() {
  let dispatch = useDispatch();
  let [ed, seted] = useState(false);

  useEffect(() => {
    dispatch(getHoliday());
  }, []);

  let { holidaypackage } = useSelector((state) => state.holiday);

  let [holidayForEdit, setHolidayForEdit] = useState({});

  let [index, setindex] = useState(null);

  // Edit Holiday
  const edit = (val, index) => {
    seted(!ed);
    setindex(index);
    setHolidayForEdit({ ...val });
  };

  // Delete holiday
  const deleteholiday = (val, index) => {
    dispatch(deleteHoliday({ holId: val._id, index: index }));
  };

  return (
    <div className="container-fluid">
      <div className="row mt-3 ms-4 ">
        <div className="col-sm-12 col-md-5 card g-3">
          <h4 className="text-center">Enter Holiday Package Details</h4>
          {!ed ? (
            <HolidayForm />
          ) : (
            <EditHolidayForm
              seted={seted}
              holidayForEdit={holidayForEdit}
              index={index}
            />
          )}
        </div>
        <div className="col-sm-12 col-md-7">
          {holidaypackage.map((holiday, index) => {
            return (
              <div className="card mt-4">
                <div>
                  <ListOfHolidays holiday={holiday} />
                </div>
                <div>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => {
                      edit(holiday, index);
                    }}
                  >
                    <i class="far fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      deleteholiday(holiday, index);
                    }}
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

export default Addholiday;
