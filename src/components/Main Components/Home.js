import React, { useEffect, useRef } from "react";
import { useState } from "react";
import bird1 from "../Img/bird1.png";
import bird2 from "../Img/bird2.png";
import forest from "../Img/forest.png";
import rocks from "../Img/rocks.png";
import water from "../Img/water.png";
import sideplane from "../Img/sideplane.png";
import { Link } from "react-router-dom";

function Home() {
  const [scrolly, setscrolly] = useState(0);
  const handleScroll = () => setscrolly(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <section>
        <h2 id="text">
          <span>It's time for new </span>
          <br />
          Adventure
        </h2>

        <img
          src={bird1}
          id="bird1"
          alt="bird"
          style={{ top: `${scrolly * -1.5}px`, left: `${scrolly * 2}px` }}
        />
        <img
          src={bird2}
          id="bird2"
          alt="bird"
          style={{ top: `${scrolly * -1.5}px`, left: `${scrolly * -5}px` }}
        />
        <img
          src={forest}
          id="forest"
          alt="forest"
          style={{ top: `${scrolly * 0.25}px` }}
        />
        <Link
          id="btn"
          to="/Holidays"
          style={{ marginTop: `${scrolly * 1.5}px` }}
        >
          Explore
        </Link>
        <img
          src={rocks}
          id="rocks"
          alt="rocks"
          style={{ top: `${scrolly * -0.12}px` }}
        />
        <img src={water} id="water" alt="" />
      </section>
      <div class="sec ">
        <img
          src="https://images.pexels.com/photos/6181222/pexels-photo-6181222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="hotel"
          className="w-100 h-100 img-fluid"
        />
        <div class="bottom-right">
          <h1 className="fw-bold bounce-in-left">
            Every stay will give you a reason to smile
          </h1>
          <Link
            className="btn bg-light rounded-pill"
            to="/Hotel"
            style={{ color: "#094b65" }}
          >
            Book Your Stay
          </Link>
        </div>
        <div class="top-left">
          <img
            src={sideplane}
            alt="plane"
            // className="img"
            width="200px"
            className="airplane"
          />
          <h1 className="text-white fw-bold bounce-in-left">
            Be ready to fly, we are waiting!
          </h1>
          <Link
            className="btn bg-light rounded-pill"
            to="/Flight"
            style={{ color: "#094b65" }}
          >
            Book Your Flight
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
