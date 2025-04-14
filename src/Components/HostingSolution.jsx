import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/HostingSolution.css";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const HostingSolution = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const wrapperRef = useRef(null);
  const boxRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      const container = scrollContainerRef.current;
      const totalScroll = container.scrollHeight - container.clientHeight;

      // ScrollTrigger for pinning and scrolling through container
      gsap.to(container, {
        scrollTop: totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top center",
          end: () => `+=${totalScroll}`,
          scrub: true,
          pin: true,
        },
      });

      // Animate each box on scroll
      boxRefs.current.forEach((box) => {
        gsap.from(box, {
          y: 50,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setBoxRef = (el, index) => {
    if (el) boxRefs.current[index] = el;
  };

  return (
    <div ref={sectionRef} className="hostingsolmain-main" style={{ position: "relative" }}>
      {/* Text section */}
      <div className="right">
        <div className="subattack2 h-auto flex flex-col">
          <p className="hostingsolpar1">
            We Have a <span className="text-[96px]">Hosting Solution</span> For You
          </p>
          <p className="hostingsolpar2">
            ServerPie Shared Hosting – Power, Speed & Security in One! Enterprise-Grade
            Processors & Expert Management – Delivering Unmatched Speed, Security, and
            Reliability for Your Website!
          </p>
        </div>
      </div>

      {/* Scrollable animated section */}
      <div className="hostingsolmain">
        <div className="scrollingtop">
          <div className="subhostingsol3 w-[100%] overflow-hidden relative" ref={wrapperRef}>
            <div
              className="inner-scroll-content overflow-hidden pr-4"
              ref={scrollContainerRef}
              style={{ maxHeight: "600px" }}
            >
              <div className="flex flex-col gap-[20px]">
                {/* First row of boxes */}
                <div className="subhostingsolsub3" style={{ position: "relative", zIndex: 1 }}>
                  <Box
                    index={0}
                    setBoxRef={setBoxRef}
                    img="vec0.svg"
                    title="HACKER-FREE SECURITY"
                    desc="Our security is safe from hackers. It offers strong protection against online threats. This keeps your data secure and ensures that everything runs smoothly. We use the latest defense methods."
                  />
                  <Box
                    index={1}
                    setBoxRef={setBoxRef}
                    img="vec1.svg"
                    title="BLAZING FAST SERVERS"
                    desc="Get very fast speeds to improve performance. Enjoy quick loading times and make the website respond better. This will make users feel happier."
                  />
                </div>

                {/* Second row of boxes */}
                <div className="subattack4" style={{ position: "relative", zIndex: 1 }}>
                  <div className="subhostingsolsub4">
                    <Box
                      index={2}
                      setBoxRef={setBoxRef}
                      img="vec2.svg"
                      title="GLOBAL AVAILABILITY"
                      desc="Whiscloud.com provides hosting services that anyone can use. This means your website will be easy to reach and reliable for people in many places around the globe."
                    />
                    <Box
                      index={3}
                      setBoxRef={setBoxRef}
                      img="vec0.svg"
                      title="ENHANCED FILE TRANSFER"
                      desc="Whiscloud.com offers a new SFTP solution. It ensures that your file transfers are secure and simple. The system uses strong encryption to keep your data safe. It also makes sure your data stays reliable and untouched."
                    />
                  </div>

                  {/* Third row of boxes */}
                  <div className="subhostingsolsub4 pt-[15px]">
                    <Box
                      index={4}
                      setBoxRef={setBoxRef}
                      img="vec1.svg"
                      title="24/7 SUPPORT"
                      desc="Our team is available 24/7 to help with any issues and ensure smooth operation."
                    />
                    <Box
                      index={5}
                      setBoxRef={setBoxRef}
                      img="vec2.svg"
                      title="99.9% UPTIME GUARANTEE"
                      desc="Our hosting ensures 99.9% uptime, keeping your website online at all times."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

// Reusable Box Component
const Box = ({ index, setBoxRef, img, title, desc }) => (
  <div
    ref={(el) => setBoxRef(el, index)}
    className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]"
  >
    <div className="subhostingsolbox1">
      <img className="time1" src={img} alt="" />
    </div>
    <p className="hostingsolboxpar1">{title}</p>
    <p className="hostingsolboxpar2">{desc}</p>
  </div>
);

export default HostingSolution;
