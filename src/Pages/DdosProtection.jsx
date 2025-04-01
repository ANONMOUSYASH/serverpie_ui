import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Attacks from "../Components/Attacks";
import Migration from "../Components/Migration";
import Hostingplans from "../Components/Hostingplans";
import DdosAttacks from "../Components/DdosAttacks";
import Faq from "../Components/Faq";
import WorkingStaps from "../Components/WorkingSteps";

const DdosProtection = () => {
  return (
    <div>
      <nav>{/* <Navbar /> */}</nav>
      <main>
        <div className="w-auto h-[372px] flex flex-row items-center gap-[40px] m-auto text-start pt-[50px]">
          <div className="flex flex-col gap-[15px] w-[780px]">
            <p
              className="font-medium text-[64px] leading-[66px] tracking-[-3%] capitalize text-[#083376] text-start"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get enterprise-grade DDoS protection
            </p>
            <p
              className="w-[520px] font-normal text-[16px] leading-[25px] text-start text-[#2D5087]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Affordable, reliable, and optimized for speed – Perfect for blogs,
              startups, and businesses. Get free SSL, cPanel, and 24/7 expert
              support!
            </p>
            <div className="w-[425px] h-[50px] flex gap-[16px]">
              <button
                className="w-[226px] h-[50px] border-[1px] border-[#3973E6] rounded-[5px] text-[#ffffff] bg-[#3973E6] font-bold text-[16px] leading-[36px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Buy Now
              </button>
              <button
                className="w-[226px] h-[50px] border-[1px] border-[#3973E6] rounded-[5px] text-[#3973E6] bg-[#ffffff] font-bold text-[16px] leading-[36px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Connect With Expert
              </button>
            </div>
          </div>
          <div
            className="w-[300px] h-[372px] flex items-center justify-center"
            style={{
              background:
                "linear-gradient(281.84deg, #ECF2FF 5.58%, #FFFFFF 40.75%)",
            }}
          >
            <img src="chim.png" alt="" className="w-auto h-auto" />
          </div>
        </div>

        <WorkingStaps />

        {/* Form */}
        <div className="flex flex-row items-start justify-between p-10 bg-white m-auto">
          <div className="w-1/2 pr-10">
            <p
              className="w-[550px] text-[48px] font-medium text-[#083376] leading-tight"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Secure Your Website with Expert Anti-DDoS Solutions
            </p>
            <p
              className="w-[425px] text-[#2D5087] mt-4 font-normal"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Looking for powerful DDoS protection? Connect with us first
              through our contact form for a personalized consultation and get
              the best security solutions tailored to your needs.
            </p>
            <div className="w-[507px] h-[204px] mt-12 p-4 bg-[#ECF2FF] rounded-lg">
              <p
                className="font-medium text-[#083376] text-[24px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Still Confused?
              </p>
              <p
                className="text-[#2D5087] mt-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                See the Real Experiences of Our Past Clients and How Our
                Solutions Helped Them Grow
              </p>
              <button
                className="w-[178px] h-[46px] font-bold bg-[#3973E6] text-[#ffffff]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  borderRadius: "45px",
                }}
              >
                See Reviews
              </button>
            </div>
          </div>

          <div className="w-1/2 bg-white p-6 shadow-lg rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-[16px] font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  First Name:
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  className="block text-[16px] font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                  placeholder=""
                />
              </div>
              <div>
                <label
                  className="block text-[16px] font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Company:
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                />
              </div>
              <div>
                <label
                  className="block text-[16px] font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Job Title:
                </label>
                <select className="w-full border p-2 rounded-md hover:border-[#3973E6]">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-[16px] font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Company Email:
                </label>
                <input
                  type="email"
                  className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                />
              </div>
              <div>
                <label
                  className="block text-[16px] font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Phone Number:
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                />
              </div>
              <div>
                <label
                  className="block text-[16px] font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Country:
                </label>
                <select className="w-full border p-2 rounded-md hover:border-[#3973E6]">
                  <option>INDIA</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-[16px] font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Domain:
                </label>
                <input
                  type="text"
                  className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                className="block text-[16px] font-normal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Brief Problem Description:
              </label>
              <textarea
                className="w-full border p-2 rounded-md hover:border-[#3973E6]"
                rows="3"
              ></textarea>
            </div>

            <p
              className="text-xs text-[#2D5087] mt-2 text-[13px] font-normal"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
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

        {/* Exclusive perk */}
        <div className="w-[1276px] h-[534px] flex flex-col gap-[67px] m-auto">
          <p
            className="w-[780px] text-start font-medium text-[64px] text-[#083376]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get <span className="text-[#3973E6]">exclusive perks</span> with
            ServerPie DDoS protection
          </p>
          <div className="w-[1278px] h-[313px] flex gap-[24px]">
            <div className="w-[301px] h-[313px] rounded-[26px] border-[1px] border-[#E7E6E6]  hover:border-[#3973E6] hover:border-[3px]">
              <div className="w-[227px] h-[235px] flex flex-col items-center justify-center m-auto">
                <img className="pt-[50px]" src="phone1.png" alt="" />
                <p
                  className="font-medium pt-[20px] text-[20px] text-[#0E2954]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Instant Call Support{" "}
                </p>
                <p
                  className="font-normal text-[12px] text-center textt-[#2D5087]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Get instant problem resolution through personalized support
                  from our DevOps team—not just a regular support team! Connect
                  with us via WhatsApp or direct call for immediate assistance.
                </p>
              </div>
            </div>
            <div className="w-[301px] h-[313px] rounded-[26px] border-[1px] border-[#E7E6E6]  hover:border-[#3973E6] hover:border-[3px]">
              <div className="w-[227px] h-[235px] flex flex-col items-center justify-center m-auto">
                <img className="pt-[50px]" src="phone2.png" alt="" />
                <p
                  className="font-medium pt-[20px] text-[20px] text-[#0E2954]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Scale Planning{" "}
                </p>
                <p
                  className="font-normal text-[12px] text-center textt-[#2D5087]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  We help you scale your website professionally with top
                  security for smooth market operation, tailored to your budget
                  and needs.
                </p>
              </div>
            </div>
            <div className="w-[301px] h-[313px] rounded-[26px] border-[1px] border-[#E7E6E6]  hover:border-[#3973E6] hover:border-[3px]">
              <div className="w-[227px] h-[235px] flex flex-col items-center justify-center m-auto">
                <img className="pt-[50px]" src="phone3.png" alt="" />
                <p
                  className="font-medium pt-[20px] text-[20px] text-[#0E2954]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Developer Support{" "}
                </p>
                <p
                  className="font-normal text-[12px] text-center textt-[#2D5087]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Facing errors due to protection, API blocks, or special
                  requests? Our developers are here to assist you instantly!
                </p>
              </div>
            </div>
            <div className="w-[301px] h-[313px] rounded-[26px] border-[1px] border-[#E7E6E6]  hover:border-[#3973E6] hover:border-[3px]">
              <div className="w-[227px] h-[235px] flex flex-col items-center justify-center m-auto">
                {/* <img src="phone5.png" alt="" /> */}
                <img className="pt-[50px]" src="phone4.png" alt="" />
                <p
                  className="font-medium pt-[20px] text-[20px] text-[#0E2954] text-center"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  On Demand Customization
                </p>
                <p
                  className="font-normal text-[12px] text-center textt-[#2D5087]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  We're here when you need us! Our DDoS protection plans are
                  highly customizable to fit your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Exclusive perk End*/}
        {/* Form End */}
        <Attacks />

        {/* Protection Work */}

        <div className="w-[1437px] h-[925px] bg-[#EDF8FF80] m-auto items-center flex flex-col gap-[40px]">
          <p
            className="font-medium text-[40px] leading-[82px] tracking-[-3%] capitalize align-middle text-center"
            style={{
              fontFamily: "'Inter', sans-serif",
              background:
                "linear-gradient(0deg, #0E2954, #0E2954), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: "50px auto",
            }}
          >
            How our protection works
          </p>
          <img className="ml-[80px]" src="circleitems.png" alt="" />
        </div>
        {/* Protection Work End */}

        {/* Cpu Compare */}
            <div className="flex m-auto gap-[80px] items-center justify-center">
              <img src="cpus.png" alt="" />
              <div className="flex flex-col w-[727px] h-[352px] m-auto text-start justify-center pl-[10%] pt-[50px]">
                <p className="font-medium text-[64px]  text-[#083376]" style={{fontFamily: "'Inter', sans-serif", letterSpacing: "-5%",lineHeight: "63px",}}>Have Peace Of Mind With Free Migration</p>
                <p className="w-[616px] font-normal text-[16px] text-[#2D5087]" style={{fontFamily: "'Inter', sans-serif", letterSpacing: "0%",lineHeight: "24px",}}>Want to transfer your website to EzerHost? We've got you covered. Our website igration experts do everything on your behalf. This is free of charge and with almost no downtime.</p>
                <p className="font-normal text-[16px] text-[#2D5087]" style={{fontFamily: "'Inter', sans-serif", letterSpacing: "0%",lineHeight: "24px",}}>We make sure transfer or upgrading to a dedicated server is smooth!</p>
                <button className="w-[194px] h-[50px] rounded-[5px] p-[10px] bg-[#3973E6] text-[#ffffff] font-medium text-[20px] " style={{fontFamily: "'Inter', sans-serif", letterSpacing: "0%",lineHeight: "18px", marginTop: "20px",}}>Migrate Now</button>
              </div>
            </div>
        {/* Cpu Compare End */}
        {/* <Migration /> */}
        <DdosAttacks />
        {/* Hosting Plans */}
        {/* <Hostingplans /> */}
        {/* Hosting Plans End */}
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
