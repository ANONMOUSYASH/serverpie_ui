import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/HostingSolution.css";

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
    <div ref={sectionRef} className="hostingsolmain-main" style={{ position: 'relative' }}>
      <div className="right">
        <div className="subattack2 h-auto flex flex-col">
          <p className="hostingsolpar1">
            We Have a <span className="text-[96px]">Hosting Solution</span> For You
          </p>
          <p className="hostingsolpar2">
            ServerPie Shared Hosting – Power, Speed & Security in One!
            Enterprise-Grade Processors & Expert Management – Delivering
            Unmatched Speed, Security, and Reliability for Your Website!
          </p>
        </div>
      </div>
      
      <div className="hostingsolmain">
      <scrollPanel className="scrollingtop">
        <div 
          className="subhostingsol3 w-[100%]  overflow-hidden relative"
          ref={wrapperRef}
        >
          <div
            className="inner-scroll-content  overflow-hidden pr-4"
            ref={scrollContainerRef}
            style={{ maxHeight: "600px" }}
          >
            <div className="flex flex-col gap-[20px]">
              <div className="subhostingsolsub3" style={{ position: 'relative', zIndex: 1 }}>
                <div ref={(el) => setBoxRef(el, 0)} className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]">
                  <div className="subhostingsolbox1">
                    <img className="time1" src="vec0.svg" alt="" />
                  </div>
                  <p className="hostingsolboxpar1">HACKER-FREE SECURITY</p>
                  <p className="hostingsolboxpar2">
                    Our security is safe from hackers. It offers strong protection
                    against online threats. This keeps your data secure and
                    ensures that everything runs smoothly. We use the latest
                    defense methods.
                  </p>
                </div>
                <div ref={(el) => setBoxRef(el, 1)} className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]">
                  <div className="subhostingsolbox1">
                    <img className="time1" src="vec1.svg" alt="" />
                  </div>
                  <p className="hostingsolboxpar1">BLAZING FAST SERVERS</p>
                  <p className="hostingsolboxpar2">
                    Get very fast speeds to improve performance. Enjoy quick
                    loading times and make the website respond better. This will
                    make users feel happier.
                  </p>
                </div>
              </div>
              <div className="subattack4" style={{ position: 'relative', zIndex: 1 }}>
                <div className="subhostingsolsub4">
                  <div ref={(el) => setBoxRef(el, 2)} className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]">
                    <div className="subhostingsolbox1">
                      <img className="time1" src="vec2.svg" alt="" />
                    </div>
                    <p className="hostingsolboxpar1">GLOBAL AVAILABILITY</p>
                    <p className="hostingsolboxpar2">
                      Whiscloud.com provides hosting services that anyone can use.
                      This means your website will be easy to reach and reliable
                      for people in many places around the globe.
                    </p>
                  </div>
                  <div ref={(el) => setBoxRef(el, 3)} className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]">
                    <div className="subhostingsolbox1">
                      <img className="time1" src="vec0.svg" alt="" />
                    </div>
                    <p className="hostingsolboxpar1">ENHANCED FILE TRANSFER</p>
                    <p className="hostingsolboxpar2">
                      Whiscloud.com offers a new SFTP solution. It ensures that
                      your file transfers are secure and simple. The system uses
                      strong encryption to keep your data safe. It also makes sure
                      your data stays reliable and untouched.
                    </p>
                  </div>
                </div>
                <div className="subhostingsolsub4 pt-[15px]">
                  <div ref={(el) => setBoxRef(el, 4)} className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]">
                    <div className="subhostingsolbox1">
                      <img className="time1" src="vec1.svg" alt="" />
                    </div>
                    <p className="hostingsolboxpar1">24/7 SUPPORT</p>
                    <p className="hostingsolboxpar2">
                      Our team is available 24/7 to help with any issues and
                      ensure smooth operation.
                    </p>
                  </div>
                  <div ref={(el) => setBoxRef(el, 5)} className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]">
                    <div className="subhostingsolbox1">
                      <img className="time1" src="vec2.svg" alt="" />
                    </div>
                    <p className="hostingsolboxpar1">99.9% UPTIME GUARANTEE</p>
                    <p className="hostingsolboxpar2">
                      Our hosting ensures 99.9% uptime, keeping your website
                      online at all times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </scrollPanel>
      </div>
       
    </div>
  );
};

export default HostingSolution;