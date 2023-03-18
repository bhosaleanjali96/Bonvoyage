import React from "react";

function Footer() {
  return (
    <div>
      <h3 className="text-center mt-3 mb-4">~~~~~FAQ'S~~~~~</h3>
      <div className="row row-cols-sm-1 row-cols-md-2 container-fluid footer">
        <div>
          <h6 className="fw-bold footer-heading">
            How to book a hotel with BonVoyage
          </h6>
          <p className="text-muted footer-para">
            Booking a hotel online is easy through BonVoyage. All you need to do
            first is to download our app on your Android or iOS device or simply
            use your computer. On the app, tap on the Hotels section on the top
            left corner and enter the details of the city, the area or the
            hotel. Fill out the check-in and check-out dates, along with the
            other details and tap Search. Use the Sort & Filter options so that
            you can book one as per your convenience. You can also choose hotels
            according to user reviews and ratings. The same follows on our site.
          </p>
        </div>
        <div>
          <h3 className="fw-bold footer-heading">
            How do I make a flight booking on BonVoyage?
          </h3>
          <p className="text-muted footer-para">
            You can book a flight on BonVoyage in five easy steps: Head over to
            the MakeMyTrip flight booking page, Enter your departure and arrival
            destinations, Select your air travel dates, Choose from our wide
            range of flights based on your airfare preferences, Click on ‘Book
            Now’ and your air flight booking is done. Alternatively, you can
            also use the MakeMyTrip app for your flight ticket booking. Download
            the BonVoyage app, Put in the details i.e. date of journey,
            departure and arrival destinations, travel class of your choice,
            Select on your best comfortable option and click on 'Book Now'.
          </p>
        </div>
        <div>
          <h3 className="fw-bold footer-heading">
            Why Book Holidays with BonVoyage?
          </h3>
          <p className="text-muted footer-para">
            BonVoyage, India's leading online travel company, has a profound
            understanding of Indian consumers travel needs and preferences. It
            offers a wide range of holiday packages in India and across the
            world, catering to various segments of travellers. While the dynamic
            or customized tour and travel packages give consumers an option to
            create and design their own holiday, the fixed departure holiday
            packages have a pre-designed itinerary; thus ensuring there is
            something to meet the holiday needs of every kind of traveller.
          </p>
        </div>
        <div>
          <h3 className="fw-bold footer-heading">
            Can I avail domestic flight offers on BonVoyage?
          </h3>
          <p className="text-muted footer-para">
            Of course, you can. While making domestic flight bookings, you can
            avail any special offer that is active at that time. In accordance
            with the offer selected, a listing of eligible flights would show up
            on your screen. You can then apply the price filter and click on the
            downwards arrow, following which budget-friendly flights would start
            showing up in ascending order from the top (lowest price on top).
          </p>
        </div>
      </div>
      <div className="container-fluid bg-dark p-3 mt-1 mb-1 d-flex justify-content-around">
        <div className="text-light row">
          <div className="col-md-4">
            <h3>Bonvoyage</h3>
            <p>Here you choose the destination,we offer you the experience</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="twitter"
              width="40px"
              className="ms-3 icons"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              width="40px"
              className="ms-3 icons"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
              alt="Facebook"
              width="40px"
              className="ms-3 icons"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              alt="Youtube"
              width="40px"
              className="ms-3 icons"
            />
          </div>

          <div className="col-md-4 secn quicklink mt-sm-2">
            <h5>Quick links</h5>
            <ul>
              <li>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleAboutModal"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#examplePrivacyModal"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Terms and condition
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 secn support mt-sm-2">
            <h5>Support</h5>
            <ul className="text-light">
              <li>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleHelpModal"
                >
                  Help
                </a>
                <div
                  class="modal fade"
                  id="exampleHelpModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5
                          class="modal-title text-primary"
                          id="exampleModalLabel"
                        >
                          Help
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body text-center">
                        <h4 className="text-dark">
                          {" "}
                          <strong>Couldn't find your answer?</strong>
                        </h4>
                        <p className="text-dark">We're here to help!</p>
                        <p className="text-dark">Call us on-1800 123 5555</p>
                        <button type="button" class="btn btn-outline-primary">
                          Call Now
                        </button>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleOfModal"
                >
                  Contact Us
                </a>
                {/* modal for contact us */}
                <div
                  class="modal fade"
                  id="exampleOfModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5
                          class="modal-title text-primary"
                          id="exampleModalLabel"
                        >
                          Get in Touch
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div>
                          <p className="text-dark">
                            Founded in 2011, Bonvoyage is India’s leading online
                            travel marketplace bringing you best travellers
                            experience
                          </p>
                          <p className="text-dark">
                            <strong>
                              {" "}
                              <i class="fas fa-phone-alt" width="25px"></i>
                              Tollfree Number
                            </strong>{" "}
                            -1800 123 5555
                            <p className="text-muted">
                              Available Monday to Saturday 10 AM - 7 PM
                            </p>
                          </p>
                          <p className="text-dark ">
                            <strong>
                              <i class="fas fa-envelope" width="25px"></i>{" "}
                              Customer Email
                            </strong>{" "}
                            -ID customercare@bonvoyage.com
                          </p>
                          <p className="text-dark">
                            <i class="fas fa-briefcase" width="25px"></i>
                            <strong>Corporate Office-</strong>
                            <p className="text-dark">
                              Holiday Bonvoyage Private Limited Plot No -29 ,
                              3rd & 4th Floor Dynamic House, Maruti Industrial
                              Complex Sector 18, New Delhi - 122015, India
                            </p>
                          </p>
                        </div>
                      </div>

                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* modal for About Us */}
        <div
          class="modal fade"
          id="exampleAboutModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <h3 className="fw-bold footer-heading text-primary">
                    About Bonvoyage
                  </h3>
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p className="footer-para">
                  We are a leading online travel company in India providing a
                  'best in class' customer experience with the goal to be
                  'India's Travel Planner'. Through our website, our mobile
                  applications and our other associated platforms, leisure and
                  business travelers can explore, research, compare prices and
                  book a wide range of services catering to their travel needs.
                  Since our inception in 2006, more than 7 million customers
                  have used one or more of our comprehensive travel-related
                  services, which include domestic and international air
                  ticketing, hotel bookings, homestays, holiday packages
                  ,activities and ancillary services. With over 103,000 hotels
                  contracted across India, we are India's largest platform for
                  domestic hotels. A strong and "trusted" travel brand of India,
                  our strengths include a large and loyal customer base, a
                  multi-channel platform for leisure and business travelers, a
                  robust mobile eco-system for a spectrum of travelers and
                  suppliers, a strong technology platform designed to deliver a
                  high level of scalability and innovation and a seasoned senior
                  management team comprising of industry executives with deep
                  roots in the travel industry in India and abroad.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal for terms */}
        <div
          class="modal fade"
          id="examplePrivacyModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <h3 className="fw-bold footer-heading text-primary">
                    Privacy Policy
                  </h3>
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p className="footer-para">
                  Bonvoyage Online Private Limited, including all legal entities
                  under the Bonvoyage group , respects your (customers -
                  hereafter referred as "you" or "user") privacy and values our
                  relationship with our business partners, clients, third
                  parties having contractual relationship with Yatra (hereafter
                  referred to as "third party" or "service provider"), and any
                  party who purchases/intend to purchase/inquire about any
                  product(s) and/or service(s) made available by Bonvoyage
                  through any of Bonvayge' s customer interface channels
                  including Website, mobile site, mobile app & offline channels
                  including call centers and offices (collectively referred
                  herein as "Sales Channels"). We are committed to protecting
                  your personally identifiable information (hereafter referred
                  as "information" or "personal information" or "personal data"
                  or "special category of personal data") by handling it
                  responsibly and safeguarding it using appropriate technical
                  and organizational measures. We want to assure you that we
                  follow appropriate standards when it comes to protecting your
                  privacy on our Sales Channel. This policy outlines the types
                  of personal information collected on our Website, how this
                  data is used/processed and safeguarded as well as how users
                  may exercise their rights with respect to personal
                  information. This Privacy Policy applies to Bonvoyage.com,
                  Bonvoyage company pages, communications and services
                  ("Services"), including off-site Services, such as our email
                  services, customer care and support services and the "Contact
                  us"; "Apply with Bonvoyage" and "Share on" plugins on our
                  digital properties. By using or accessing the Website or other
                  Sales Channels, the user hereby agrees with the terms of this
                  Privacy Policy and the contents herein.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal for terms */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <h3 className="fw-bold footer-heading text-primary">
                    Terms & Conditions
                  </h3>
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p className="footer-para">
                  If we change or cancel your holiday We do plan the
                  arrangements in advance. It is unlikely that we will have to
                  make any changes to your travel arrangements. Occasionally, we
                  may have to make changes and we reserve the right to do so at
                  any time. If there are any changes, we will advise you of them
                  at the earliest possible date. We also reserve the right under
                  any circumstances to cancel your travel arrangements by
                  assigning reasons to you. If we are unable to provide the
                  booked travel arrangements due to reasons beyond our control
                  (e.g. bad weather):We shall first try to offer alternative
                  dates for the tour if the tour hasn't already commenced. If
                  the tour has already commenced, then we shall refund the
                  booking price/fee charged to you on a pro-rata basis depending
                  on the portion of the tour utilized by you. All cost incurred
                  due to amendment will be borne by you. If you have a complaint
                  If you face any problem during your holiday, please inform the
                  relevant supplier (e.g. your hotelier, transporter etc.)
                  and/or our representative immediately who will endeavour to
                  set things right. If your complaint is not resolved locally,
                  please follow this up within 28 days of your return home by
                  writing to us, with your booking reference and all other
                  relevant information. However, please be advised that while we
                  are happy to assist you in the redressal of your complaint, if
                  any, we will be able to extend only our best efforts in
                  managing/coordinating your complaint with the respective
                  service provider. All third party service providers are
                  independent contractors who are at no time under our control
                  or supervision. All booking vouchers and tickets will be
                  provided 3 days before departure.
                </p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrighttext">
        <p className="text-light" style={{ fontSize: "10px" }}>
          © 2021 BonVoyage PVT. LTD.
        </p>
      </div>
    </div>
  );
}

export default Footer;
