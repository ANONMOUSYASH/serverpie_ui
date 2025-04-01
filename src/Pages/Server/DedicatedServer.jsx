import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Migration from "../../Components/Migration";
import TechBoxes from "../../Components/TechBoxes";
import DedicatedBox from "../../Components/DedicatedBox";
import ServerFeatures from "../../Components/ServerFeatures";
import FilterTable from "../../Components/FilterTable";
import ResellerOptions from "../../Components/Reselleroptions";

const DedicatedServer = () => {
  return (
    <div>
      <nav>{/* <Navbar /> */}</nav>
      <main>
        {/* Hero Start */}
        <div className="w-full max-w-[1197px] h-auto mx-auto flex flex-col lg:flex-row gap-[40px] lg:gap-[82px] px-4 lg:px-0">
          <div className="w-full lg:w-[658px] h-auto flex flex-col gap-[20px] lg:gap-[39px]">
            <div className="w-full lg:w-[658px] h-auto flex flex-col gap-[15px] lg:gap-[25px]">
              <p className="font-normal text-[#2D5087]"
                style={{
                  fontFamily: "'Inter', serif",
                  fontSize: "12px",
                  lineHeight: "15px",
                }}>
                Self Managed Dedicated Server Hosting Get high-powered
              </p>
              <p className="font-bold text-[#0E2954] border-[#00000033]"
                style={{
                  fontFamily: "'Poppins', serif",
                  fontSize: "64px",
                  lineHeight: "68px",
                }}>
                Get high-powered Dedicated Server Hosting.
              </p>
              <p className="w-full lg:w-[530px] font-normal text-[#2D5087]"
                style={{
                  fontFamily: "'Inter', serif",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}>
                With Serverpie Dedicated Hosting, whether you use the Website
                Builder or traditional WordPress, you get all the features,
                tools, and guidance you need to build and launch truly
                impressive WordPress websites.
              </p>
            </div>
            <div className="w-full lg:w-[434px] h-auto flex flex-col gap-[20px] lg:gap-[32px] mt-[15px]">
            <div className="w-[287px] h-[40px] flex gap-[20px]">
            <img src="circle3.png" alt="" />
                <div className="w-auto flex flex-col">
                  <p className="font-bold text-[#0E2954] border-[#00000033]"
                    style={{
                      fontFamily: "'Inter', serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                    }}>
                    +100k
                  </p>
                  <p className="font-normal text-[#2D5087]"
                    style={{
                      fontFamily: "'Inter', serif",
                      fontSize: "14px",
                      lineHeight: "17px",
                      marginTop: "-10px",
                    }}>
                    Hosting Server Worldwide
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[434px] h-auto flex flex-col md:flex-row gap-[16px] lg:gap-[24px]">
                <button className="w-full md:w-[194px] h-[50px] rounded-[5px] p-[10px] bg-[#25A75B] font-bold text-[#ffffff]"
                  style={{
                    fontFamily: "'Inter', serif",
                    fontSize: "16px",
                    lineHeight: "18px",
                  }}>
                  Choose a Plan
                </button>
                <button className="w-full md:w-[194px] h-[50px] rounded-[5px] p-[10px] font-bold text-[#25A75B] border-[1px] border-[#25A75B]"
                  style={{
                    fontFamily: "'Inter', serif",
                    fontSize: "16px",
                    lineHeight: "18px",
                  }}>
                  Sign-up Free Trial
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[457px] h-[300px] lg:h-[398px] rounded-[24px] bg-[#F6F6F6]"></div>
        </div>

        {/* Hero End */}
        {/* Hero Section 2 */}
        <div className="w-full max-w-[997px] h-auto flex flex-col gap-[32px] mx-auto items-center justify-center px-4">
  <p className="font-bold text-[#0E2954] text-center"
    style={{
      fontFamily: "'Inter',serif",
      fontSize: "32px",
      lineHeight: "39px",
    }}
  >
    Your Choice of <span className="text-[#25A75B]">Operating System</span>
  </p>
  <div className="w-full max-w-[997px] h-auto p-[10px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[10px]">
    <div className="w-full max-w-[182px] h-[120px] rounded-[12px] border-[2px] p-[10px] border-[#CAF3DB] flex items-center justify-center">
      <img className="w-auto h-auto" src="icon001.png" alt="" />
    </div>
    <div className="w-full max-w-[182px] h-[120px] rounded-[12px] border-[2px] p-[10px] border-[#CAF3DB] flex items-center justify-center">
      <img className="w-auto h-auto" src="icon002.png" alt="" />
    </div>
    <div className="w-full max-w-[182px] h-[120px] rounded-[12px] border-[2px] p-[10px] border-[#CAF3DB] flex items-center justify-center">
      <img className="w-auto h-auto" src="icon003.png" alt="" />
    </div>
    <div className="w-full max-w-[182px] h-[120px] rounded-[12px] border-[2px] p-[10px] border-[#CAF3DB] flex items-center justify-center">
      <img className="w-auto h-auto" src="icon004.png" alt="" />
    </div>
    <div className="w-full max-w-[182px] h-[120px] rounded-[12px] border-[2px] p-[10px] border-[#CAF3DB] flex items-center justify-center">
      <img className="w-auto h-auto" src="icon005.png" alt="" />
    </div>
  </div>
</div>

         {/* Hero Section 2 End*/}

         {/* Fillter Table */}
         <FilterTable/>

          {/* Fillter Table End*/}

          {/* Dedicated Box */}

            <DedicatedBox />

          {/* Dedicated Box End*/}
          <ResellerOptions />

          {/* Migration Start */}
              <Migration />
          {/* Migration End */}

          {/* Server Featurs */}
         <ServerFeatures />
          {/* Server Featurs End*/}

          {/* Boxes 2 */}
          <TechBoxes />
        {/* Boxes 2 End */}

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DedicatedServer;
