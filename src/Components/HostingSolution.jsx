import React, { useEffect, useRef, useState } from "react";
import { ScrollPanel } from "primereact/scrollpanel";
import "../Styles/HostingSolution.css";

const HostingSolution = () => {
  const scrollPanelRef = useRef(null);
  const sectionRef = useRef(null);
  const [isSectionInView, setIsSectionInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = sectionRef.current;
      if (!sectionElement) return;

      const sectionRect = sectionElement.getBoundingClientRect();
      const newIsSectionInView =
        sectionRect.top < window.innerHeight && sectionRect.bottom > 0;

      setIsSectionInView(newIsSectionInView);

      if (newIsSectionInView) {
        // If section is in view, check ScrollPanel boundaries
        const scrollPanelContent = scrollPanelRef.current?.content;
        if (scrollPanelContent) {
          const isAtTop = scrollPanelContent.scrollTop === 0;
          const isAtBottom =
            scrollPanelContent.scrollHeight - scrollPanelContent.scrollTop <=
            scrollPanelContent.clientHeight + 1; // Add small tolerance

          if (isAtTop || isAtBottom) {
            // At boundary, allow main scroll
            document.body.style.overflow = "";
          } else {
            // In the middle, prevent main scroll, and scroll panel
             document.body.style.overflow = "hidden";
          }
        } else {
           document.body.style.overflow = "hidden";
        }
      } else {
        // Section not in view, allow main scroll
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      const sectionElement = sectionRef.current;
      const scrollPanelContent = scrollPanelRef.current?.content;

      if (!sectionElement || !scrollPanelContent) {
        return;
      }

      const sectionRect = sectionElement.getBoundingClientRect();
      const isSectionInViewLocal =
        sectionRect.top < window.innerHeight && sectionRect.bottom > 0;

      if (isSectionInViewLocal) {
        e.preventDefault();
        scrollPanelContent.scrollTop += e.deltaY;
      }
    }

    const scrollPanelElement = scrollPanelRef.current?.content;

     if (scrollPanelElement) {
        scrollPanelElement.addEventListener("wheel", handleWheel, { passive: false });
     }

      return () => {
         if (scrollPanelElement) {
            scrollPanelElement.removeEventListener("wheel", handleWheel);
         }
      }
  }, []);

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
        <div className="subhostingsol3 w-[100%] h-[654px] flex flex-col gap-[20px]">
          <ScrollPanel
            ref={scrollPanelRef}
            style={{
              width: "100%",
              height: "654px",
              overflow: "auto",
              outline: "none",
            }}
            className="custom-scroll"
            tabIndex={0}
          >
            <div className="subhostingsolsub3 animate-scroll" style={{ position: 'relative', zIndex: 1 }}>
              <div className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]">
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
              <div className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]">
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
                <div className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]">
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
                <div className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]">
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
              <div className="subhostingsolsub4">
                <div className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]">
                  <div className="subhostingsolbox1">
                    <img className="time1" src="vec1.svg" alt="" />
                  </div>
                  <p className="hostingsolboxpar1">24/7 SUPPORT</p>
                  <p className="hostingsolboxpar2">
                    Our team is available 24/7 to help with any issues and
                    ensure smooth operation.
                  </p>
                </div>
                <div className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]">
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
          </ScrollPanel>
        </div>
      </div>
    </div>
  );
};

export default HostingSolution;
