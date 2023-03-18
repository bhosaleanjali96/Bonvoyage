import React from "react";

const HotelCancelatonPolicy = () => {
  return (
    <div>
      <p className="policy-heading ms-2">
        {" "}
        <strong>CANCELLATION POLICY / HOTEL POLICIES</strong>{" "}
      </p>
      <p className="policy-heading ms-2">Standard Rate:</p>
      <p className="policy-para ms-2">
        The cancellation is free of charge 7 days prior to the date of arrival,
        after this time we charge you 90% the room rate as cancellation fee, if
        we could not sell the room more.
      </p>
      <p className="policy-heading ms-2">Non Refundable Rate:</p>
      <p className="policy-para ms-2">
        For the non refundable bookings are no cancellation or changes possible.
        In case of a cancellation, 90% of the total amount will be charged as
        cancellation fee.
      </p>
    </div>
  );
};

export default HotelCancelatonPolicy;
