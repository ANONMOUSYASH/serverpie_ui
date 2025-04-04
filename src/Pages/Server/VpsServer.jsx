import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../Styles/VpsServer.css";
import Faq from "../../Components/Faq";
import TryoutServices from "../../Components/TryoutServices";
import Contactfriedly from "../../Components/Contactfriedly";
import { IoEarthSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

import TechBoxes from "../../Components/TechBoxes";
import BestPricing from "../../Components/BestPricing";

const VpsServer = () => {
  return (
    <div>
      <main>
        <div className="w-full font-Inter max-w-[1413px] h-auto mx-auto mt-[10%] rounded-[28px] bg-[#229F57] flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-[650px] h-auto flex flex-col gap-[20px] md:gap-[38px] text-center">
            <p className="text-[32px] md:text-[48px] font-extrabold leading-[40px] md:leading-[54px] text-white" style={{ fontFamily: "'Inter',serif", }}>
              Blazing Fast VPS Hosting with 1 Gbps Port & 99.99% Uptime
            </p>
            <p className="text-[16px] md:text-[20px] font-normal leading-[18px] text-white" style={{ fontFamily: "'Inter',serif", }}>
              Get a high-performance VPS powered by Xeon processors
            </p>
            <div className="w-full max-w-[340px] flex flex-wrap justify-center gap-[16px] md:gap-[24px] mx-auto">
              <button className="w-[140px] md:w-[158px] h-[45px] md:h-[50px] rounded-[5px] p-[10px] bg-white text-[#229F57] font-bold text-[14px] md:text-[16px]" style={{ fontFamily: "'Inter',serif", }}>
                Deploy Now
              </button>
              <button className="w-[140px] md:w-[158px] h-[45px] md:h-[50px] rounded-[5px] p-[10px] bg-[#25A75B] text-white font-bold text-[14px] md:text-[16px] border border-white" style={{ fontFamily: "'Inter',serif", }}>
                View Plans
              </button>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-6 p-4 md:p-6">
          <p
            className="w-full max-w-[650px] text-[24px] md:text-[48px] leading-[30px] md:leading-[58px] text-center"
            style={{
              fontFamily: "'Inter', serif",
              fontWeight: "700",
              letterSpacing: "-3%",
              color: "#213036",
            }}
          >
            One-click software installation for your virtual server
          </p>
          <p
            className="w-full text-[16px] md:text-[20px] leading-[22px] md:leading-[24px] text-center"
            style={{
              fontFamily: "'Inter', serif",
              fontWeight: "400",
              letterSpacing: "0%",
              color: "#4B5875",
            }}
          >
            Explore a comprehensive selection of VPS templates in our knowledge base.
          </p>
          <div className="w-full flex flex-col lg:flex-row items-center gap-8 md:gap-[250px]">
            <div className="flex flex-col gap-6 w-full max-w-[400px]">
              <div className="w-[auto] h-[189px] rounded-[18px] border-[1px] border-[#DEDEDE]">
                <div className="w-full h-[57px] rounded-t-[18px] bg-[#F3FDF1] flex items-center justify-center">
                  <p
                    className="text-[16px] leading-[19px] text-center px-4"
                    style={{
                      fontFamily: "'Inter', serif",
                      fontWeight: "700",
                      letterSpacing: "1px",
                      color: "#213036",
                    }}
                  >
                    Wide Range of Operating Systems
                  </p>
                </div>
                <p
                  className="text-[14px] md:text-[16px] leading-[19px] text-center p-4"
                  style={{
                    fontFamily: "'Inter', serif",
                    fontWeight: "400",
                    letterSpacing: "1px",
                    color: "#4B5875",
                  }}
                >
                  Discover a variety of Linux-based operating systems for your virtual servers, and we'll handle the automatic installation for you.
                </p>
              </div>
              {/* Card 2 */}
              <div className="w-[auto] h-[189px] rounded-[18px] border-[1px] border-[#DEDEDE]">
                <div className="w-full h-[57px] rounded-t-[18px] bg-[#F3FDF1] flex items-center justify-center">
                  <p
                    className="text-[16px] leading-[19px] text-center px-4"
                    style={{
                      fontFamily: "'Inter', serif",
                      fontWeight: "700",
                      letterSpacing: "1px",
                      color: "#213036",
                    }}
                  >
                    Control panels and apps
                  </p>
                </div>
                <p
                  className="text-[14px] md:text-[16px] leading-[19px] text-center p-4"
                  style={{
                    fontFamily: "'Inter', serif",
                    fontWeight: "400",
                    letterSpacing: "1px",
                    color: "#4B5875",
                  }}
                >
                  Manage your server effortlessly with a dependable control panel and streamline web app installations with ease.
                </p>
              </div>
            </div>

            {/* img */}
            <div className="w-[350px] h-[350px] ml-[1px] flex justify-center items-center ">
              <div className="w-[350px] h-[350px] rounded-full border-[1px] bg-[#F6F6F6] flex justify-center items-center">
                <div className="w-[300px] h-[300px] rounded-full border-[1px] bg-[#ffffff]">
                  <img
                    className="mt-[-70px] ml-[80px]"
                    src="/vpsicon1.png"
                    alt=""
                  />
                  <img className="ml-[-80px]" src="/vpsicon2.png" alt="" />
                  <img src="/vpsicon3.png" alt="" />
                  <div className="w-[98px] h-[98px] ml-[200px] mt-[-130px]  rounded-[12px] border border-[#E5E5E5] bg-white shadow-[0px_4px_23.5px_0px_#C5C5C540]">
                    <img
                      className="mx-auto pt-[15px]"
                      src="/vpsicon5.png"
                      alt=""
                    />
                  </div>
                  <img
                    className="ml-[250px] mt-[-260px]"
                    src="/vpsicon4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* First Table */}
        {/* <div className=" font-serif">
          <section className="text-center py-12">
            <h3 className="uppercase"
              style={{
                fontFamily: "'Inter',serif",
                fontWeight: "700",
                lineHeight: "20px",
                fontSize: "17px",
                textAlign: "center",
                color: "#25A75B"
              }}
            >
              VPS PRODUCTS
            </h3>
            <h2 className="text-4xl font-bold text-[#0d1b41]"
              style={{
                fontFamily: "'Inter',serif",
                fontWeight: "700",
                fontSize: "40px",
                lineHeight: "46px",
                textAlign: "center",
                color: "#0E2954"
              }}
            >
              Great Savings of VPS Hosting <br /> with Our Month Savings
            </h2> */}

        {/* Dropdowns */}
        {/* <div className="flex justify-center gap-6 mt-6">
              <div className="relative">
                <select className="w-48 border border-gray-300 rounded-lg p-3 bg-white shadow-md focus:outline-none">
                  <option>🇮🇳 INDIA</option>
                  <option>🇺🇸 USA</option>
                  <option>🇬🇧 UK</option>
                </select>
              </div>
              <div className="relative">
                <select className="w-48 border border-gray-300 rounded-lg p-3 bg-white shadow-md focus:outline-none">
                  <option>Select a type</option>
                  <option>Standard</option>
                  <option>Premium</option>
                </select>
              </div>
            </div>
          </section> */}

        {/* Pricing Cards */}
        {/* <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"> */}
        {/* VPS Card 1 */}
        {/* <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-lg font-bold text-[#0d1b41]">
                  INTEL GOLD 8204P
                </h3>
                <p className="text-gray-500 text-sm">Middleweight</p>
                <div className="mt-4 space-y-3 bg-[#F6F9FD]">
                  <div className="w-[auto] h-[50.65px] border-[0.83px] border-[#E3E9ED] bg-white rounded-[9.96px] relative top-[8.3px] left-[8.3px]">
                  <p className="flex items-center">
                    <strong>32</strong> Cores @ 3.1 GHz
                  </p>
                  </div>
                 
                  <p className="flex items-center">
                    <strong>76GB</strong> up to 384GB
                  </p>
                  <p className="flex items-center">
                    <strong>6× 250GB</strong> SSD
                  </p>
                  <p className="flex items-center">
                    <strong>3Gbps</strong> 100TB/mo free traffic
                  </p>
                  <p className="flex items-center">
                    <strong>5</strong> up to 12
                  </p>
                  <p className="flex items-center">
                    <strong>15 Days</strong> of snapshot backups
                  </p>
                </div>
                <h4 className="text-2xl font-bold mt-4">$61.99</h4>
                <p className="text-sm text-gray-500">20.00 USD/mo when you renew</p>
                <button className="w-full mt-4 bg-green-600 text-white font-bold py-2 rounded-lg">
                  BUY NOW
                </button>
              </div> */}

        {/* VPS Card 2 */}
        {/* <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-lg font-bold text-[#0d1b41]">
                  INTEL GOLD 7402P
                </h3>
                <p className="text-gray-500 text-sm">Middleweight</p>
                <div className="mt-4 space-y-3 bg-[#F6F9FD]">
                  <p className="flex items-center">
                    <strong>26</strong> Cores @ 2.1 GHz
                  </p>
                  <p className="flex items-center">
                    <strong>64GB</strong> up to 384GB
                  </p>
                  <p className="flex items-center">
                    <strong>2× 250GB</strong> SSD
                  </p>
                  <p className="flex items-center">
                    <strong>3Gbps</strong> 100TB/mo free traffic
                  </p>
                  <p className="flex items-center">
                    <strong>1</strong> up to 3
                  </p>
                  <p className="flex items-center">
                    <strong>7 Days</strong> of snapshot backups
                  </p>
                </div>
                <h4 className="text-2xl font-bold mt-4">$21.99</h4>
                <p className="text-sm text-gray-500">20.00 USD/mo when you renew</p>
                <button className="w-full mt-4 bg-green-600 text-white font-bold py-2 rounded-lg">
                  BUY NOW
                </button>
              </div> */}

        {/* VPS Card 3 */}
        {/* <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-lg font-bold text-[#0d1b41]">
                  INTEL GOLD 7402P
                </h3>
                <p className="text-gray-500 text-sm">Middleweight</p>
                <div className="mt-4 space-y-3 bg-[#F6F9FD]">
                  <p className="flex items-center">
                    <strong>36</strong> Cores @ 2.9 GHz
                  </p>
                  <p className="flex items-center">
                    <strong>128GB</strong> up to 384GB
                  </p>
                  <p className="flex items-center">
                    <strong>8× 250GB</strong> SSD
                  </p>
                  <p className="flex items-center">
                    <strong>3Gbps</strong> 100TB/mo free traffic
                  </p>
                  <p className="flex items-center">
                    <strong>16</strong> up to 20
                  </p>
                  <p className="flex items-center">
                    <strong>18 Days</strong> of snapshot backups
                  </p>
                </div>
                <h4 className="text-2xl font-bold mt-4">$71.99</h4>
                <p className="text-sm text-gray-500">20.00 USD/mo when you renew</p>
                <button className="w-full mt-4 bg-green-600 text-white font-bold py-2 rounded-lg">
                  BUY NOW
                </button>
              </div> */}
        {/* VPS Card 3 */}
        {/* <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-lg font-bold text-[#0d1b41]">
                  INTEL GOLD 7402P
                </h3>
                <p className="text-gray-500 text-sm">Middleweight</p>
                <div className="mt-4 space-y-3 bg-[#F6F9FD]">
                  <p className="flex items-center">
                    <strong>36</strong> Cores @ 2.9 GHz
                  </p>
                  <p className="flex items-center">
                    <strong>128GB</strong> up to 384GB
                  </p>
                  <p className="flex items-center">
                    <strong>8× 250GB</strong> SSD
                  </p>
                  <p className="flex items-center">
                    <strong>3Gbps</strong> 100TB/mo free traffic
                  </p>
                  <p className="flex items-center">
                    <strong>16</strong> up to 20
                  </p>
                  <p className="flex items-center">
                    <strong>18 Days</strong> of snapshot backups
                  </p>
                </div>
                <h4 className="text-2xl font-bold mt-4">$71.99</h4>
                <p className="text-sm text-gray-500">20.00 USD/mo when you renew</p>
                <button className="w-full mt-4 bg-green-600 text-white font-bold py-2 rounded-lg">
                  BUY NOW
                </button>
              </div> */}
        {/* VPS Card 3 */}
        {/* <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-lg font-bold text-[#0d1b41]">
                  INTEL GOLD 7402P
                </h3>
                <p className="text-gray-500 text-sm">Middleweight</p>
                <div className="mt-4 space-y-3 bg-[#F6F9FD]">
                  <p className="flex items-center">
                    <strong>36</strong> Cores @ 2.9 GHz
                  </p>
                  <p className="flex items-center">
                    <strong>128GB</strong> up to 384GB
                  </p>
                  <p className="flex items-center">
                    <strong>8× 250GB</strong> SSD
                  </p>
                  <p className="flex items-center">
                    <strong>3Gbps</strong> 100TB/mo free traffic
                  </p>
                  <p className="flex items-center">
                    <strong>16</strong> up to 20
                  </p>
                  <p className="flex items-center">
                    <strong>18 Days</strong> of snapshot backups
                  </p>
                </div>
                <h4 className="text-2xl font-bold mt-4">$71.99</h4>
                <p className="text-sm text-gray-500">20.00 USD/mo when you renew</p>
                <button className="w-full mt-4 bg-green-600 text-white font-bold py-2 rounded-lg">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div> */}
        {/* First Table End */}

        <BestPricing />
        {/* Boxes */}
        <div className="w-full max-w-[1000px] flex flex-wrap justify-center gap-[26px] mx-auto">
          <div className="w-[301px] h-[271px] bg-white border border-[#E7E6E6] shadow-[0px_4px_23.5px_0px_rgba(197,197,197,0.25)] rounded-[26px] flex flex-col items-center justify-center mx-auto p-8">
            <div className="w-auto h-auto flex flex-col gap-[19px] items-center justify-center">
              <div className="w-[56px] h-[56px] rounded-full p-4 bg-[#25A75B] flex items-center justify-center">
              <IoEarthSharp className="w-[30px] h-[30px] text-[#ffffff] mt-[-1px] mr-[-15px] ml-[-15px]" />
              </div>
              <p className="font-normal text-[20px] leading-[24.2px] text-center text-[#0E2954]" style={{ fontFamily: "'Inter', serif", width: "190px" }}>
                Into details? Customize your VPS exactly how you like it.
              </p>
              <p className="text-[#25A75B] font-bold text-[16px] leading-[21px]" style={{ fontFamily: "'Inter', serif" }}>
                Buy VPS server now
              </p>
            </div>
          </div>

          <div className="w-[301px] h-[271px] bg-white border border-[#E7E6E6] shadow-[0px_4px_23.5px_0px_rgba(197,197,197,0.25)] rounded-[26px] flex flex-col items-center justify-center mx-auto p-8">
            <div className="w-auto h-auto flex flex-col gap-[19px] items-center justify-center">
              <div className="w-[56px] h-[56px] rounded-full p-4 bg-[#25A75B] flex items-center justify-center">
              <IoEarthSharp className="w-[30px] h-[30px] text-[#ffffff] mt-[-1px] mr-[-15px] ml-[-15px]" />
              </div>
              <p className="font-normal text-[20px] leading-[24.2px] text-center text-[#0E2954]" style={{ fontFamily: "'Inter', serif", width: "190px" }}>
                Into details? Customize your VPS exactly how you like it.
              </p>
              <p className="text-[#25A75B] font-bold text-[16px] leading-[21px] flex items-center gap-[10px]" style={{ fontFamily: "'Inter', serif" }}>
                Buy VPS server now <FaArrowRightLong className="cursor-pointer" />
              </p>
            </div>
          </div>

          <div className="w-[301px] h-[271px] bg-white border border-[#E7E6E6] shadow-[0px_4px_23.5px_0px_rgba(197,197,197,0.25)] rounded-[26px] flex flex-col items-center justify-center mx-auto p-8">
            <div className="w-auto h-auto flex flex-col gap-[19px] items-center justify-center">
              <div className="w-[56px] h-[56px] rounded-full p-4 bg-[#25A75B] flex items-center justify-center">
              <IoEarthSharp className="w-[30px] h-[30px] text-[#ffffff] mt-[-1px] mr-[-15px] ml-[-15px]" />
              </div>
              <p className="font-normal text-[20px] leading-[24.2px] text-center text-[#0E2954]" style={{ fontFamily: "'Inter', serif", width: "190px" }}>
                Into details? Customize your VPS exactly how you like it.
              </p>
              <p className="text-[#25A75B] font-bold text-[16px] leading-[21px]" style={{ fontFamily: "'Inter', serif" }}>
                Buy VPS server now
              </p>
            </div>
          </div>
        </div>
        {/* Boxes End */}


        <div className="w-auto h-auto mx-auto items-center justify-center">
          <p
            className="w-[985px] mx-auto  font-bold text-[40px] leading-[52px] text-[#0E2954]"
            style={{ fontFamily: "'Inter', serif" }}
          >
            What Makes Unlimited Reseller Hosting with{" "}
            <span className="text-[#25A75B]">Serverpie Awesome?</span>
          </p>
          <div className="w-[auto] h-[auto] flex items-center justify-center gap-[80px] ">
            <div className="flex flex-col">
              <div className="flex  gap-[30px]">
                <hr
                  className="mx-auto bg-[#25A75B] border-none flex-shrink-0"
                  style={{ width: "5px", height: "38px" }}
                />
                <p
                  className="w-[400px] text-[25px] font-bold leading-[31px] text-[#0E2954] pt-[20px]"
                  style={{ fontFamily: "'Inter', serif" }}
                >
                  Linux VPS (Virtual Private Server)
                </p>
              </div>
              <div className="w-[359px] h-[258px] flex flex-col ">
                <div className="flex w-[359px] h-[60px] gap-[15px]">
                  <div className="w-[16px] h-[16px] border-[3.69px] border-[#25A75B] rounded-[30px] mt-[20px]"></div>
                  <p
                    className=" w-[331px] font-normal text-[12px] leading-[20px] tracking-normal text-[#2D5087]"
                    style={{ fontFamily: "'Inter', serif" }}
                  >
                    A Linux VPS is a virtualized server environment that runs on
                    a physical server but operates independently with its own
                    allocated resources.
                  </p>
                </div>
                <div className="flex w-[359px] h-[60px] gap-[15px]">
                  <div className="w-[16px] h-[16px] border-[3.69px] border-[#25A75B] rounded-[30px] mt-[20px]"></div>
                  <p
                    className=" w-[331px] font-normal text-[12px] leading-[20px] tracking-normal text-[#2D5087]"
                    style={{ fontFamily: "'Inter', serif" }}
                  >
                    Ideal for web hosting, development environments, and running
                    Linux-based applications.
                  </p>
                </div>
                <div className="flex w-[359px] h-[60px] gap-[15px]">
                  <div className="w-[16px] h-[16px] border-[3.69px] border-[#25A75B] rounded-[30px] mt-[20px]"></div>
                  <p
                    className=" w-[331px] font-normal text-[12px] leading-[20px] tracking-normal text-[#2D5087]"
                    style={{ fontFamily: "'Inter', serif" }}
                  >
                    Offers root access, allowing users to install and configure
                    software as needed. It provides a balance between cost and
                    performance, making it suitable for small to medium-sized
                    projects.
                  </p>
                </div>
                <button
                  className="w-[87px] h-[27px] rounded-[3px] p-[5px]  bg-[#25A75B] text-[#ffffff]"
                  style={{
                    marginTop: "30px",
                    fontFamily: "'Inter',serif",
                    fontWeight: "700",
                    fontSize: "8px",
                    lineHeight: "8px",
                    justifyContent: "center",
                  }}
                >
                  Explore VPS
                </button>
              </div>
            </div>
            <div className="w-[332px] h-[421px] rounded-[14px] bg-[#F7F7F7] ml-[180px]"></div>
          </div>

          <div className="w-[auto] h-[auto] flex items-center justify-center gap-[80px] mt-[50px]">
            {/* Box (Image Placeholder) - Now on the Left */}
            <div className="w-[332px] h-[421px] rounded-[14px] bg-[#F7F7F7] mr-[180px]"></div>

            {/* Text Section - Now on the Right */}
            <div className="flex flex-col">
              <div className="flex gap-[30px]">
                <hr
                  className="mx-auto bg-[#25A75B] border-none flex-shrink-0"
                  style={{ width: "5px", height: "38px" }}
                />
                <p
                  className="w-[400px] text-[25px] font-bold leading-[31px] text-[#0E2954] pt-[20px]"
                  style={{ fontFamily: "'Inter', serif" }}
                >
                  Linux VPS (Virtual Private Server)
                </p>
              </div>

              <div className="w-[359px] h-[258px] flex flex-col">
                <div className="flex w-[359px] h-[60px] gap-[15px]">
                  <div className="w-[16px] h-[16px] border-[3.69px] border-[#25A75B] rounded-[30px] mt-[20px]"></div>
                  <p
                    className="w-[331px] font-normal text-[12px] leading-[20px] tracking-normal text-[#2D5087]"
                    style={{ fontFamily: "'Inter', serif" }}
                  >
                    A Linux VPS is a virtualized server environment that runs on
                    a physical server but operates independently with its own
                    allocated resources.
                  </p>
                </div>
                <div className="flex w-[359px] h-[60px] gap-[15px]">
                  <div className="w-[16px] h-[16px] border-[3.69px] border-[#25A75B] rounded-[30px] mt-[20px]"></div>
                  <p
                    className="w-[331px] font-normal text-[12px] leading-[20px] tracking-normal text-[#2D5087]"
                    style={{ fontFamily: "'Inter', serif" }}
                  >
                    Ideal for web hosting, development environments, and running
                    Linux-based applications.
                  </p>
                </div>
                <div className="flex w-[359px] h-[60px] gap-[15px]">
                  <div className="w-[16px] h-[16px] border-[3.69px] border-[#25A75B] rounded-[30px] mt-[20px]"></div>
                  <p
                    className="w-[331px] font-normal text-[12px] leading-[20px] tracking-normal text-[#2D5087]"
                    style={{ fontFamily: "'Inter', serif" }}
                  >
                    Offers root access, allowing users to install and configure
                    software as needed. It provides a balance between cost and
                    performance, making it suitable for small to medium-sized
                    projects.
                  </p>
                </div>

                <button
                  className="w-[87px] h-[27px] rounded-[3px] p-[5px]  bg-[#25A75B] text-[#ffffff]"
                  style={{
                    marginTop: "30px",
                    fontFamily: "'Inter',serif",
                    fontWeight: "700",
                    fontSize: "8px",
                    lineHeight: "8px",
                    justifyContent: "center",
                  }}
                >
                  Explore VPS
                </button>
              </div>
            </div>
          </div>


          <div className="w-[auto] h-[auto] flex items-center justify-center gap-[80px] mt-[50px]">
            <div className="flex flex-col">
              <div className="flex  gap-[30px]">
                <hr
                  className="mx-auto bg-[#25A75B] border-none flex-shrink-0"
                  style={{ width: "5px", height: "38px" }}
                />
                <p
                  className="w-[400px] text-[25px] font-bold leading-[31px] text-[#0E2954] pt-[20px]"
                  style={{ fontFamily: "'Inter', serif" }}
                >
                  Linux VPS (Virtual Private Server)
                </p>
              </div>
              <div className="w-[359px] h-[258px] flex flex-col ">
                <div className="flex w-[359px] h-[60px] gap-[15px]">
                  <div className="w-[16px] h-[16px] border-[3.69px] border-[#25A75B] rounded-[30px] mt-[20px]"></div>
                  <p
                    className=" w-[331px] font-normal text-[12px] leading-[20px] tracking-normal text-[#2D5087]"
                    style={{ fontFamily: "'Inter', serif" }}
                  >
                    A Linux VPS is a virtualized server environment that runs on
                    a physical server but operates independently with its own
                    allocated resources.
                  </p>
                </div>
                <div className="flex w-[359px] h-[60px] gap-[15px]">
                  <div className="w-[16px] h-[16px] border-[3.69px] border-[#25A75B] rounded-[30px] mt-[20px]"></div>
                  <p
                    className=" w-[331px] font-normal text-[12px] leading-[20px] tracking-normal text-[#2D5087]"
                    style={{ fontFamily: "'Inter', serif" }}
                  >
                    Ideal for web hosting, development environments, and running
                    Linux-based applications.
                  </p>
                </div>
                <div className="flex w-[359px] h-[60px] gap-[15px]">
                  <div className="w-[16px] h-[16px] border-[3.69px] border-[#25A75B] rounded-[30px] mt-[20px]"></div>
                  <p
                    className=" w-[331px] font-normal text-[12px] leading-[20px] tracking-normal text-[#2D5087]"
                    style={{ fontFamily: "'Inter', serif" }}
                  >
                    Offers root access, allowing users to install and configure
                    software as needed. It provides a balance between cost and
                    performance, making it suitable for small to medium-sized
                    projects.
                  </p>
                </div>
                <button
                  className="w-[87px] h-[27px] rounded-[3px] p-[5px]  bg-[#25A75B] text-[#ffffff]"
                  style={{
                    marginTop: "30px",
                    fontFamily: "'Inter',serif",
                    fontWeight: "700",
                    fontSize: "8px",
                    lineHeight: "8px",
                    justifyContent: "center",
                  }}
                >
                  Explore VPS
                </button>
              </div>
            </div>
            <div className="w-[332px] h-[421px] rounded-[14px] bg-[#F7F7F7] ml-[180px]"></div>
          </div>
        </div>

        {/* WHY VPS */}
        <div className="whyvpsmain">
          <div className="whyvpssub1">
            <h3 className="whyvpshead1">Why VPS</h3>
            <p className="whyvpspar1">
              What's the purpose of a VPS hosting server?
            </p>
          </div>
          <div className="whyvpssub2">
            <ul className="whyvpsul">
              <li className="whyvpsli">
                <div className="mainwhyvpscircle">
                  <div className="circlewhyvps">✔</div>
                  <h3 className="whyvpssubhead3">RDP Browsing</h3>
                </div>
                <p className="whysubpar3">
                  Easily set up a VPN on your system using Windows VPS or
                  Hyper-V hosting.
                </p>
              </li>
              <li className="whyvpsli">
                <div className="mainwhyvpscircle">
                  <div className="circlewhyvps">✔</div>
                  <h3 className="whyvpssubhead3">RDP Browsing</h3>
                </div>
                <p className="whysubpar3">
                  Easily set up a VPN on your system using Windows VPS or
                  Hyper-V hosting.
                </p>
              </li>
              <li className="whyvpsli">
                <div className="mainwhyvpscircle">
                  <div className="circlewhyvps">✔</div>
                  <h3 className="whyvpssubhead3">RDP Browsing</h3>
                </div>
                <p className="whysubpar3">
                  Easily set up a VPN on your system using Windows VPS or
                  Hyper-V hosting.
                </p>
              </li>
              <li className="whyvpsli">
                <div className="mainwhyvpscircle">
                  <div className="circlewhyvps">✔</div>
                  <h3 className="whyvpssubhead3">RDP Browsing</h3>
                </div>
                <p className="whysubpar3">
                  Easily set up a VPN on your system using Windows VPS or
                  Hyper-V hosting.
                </p>
              </li>
            </ul>
            <ul className="whyvpsul1">
              <li className="whyvpsli">
                <div className="mainwhyvpscircle">
                  <div className="circlewhyvps">✔</div>
                  <h3 className="whyvpssubhead3">RDP Browsing</h3>
                </div>
                <p className="whysubpar3">
                  Easily set up a VPN on your system using Windows VPS or
                  Hyper-V hosting.
                </p>
              </li>
              <li className="whyvpsli">
                <div className="mainwhyvpscircle">
                  <div className="circlewhyvps">✔</div>
                  <h3 className="whyvpssubhead3">RDP Browsing</h3>
                </div>
                <p className="whysubpar3">
                  Easily set up a VPN on your system using Windows VPS or
                  Hyper-V hosting.
                </p>
              </li>
              <li className="whyvpsli">
                <div className="mainwhyvpscircle">
                  <div className="circlewhyvps">✔</div>
                  <h3 className="whyvpssubhead3">RDP Browsing</h3>
                </div>
                <p className="whysubpar3">
                  Easily set up a VPN on your system using Windows VPS or
                  Hyper-V hosting.
                </p>
              </li>
              <li className="whyvpsli">
                <div className="mainwhyvpscircle">
                  <div className="circlewhyvps">✔</div>
                  <h3 className="whyvpssubhead3">RDP Browsing</h3>
                </div>
                <p className="whysubpar3">
                  Easily set up a VPN on your system using Windows VPS or
                  Hyper-V hosting.
                </p>
              </li>
            </ul>
            <ul className="whyvpsul2">
              <li className="whyvpsli">
                <div className="mainwhyvpscircle">
                  <div className="circlewhyvps">✔</div>
                  <h3 className="whyvpssubhead3">RDP Browsing</h3>
                </div>
                <p className="whysubpar3">
                  Easily set up a VPN on your system using Windows VPS or
                  Hyper-V hosting.
                </p>
              </li>
              <li className="whyvpsli">
                <div className="mainwhyvpscircle">
                  <div className="circlewhyvps">✔</div>
                  <h3 className="whyvpssubhead3">RDP Browsing</h3>
                </div>
                <p className="whysubpar3">
                  Easily set up a VPN on your system using Windows VPS or
                  Hyper-V hosting.
                </p>
              </li>
              <li className="whyvpsli">
                <div className="mainwhyvpscircle">
                  <div className="circlewhyvps">✔</div>
                  <h3 className="whyvpssubhead3">RDP Browsing</h3>
                </div>
                <p className="whysubpar3">
                  Easily set up a VPN on your system using Windows VPS or
                  Hyper-V hosting.
                </p>
              </li>
              <li className="whyvpsli">
                <div className="mainwhyvpscircle">
                  <div className="circlewhyvps">✔</div>
                  <h3 className="whyvpssubhead3">RDP Browsing</h3>
                </div>
                <p className="whysubpar3">
                  Easily set up a VPN on your system using Windows VPS or
                  Hyper-V hosting.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Table  */}

        <div className="flex justify-center items-center min-h-screen p-4 mt-[50px]">
          <div className="w-full max-w-4xl">
            <table className="w-full border border-gray-400 shadow-lg border-collapse">
              <thead>
                <tr className="bg-green-600 text-white text-center"
                  style={{
                    fontFamily: "'Inter',serif",
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "20px",
                  }}
                >
                  <th className="p-3 text-left border border-gray-400">Feature</th>
                  <th className="p-3 text-left border border-gray-400">Self-Managed VPS</th>
                  <th className="p-3 text-left border border-gray-400">Fully Managed VPS</th>
                </tr>
              </thead>
              <tbody className="bg-white"
                style={{
                  fontFamily: "'Inter',serif",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                }}
              >
                <tr className="border border-gray-400">
                  <td className="p-3 border border-gray-400">Best For</td>
                  <td className="p-3 border border-gray-400">Developers, SysAdmins, Advanced Users</td>
                  <td className="p-3 border border-gray-400">Businesses, Agencies, Beginners</td>
                </tr>
                <tr className="border border-gray-400 bg-gray-50">
                  <td className="p-3 border border-gray-400">Control & Access</td>
                  <td className="p-3 border border-gray-400">Full Root Access, Complete Control</td>
                  <td className="p-3 border border-gray-400">Limited Root Access, Managed by Experts</td>
                </tr>
                <tr className="border border-gray-400">
                  <td className="p-3 border border-gray-400">Cost</td>
                  <td className="p-3 border border-gray-400">More Affordable</td>
                  <td className="p-3 border border-gray-400">Higher Due to Management Services</td>
                </tr>
                <tr className="border border-gray-400 bg-gray-50">
                  <td className="p-3 border border-gray-400">Server Setup & Configuration</td>
                  <td className="p-3 border border-gray-400">User Installs & Configures Everything</td>
                  <td className="p-3 border border-gray-400">Pre-Configured & Optimized by Provider</td>
                </tr>
                <tr className="border border-gray-400">
                  <td className="p-3 border border-gray-400">Maintenance & Updates</td>
                  <td className="p-3 border border-gray-400">User Handles Updates & Patches</td>
                  <td className="p-3 border border-gray-400">Automatic Updates & Maintenance</td>
                </tr>
                <tr className="border border-gray-400 bg-gray-50">
                  <td className="p-3 border border-gray-400">Security & Firewall</td>
                  <td className="p-3 border border-gray-400">User Sets Up Security Rules</td>
                  <td className="p-3 border border-gray-400">Fully Secured & Managed by Provider</td>
                </tr>
                <tr className="border border-gray-400">
                  <td className="p-3 border border-gray-400">Technical Support</td>
                  <td className="p-3 border border-gray-400">Limited or No Support</td>
                  <td className="p-3 border border-gray-400">24/7 Expert Support Available</td>
                </tr>
                <tr className="border border-gray-400 bg-gray-50">
                  <td className="p-3 border border-gray-400">Uptime & Monitoring</td>
                  <td className="p-3 border border-gray-400">User Needs to Monitor</td>
                  <td className="p-3 border border-gray-400">Proactive Monitoring by Provider</td>
                </tr>
                <tr className="border border-gray-400">
                  <td className="p-3 border border-gray-400">Software Installation</td>
                  <td className="p-3 border border-gray-400">User Installs & Manages Software</td>
                  <td className="p-3 border border-gray-400">Support Team Helps with Installation</td>
                </tr>
                <tr className="border border-gray-400 bg-gray-50">
                  <td className="p-3 border border-gray-400">Backup & Disaster Recovery</td>
                  <td className="p-3 border border-gray-400">Manual Setup Required</td>
                  <td className="p-3 border border-gray-400">Automated Backups & Recovery Options</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Table  End*/}
        {/* Boxes 2 */}
        <TechBoxes />
        {/* Boxes 2 End */}
        {/* Faq Com */}
        <Faq />
        {/* Faq Com End*/}

        {/* TryOutServices Com */}
        <TryoutServices />
        {/* TryOutServices Com End*/}

        {/* ContactFriedly Com */}
        <Contactfriedly />
        {/* ContactFriedly Com End*/}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default VpsServer;
