import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/HostingSolution.css";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const HostingSolution = () => {
  const sectionRef = useRef(null);
  const boxesWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = boxesWrapperRef.current;

      // Get full height of boxes
      const scrollHeight = wrapper.scrollHeight;
      const visibleHeight = 650;
      const scrollDistance = scrollHeight - visibleHeight;

      // Animate the vertical scroll of the boxes on page scroll
      // Animate the vertical scroll of the boxes on page scroll with smoother, slower effect
      gsap.to(wrapper, {
        y: -scrollDistance,
        ease: "power1.inOut", // smoother easing
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: `+=${scrollDistance * 2.5}`, // increase scroll distance for slower effect
          scrub: 2.5, // smooth and slow scrub
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const boxes = [
    {
      img: "vec0.svg",
      title: "HACKER-FREE SECURITY",
      desc: "Our security is safe from hackers. It offers strong protection against online threats...",
    },
    {
      img: "vec1.svg",
      title: "BLAZING FAST SERVERS",
      desc: "Get very fast speeds to improve performance. Enjoy quick loading times...",
    },
    {
      img: "vec2.svg",
      title: "GLOBAL AVAILABILITY",
      desc: "Whiscloud.com provides hosting services that anyone can use globally...",
    },
    {
      img: "vec0.svg",
      title: "ENHANCED FILE TRANSFER",
      desc: "Whiscloud.com offers a new SFTP solution with secure encryption...",
    },
    {
      img: "vec1.svg",
      title: "24/7 SUPPORT",
      desc: "Our team is available 24/7 to help with any issues and ensure smooth operation.",
    },
    {
      img: "vec2.svg",
      title: "99.9% UPTIME GUARANTEE",
      desc: "Our hosting ensures 99.9% uptime, keeping your website online at all times.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="hostingsolmain-main"
      style={{ height: "auto", display: "flex", overflow: "hidden" }}
    >
      {/* Left text content (fixed) */}
      <div className="right">
        <div className="subattack2 h-auto flex flex-col">
          <p className="hostingsolpar1">
            We Have a <span className="text-[96px]">Hosting Solution</span> For
            You
          </p>
          <p className="hostingsolpar2">
            ServerPie Shared Hosting – Power, Speed & Security in One!
            Enterprise-Grade Processors & Expert Management – Delivering
            Unmatched Speed, Security, and Reliability for Your Website!
          </p>
        </div>
      </div>

      {/* Right scrollable boxes */}
      <div
        className="hostingsolmain"
        style={{ height: "700px", overflow: "hidden" }}
      >
        <div className="scrollingtop">
          <div
            ref={boxesWrapperRef}
            className="flex flex-col gap-[20px] mt-[20px]"
          >
            {/* 3 rows (6 boxes total) */}
            <div className="subhostingsolsub3">
              <Box {...boxes[0]} />
              <Box {...boxes[1]} />
            </div>
            <div className="subhostingsolsub4">
              <Box {...boxes[2]} />
              <Box {...boxes[3]} />
            </div>
            <div className="subhostingsolsub4">
              <Box {...boxes[4]} />
              <Box {...boxes[5]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Box = ({ img, title, desc }) => (
  <div className="hostingsolbox1 w-[311px] h-[300px] bg-[#ffffff] rounded-[27px]">
    <div className="subhostingsolbox1">
      <img className="time1" src={img} alt="" />
    </div>
    <p className="hostingsolboxpar1">{title}</p>
    <p className="hostingsolboxpar2">{desc}</p>
  </div>
);

export default HostingSolution;
