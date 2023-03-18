import React, { useEffect, useState } from "react";

const Fare = ({ state, travellerCount }) => {
  let value = (+state.price * 5) / 100;
  let [totalprice, setTotalPrice] = useState(+state.price);
  useEffect(() => {
    setTotalPrice(travellerCount * +state.price);
  }, [travellerCount]);

  return (
    <div>
      <div className="mt-2 mb-2 d-flex justify-content-evenly">
        <h4 className="text-muted fs-5">Charge ({travellerCount})</h4>
        <p>:</p> <h4>{totalprice}</h4>
      </div>
      <div className="fs-5 mb-2 d-flex justify-content-evenly">
        <h4 className="text-muted fs-5">GST</h4>
        <p>:</p> <h4>{value}</h4>
      </div>
      <hr />
      <div className="fs-5 d-flex justify-content-evenly bg-light">
        <h4 className="fw-bold fs-4 ">Total</h4> <p>:</p>
        <h4>{totalprice + value}</h4>
      </div>
      <hr />
    </div>
  );
};

export default Fare;
