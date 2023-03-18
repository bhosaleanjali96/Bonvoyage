import React from "react";

function HolidayFooter() {
  return (
    <div className="container mt-4">
      <div className="card mt-3" style={{ maxwidth: "540px" }}>
        <div className="row row-cols-sm-1 row-cols-md-2 container-fluid ">
          <div className="col-md-6">
            <h3 className="fw-bold footer-heading mt-2">Payment Policy</h3>

            <h5 className="footer-para">
              -30 days or more before date of departure : 25% of total cost
            </h5>
            <h5 className="footer-para">
              -29 - 20 days before date of departure : 50% of total cost
            </h5>
            <h5 className="footer-para">
              -19 days or less before date of departure : 100% of total cost
            </h5>
            <p className="footer-para">
              <strong>-Important</strong>: The booking stands liable to be
              cancelled if 100% payment is not received 19 days prior to
              departure date and received amount will be fully forfeited.
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold footer-heading">Cancellation Policy</h3>
            <p className="footer-para">
              If you Cancel: your Holiday You or any member of your party may
              cancel their travel arrangements at any time. Written notification
              or an e-mail to that effect from the person who made the booking
              must be received at our office. The cancellation charges
              applicable are as per the published cancellation policy below:
            </p>
            <h5 className="footer-para">
              -30 days or more before date of departure : 25% of total cost
            </h5>
            <h5 className="footer-para">
              -29 - 20 days before date of departure : 50% of total cost
            </h5>
            <h5 className="footer-para">
              -19 days or less before date of departure : 100% of total cost
            </h5>
            <p className="footer-para">
              <strong>-Important</strong>: The booking stands liable to be
              cancelled if 100% payment is not received 19 days prior to
              departure date and received amount will be fully forfeited.
            </p>
          </div>
        </div>
      </div>

      <div className="card mt-3" style={{ maxwidth: "540px" }}>
        <div className="row row-cols-sm-1 row-cols-md-2 container-fluid ">
          <div className="col-md-12">
            <h3 className="fw-bold footer-heading">Terms & Conditions</h3>
            <p className="footer-para">
              If we change or cancel your holiday We do plan the arrangements in
              advance. It is unlikely that we will have to make any changes to
              your travel arrangements. Occasionally, we may have to make
              changes and we reserve the right to do so at any time. If there
              are any changes, we will advise you of them at the earliest
              possible date. We also reserve the right under any circumstances
              to cancel your travel arrangements by assigning reasons to you. If
              we are unable to provide the booked travel arrangements due to
              reasons beyond our control (e.g. bad weather):We shall first try
              to offer alternative dates for the tour if the tour hasn���t
              already commenced. If the tour has already commenced, then we
              shall refund the booking price/fee charged to you on a pro-rata
              basis depending on the portion of the tour utilized by you. In all
              circumstances, however, our liability shall be limited to
              refunding to you the price we charged as tour fees. If you want to
              change your holiday plan After confirmation of services, if you
              wish to change your travel arrangements in any way (e.g. your
              chosen departure date or accommodation), we will do our utmost to
              make these changes but it may not always be possible. Any request
              for changes must be in writing from the person who made the
              booking. All cost incurred due to amendment will be borne by you.
              If you have a complaint If you face any problem during your
              holiday, please inform the relevant supplier (e.g. your hotelier,
              transporter etc.) and/or our representative immediately who will
              endeavour to set things right. If your complaint is not resolved
              locally, please follow this up within 28 days of your return home
              by writing to us, with your booking reference and all other
              relevant information. However, please be advised that while we are
              happy to assist you in the redressal of your complaint, if any, we
              will be able to extend only our best efforts in
              managing/coordinating your complaint with the respective service
              provider. All third party service providers are independent
              contractors who are at no time under our control or supervision.
              All booking vouchers and tickets will be provided 3 days before
              departure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HolidayFooter;
