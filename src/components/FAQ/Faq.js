import React from "react";

const Faq = () => {
  return (
    <div className="container-fluid footer">
      <h3>FAQs</h3>
      {/* Question-1 */}
      <div>
        <h6 className="faq-heading">
          How do I know my reservation was booked ?
        </h6>
        <p className="footer-para ">
          You will receive an SMS and email on confirmation of your hotel(s)
          booking.
        </p>
      </div>
      <hr />
      {/* Question-2 */}
      <div>
        <h6 className="faq-heading">Do I need to confirm my reservation ?</h6>
        <p className="footer-para ">
          There is no need to confirm your reservation. If you still feel you
          would like to verify that your reservation was made, you can do so by
          writing to our Customer Support Team or by contacting our customer
          services team.
        </p>
      </div>
      <hr />
      {/* Question-3 */}
      <div>
        <h6 className="faq-heading">
          Is there a cancellation policy for hotel(s) booked on BonVoyage.com?
        </h6>
        <p className="footer-para ">
          The cancellation policy for hotel(s) bookings varies according to
          hotel(s) and room type. For more information, please check the
          cancellation policy mentioned next to the price for the room type. If
          you are cancelling after the check-in date, there will be no refund.
          In all cases, you'll be charged a standard cancellation fee of Rs. 250
          per booking over and above the hotel(s)'s own cancellation charges.
        </p>
      </div>
    </div>
  );
};

export default Faq;
