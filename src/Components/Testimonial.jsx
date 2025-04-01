import React, { useEffect, useRef, useState } from "react";
import { IoMdStar } from "react-icons/io";
import gsap from "gsap";
import "../Styles/Testimonial.css";
import Slider from "react-slick";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("large"); // Default to large screen
  const [compNumber, setCN] = useState(5);
  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        setDeviceType("mobile");
        setCN(1);
      } else if (width >= 768 && width < 1024) {
        setDeviceType("tablet");
        setCN(2);
      } else {
        setDeviceType("large");
        setCN(5);
      }
    };

    updateDeviceType(); // Initial check
    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType); // Cleanup
  }, []);

  return compNumber;
};

const Testimonial = () => {
  const OurTestimonial = [
    { id: 0, name: "Yash Vardhan" },
    { id: 1, name: "Aarav Mehta" },
    { id: 2, name: "Priya Sharma" },
    { id: 3, name: "Neha Patel" },
  ];

  const duplicatedTestimonials = [...OurTestimonial, ...OurTestimonial];

  // Refs for the scrolling rows
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  useEffect(() => {
    // First row scrolling to the right
    gsap.to(firstRowRef.current, {
      xPercent: -50, // Moves the content by 50% of its width
      duration: 10, // Scroll speed
      ease: "linear",
      repeat: -1, // Infinite loop
    });

    // Second row scrolling to the left
    gsap.to(secondRowRef.current, {
      xPercent: 50,
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  }, []);
  
  const scrollCom = useDeviceType();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: scrollCom,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: scrollCom,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    rtl: true,
  };

  return (
    <div className="frammain40">
      <div className="frammain4">
        <div className="framsub4">
          <div className="framsubtitle">
            <img className="imoges" src="love.png" alt="Heart" />
            <p className="feedback">Feedbacks</p>
          </div>
          <p className="framsubp4">
            Real Stories, Real Success—Powering Businesses{" "}
            <span className="like">Like Yours</span>
          </p>
        </div>

        {/* First Row - Scroll Right */}
        <div className="slider-container">
          <Slider className="slidersub1" {...settings}>
            {duplicatedTestimonials.map((item, index) => (
              <div key={index} className="subframbox41" >
                <div className="subframbox42">
                  <div className="subframbox43">
                    <img className="yash" src="yash1.jpg" alt="User" />
                    <p className="yashpar">{item.name}</p>
                  </div>
                  <p className="yashpar2">@serverpie</p>
                  <hr className="fullhr" />
                  <div className="subframbox44">
                    <div className="mainstar41">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="substar1">
                          <IoMdStar className="iso" />
                        </div>
                      ))}
                    </div>
                    <p className="yeshdate">Jan 28, 2025</p>
                  </div>
                  <div className="subframbox45">
                    <p className="their">
                      Their support is crazy fast and amazing.
                    </p>
                    <p className="their2">
                      The team is really responsive and always available to
                      help!
                    </p>
                  </div>
                  <div className="subbox46">
                    <p className="subboxpar46">
                      Date of experience: January 27, 2025
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="slider-container">
          <Slider className="slidersub2" {...settings2}>
            {duplicatedTestimonials.map((item, index) => (
              <div key={index} className="subframbox41" style={{ margin: 10 }}>
                <div className="subframbox42">
                  <div className="subframbox43">
                    <img className="yash" src="yash1.jpg" alt="User" />
                    <p className="yashpar">{item.name}</p>
                  </div>
                  <p className="yashpar2">@serverpie</p>
                  <hr className="fullhr" />
                  <div className="subframbox44">
                    <div className="mainstar41">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="substar1">
                          <IoMdStar className="iso" />
                        </div>
                      ))}
                    </div>
                    <p className="yeshdate">Jan 28, 2025</p>
                  </div>
                  <div className="subframbox45">
                    <p className="their">
                      Their support is crazy fast and amazing.
                    </p>
                    <p className="their2">
                      The team is really responsive and always available to
                      help!
                    </p>
                  </div>
                  <div className="subbox46">
                    <p className="subboxpar46">
                      Date of experience: January 27, 2025
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="scroll-container">
          <div className="framemain41" ref={firstRowRef}></div>
        </div>

        {/* Second Row - Scroll Left */}
        {/* <div className="scroll-container">
          <div className="framemain41" ref={secondRowRef}>
            {duplicatedTestimonials.map((item, index) => (
              <div key={index} className="subframbox41">
                <div className="subframbox42">
                  <div className="subframbox43">
                    <img className="yash" src="yash1.jpg" alt="User" />
                    <p className="yashpar">{item.name}</p>
                  </div>
                  <p className="yashpar2">@serverpie</p>
                  <hr className="fullhr" />
                  <div className="subframbox44">
                    <div className="mainstar41">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="substar1">
                          <IoMdStar className="iso" />
                        </div>
                      ))}
                    </div>
                    <p className="yeshdate">Jan 28, 2025</p>
                  </div>
                  <div className="subframbox45">
                    <p className="their">
                      Their support is crazy fast and amazing.
                    </p>
                    <p className="their2">
                      The product is excellent and really user-friendly.
                    </p>
                  </div>
                  <div className="subbox46">
                    <p className="subboxpar46">
                      Date of experience: January 27, 2025
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonial;
