import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Attacks from "../Components/Attacks";
import Migration from "../Components/Migration";
import Hostingplans from "../Components/Hostingplans";
import DdosAttacks from "../Components/DdosAttacks";
import Faq from "../Components/Faq";
import WorkingStaps from "../Components/WorkingSteps";
import Trusted from "../Components/Trusted";
import ResellerSolution from "../Components/ResellerSolution";

const DdosProtection = () => {
  return (
    <div>
      <main>
        <div
          className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-[40px] m-auto text-start pt-[100px] px-4 lg:px-0"
          style={{
            background:
              "linear-gradient(281.84deg, #ECF2FF 5.58%, #FFFFFF 40.75%)",
          }}
        >
          <div className="flex flex-col mt-[8%] gap-4 lg:gap-[15px] w-[802px]  ml-[94px] text-start ">
            <p className="font-medium  text-3xl md:text-4xl lg:text-[64px] leading-[40px] md:leading-[50px] lg:leading-[66px] tracking-[-3%] capitalize text-[#083376] text-left lg:text-start">
              Get enterprise-grade DDoS protection
            </p>
            <p className="w-full md:w-[520px] font-normal text-sm md:text-base leading-5 md:leading-[25px] text-start text-[#2D5087]">
              Affordable, reliable, and optimized for speed – Perfect for blogs,
              startups, and businesses. Get free SSL, cPanel, and 24/7 expert
              support!
            </p>
            <div className="w-full lg:w-[425px] h-auto flex flex-col md:flex-row gap-4 md:gap-[16px]">
              <button className="w-full md:w-[226px] h-[50px] border border-[#3973E6] rounded-[5px] text-white bg-[#3973E6] font-bold text-base leading-[36px]">
                Buy Now
              </button>
              <button className="w-full md:w-[226px] h-[50px] border border-[#3973E6] rounded-[5px] text-[#3973E6] bg-white font-bold text-base leading-[36px]">
                Connect With Expert
              </button>
            </div>
          </div>
       
        </div>

        {/* Hero End */}

        <WorkingStaps />

        {/* Form */}
        <div className="flex flex-col lg:flex-row items-start justify-between p-6 lg:p-10 bg-white m-auto gap-6">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-10">
            <p className="w-full lg:w-[550px] text-2xl md:text-4xl lg:text-[48px] font-medium text-[#083376] leading-tight">
              Secure Your Website with Expert Anti-DDoS Solutions
            </p>
            <p className="w-full lg:w-[425px] text-[#2D5087] mt-4 font-normal text-sm md:text-base">
              Looking for powerful DDoS protection? Connect with us first
              through our contact form for a personalized consultation and get
              the best security solutions tailored to your needs.
            </p>
            <div className="w-full lg:w-[507px] h-auto mt-8 p-4 bg-[#ECF2FF] rounded-lg">
              <p className="font-medium text-[#083376] text-lg md:text-[24px]">
                Still Confused?
              </p>
              <p className="text-[#2D5087] mt-2 text-sm md:text-base">
                See the Real Experiences of Our Past Clients and How Our
                Solutions Helped Them Grow
              </p>
              <button className="w-full md:w-[178px] h-[46px] font-bold bg-[#3973E6] text-white rounded-[45px] mt-4">
                See Reviews
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-white p-6 shadow-lg rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm md:text-[16px] font-normal">
                  First Name:
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                />
              </div>
              <div>
                <label className="block text-sm md:text-[16px] font-normal">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                />
              </div>
              <div>
                <label className="block text-sm md:text-[16px] font-normal">
                  Company:
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                />
              </div>
              <div>
                <label className="block text-sm md:text-[16px] font-normal">
                  Job Title:
                </label>
                <select className="w-full border p-2 rounded-md hover:border-[#3973E6]">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-sm md:text-[16px] font-normal">
                  Company Email:
                </label>
                <input
                  type="email"
                  className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                />
              </div>
              <div>
                <label className="block text-sm md:text-[16px] font-normal">
                  Phone Number:
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                />
              </div>
              <div>
                <label className="block text-sm md:text-[16px] font-normal">
                  Country:
                </label>
                <select className="w-full border p-2 rounded-md hover:border-[#3973E6]">
                  <option>INDIA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm md:text-[16px] font-normal">
                  Domain:
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm md:text-[16px] font-normal">
                Brief Problem Description:
              </label>
              <textarea
                className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                rows="3"
              ></textarea>
            </div>

            <p className="text-xs text-[#2D5087] mt-2 text-[13px] font-normal">
              Radware respects your privacy and will only use your personal
              information to contact you about new product information, sales
              offers, research, and invitations to events.
            </p>

            <div className="mt-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm font-semibold">I agree</label>
            </div>

            <button className="w-full mt-4 bg-[#3973E6] text-white p-3 rounded-md font-bold">
              GET HELP NOW
            </button>
          </div>
        </div>

        {/* Exclusive Perks Section */}
        <div className="w-full max-w-[1276px] flex flex-col gap-8 md:gap-12 mx-auto px-4">
          <p
            className="w-full text-start font-medium text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] text-[#083376] leading-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get <span className="text-[#3973E6]">exclusive perks</span> with
            ServerPie DDoS protection
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            {/* Card Component */}
            {[
              {
                img: "phone1.png",
                title: "Instant Call Support",
                desc: "Get instant problem resolution through personalized support from our DevOps team—not just a regular support team! Connect with us via WhatsApp or direct call for immediate assistance.",
              },
              {
                img: "phone2.png",
                title: "Scale Planning",
                desc: "We help you scale your website professionally with top security for smooth market operation, tailored to your budget and needs.",
              },
              {
                img: "phone3.png",
                title: "Developer Support",
                desc: "Facing errors due to protection, API blocks, or special requests? Our developers are here to assist you instantly!",
              },
              {
                img: "phone4.png",
                title: "On Demand Customization",
                desc: "We're here when you need us! Our DDoS protection plans are highly customizable to fit your specific requirements.",
              },
            ].map((perk, index) => (
              <div
                key={index}
                className="w-[300px] h-[350px] rounded-[26px] border border-[#E7E6E6] hover:border-[#3973E6] hover:border-2 transition-all duration-300 mx-auto p-2 flex flex-col items-center text-center"
              >
                <img
                  className="w-auto h-auto md:w-16 md:h-16 lg:w-auto lg:h-auto pt-4"
                  src={perk.img}
                  alt={perk.title}
                />
                <p
                  className="font-medium pt-4 text-[16px] sm:text-[18px] md:text-[20px] text-[#0E2954]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {perk.title}
                </p>
                <p
                  className="font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] text-[#2D5087] mt-2 leading-snug"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Exclusive Perks Section End */}

        {/* Form End */}
        <Attacks />

        {/* Protection Work Section */}
        <div className="w-full max-w-[1437px] bg-[#EDF8FF80] flex flex-col items-center gap-6 md:gap-10 py-10 md:py-16 mx-auto">
          <p
            className="font-medium text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              background:
                "linear-gradient(0deg, #0E2954, #0E2954), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            How our protection works
          </p>

          {/* Image Container */}
          <div className="w-full flex justify-center px-4">
            <img
              className="w-full max-w-[90%] md:max-w-[75%] lg:max-w-[60%] ml-[10%]"
              src="protection.svg"
              alt="Protection Process"
            />
          </div>
        </div>
        {/* Protection Work Section End */}

        {/* Cpu Compare */}
        <div className="flex flex-col lg:flex-row m-auto gap-8 lg:gap-[80px] items-center justify-center px-4 py-10">
          <img
            src="cpus.png"
            alt="CPU Compare"
            className="w-full max-w-[600px] lg:max-w-[50%]"
          />

          <div className="flex flex-col w-full lg:w-[727px] h-auto text-start justify-center pl-4 lg:pl-[10%] pt-[30px] lg:pt-[50px]">
            <p
              className="font-medium text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-[#083376] tracking-[-2%] lg:tracking-[-5%] leading-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Have Peace Of Mind With Free Migration
            </p>

            <p
              className="w-full lg:w-[616px] font-normal text-[14px] sm:text-[16px] text-[#2D5087] leading-[24px] mt-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Want to transfer your website to EzerHost? We've got you covered.
              Our website migration experts do everything on your behalf. This
              is free of charge and with almost no downtime.
            </p>

            <p
              className="font-normal text-[14px] sm:text-[16px] text-[#2D5087] leading-[24px] mt-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We make sure transfer or upgrading to a dedicated server is
              smooth!
            </p>

            <button
              className="w-[194px] h-[50px] rounded-[5px] bg-[#3973E6] text-[#ffffff] font-medium text-[18px] sm:text-[20px] mt-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Migrate Now
            </button>
          </div>
        </div>
        {/* Trusted */}
        <Trusted />
        <ResellerSolution />
        {/* Trusted End */}
        {/* Cpu Compare End */}

        {/* <Migration /> */}
        <DdosAttacks />
        
        {/* <Hostingplans /> */}
        
        {/* Faq */}
        <Faq />
        {/* Faq End */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DdosProtection;
