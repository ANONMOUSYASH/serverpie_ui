import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Serveinfo from "../../Components/Serverinfo";
import "../../Styles/EnvatoHosting.css";
import Hosting from "../../Components/Hosting";
import Hostingplans from "../../Components/Hostingplans";
import Migration from "../../Components/Migration";
import Faq from "../../Components/Faq";
import TryoutServices from "../../Components/TryoutServices";
import Contactfriedly from "../../Components/Contactfriedly";

const EnvatoHosting = () => {
  return (
    <div>
      <nav>{/* <Navbar /> */}</nav>
      <main>
        {/* Envvanto Hosting Hero Section */}
        <div className="max-w-[1352px] w-full h-auto mx-auto rounded-[22px] bg-gradient-to-b from-[#F4FFF7] to-[#FFFFFF] flex flex-col items-center justify-center p-6 md:p-10 lg:h-[541px]">
  <div className="max-w-[930px] w-full h-auto flex flex-col items-center gap-6">
    <div className="w-full h-auto flex flex-col items-center justify-center gap-4 text-center">
      <p className="max-w-[800px] w-full text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-bold leading-tight text-[#0E2954] font-[Inter]">
        Fast Hosting for Your Envato Themes & Plugins!
      </p>
      <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[18px] text-[#2D5087] font-[Inter]">
        Optimized for Envato WordPress themes, high-speed performance, and premium security.
      </p>
    </div>
    <div className="flex flex-wrap justify-center gap-4">
      <button className="w-[140px] sm:w-[158px] h-[45px] sm:h-[50px] rounded-[5px] p-2 sm:p-[10px] bg-[#25A75B] text-white font-bold text-[14px] sm:text-[16px] font-[Inter]">
        Get Started
      </button>
      <button className="w-[140px] sm:w-[158px] h-[45px] sm:h-[50px] rounded-[5px] p-2 sm:p-[10px] bg-white border border-[#25A75B] text-[#25A75B] font-bold text-[14px] sm:text-[16px] font-[Inter]">
        View Plans
      </button>
    </div>
  </div>
</div>


        {/* Envvanto Hosting Hero Section End*/}

        {/* Envento Second Hero com */}
        <div className="Envanttosecondheromain">
        <div className="Envanttosecondheromain1">
        <div className="Envanttosecondheromain11">
          <p className="Envantosuvpar1">Free Setup for Your Envato Scripts!</p>
          <p className="envantosuvpar2">We provide free installation and setup for any Envato script, ensuring a smooth and hassle-free start.</p>
          <div className="envantosubbtnhero2">
            <button className="envantohero21">Host My Scripts</button>
            <button className="envantohero22">Watch Video</button>
          </div>
        </div>
        <div className="Envanttosecondheromain12">
          <img src="imghero1.png" alt="" />
          <img className="img2enventohosr1" src="imghero2.png" alt="" />
          <img className="img2enventohosr12" src="imghero3.png" alt="" />
        </div>
        </div>
        </div>
        {/* Envento Second Hero com End*/}

        {/* Hosting Plan */}
              <Hosting />
         {/* Hosting Plan End*/}

        {/* Serve Info */}
              <Serveinfo />
         {/* Serve Info End*/}

        <div className="Envatomain">
          <div className="Envatosub1">
            <div className="processenvato">
              <p className="Envatopar">Process</p>
            </div>
            <div className="Envatosub11">
              <p className="Envatopar1">
                Follow Our Envato Installation Process
              </p>
              <p className="Envattopar2">
                We beat everyone, by being the only codecanyon web hosting with
                a free install service and preconfigured scripts for your Envato
                item.
              </p>
            </div>
          </div>
          <div className="Envatosub2">
            <div className="Envatosub21">
              <div className="Envatosub22">
                <div className="Envatosub23">01</div>
                <div className="Envatosub24">
                  <p className="Envatosubpar25">Signup</p>
                  <p className="Envatosubpar26">
                    Register your own UltaHost free account which will be
                    activated instantly.
                  </p>
                </div>
              </div>
            </div>
            <div className="Envatosub21">
              <div className="Envatosub222">
                <div className="Envatosub23">02</div>
                <div className="Envatosub24">
                  <p className="Envatosubpar25">Buy</p>
                  <p className="Envatosubpar26">
                    Purchase one of our best hosting plans which fit your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="Envatosub21">
              <div className="Envatosub22">
                <div className="Envatosub23">03</div>
                <div className="Envatosub24">
                  <p className="Envatosubpar25">Submit Ticket</p>
                  <p className="Envatosubpar26">
                    Open support ticket attaching your Envato item file with
                    your server details.
                  </p>
                </div>
              </div>
            </div>
            <div className="Envatosub21">
              <div className="Envatosub222">
                <div className="Envatosub23">04</div>
                <div className="Envatosub24">
                  <p className="Envatosubpar25">Get Installed</p>
                  <p className="Envatosubpar26">
                    Purchase one of our best hosting plans which fit your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hosting Solution */}
        <Hostingplans />
        {/* Hosting Solution End */}
        {/* Migration */}
        <Migration />
        {/* Migration End */}

        <div className="timecommain">
        <div className="timecommainbox1">
          <div className="timesubbox1"></div>
          <div className="timesubboxpar1">
            <p className="timepar1">No Time Lost</p>
            <p className="timepar2">Reliable hosting with 99.9% uptime guarantee for uninterrupted online presence.</p>
          </div>
        </div>
        <div className="timecommainbox1">
        <div className="timesubbox1"></div>
          <div className="timesubboxpar1">
            <p className="timepar1">Stay Online</p>
            <p className="timepar2">Fast, secure hosting keeps website accessible to visitors worldwide.</p>
          </div>
        </div>
        <div className="timecommainbox1">
        <div className="timesubbox1"></div>
          <div className="timesubboxpar1">
            <p className="timepar1">Daily Backup</p>
            <p className="timepar2">Daily website data backups for peace of mind and easy restoration.</p>
          </div>
        </div>
        </div>

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

export default EnvatoHosting;
