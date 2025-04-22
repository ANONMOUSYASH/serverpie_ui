import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "../../Styles/DedicatedHosting.css";
import { FaCheck } from "react-icons/fa6";
import Hosting from "../../Components/Hosting";
import Faq from "../../Components/Faq";
import HostingSolution from "../../Components/HostingSolution";
import Hostingplans from "../../Components/Hostingplans";
import TryoutServices from "../../Components/TryoutServices";
import Contactfriedly from "../../Components/Contactfriedly";
import { IoEarthOutline } from "react-icons/io5";
import ScrollToTopButton from "../../Components/ScrollToToButton";
import DedicatedHost from "../../Components/DedicatedHost";

const DedicatedHosting = () => {
  return (
    <div>
      {/* --------------------------------- Main Content --------------------------------- */}
      <main>

        {/* ===================== HERO SECTION ===================== */}
        <div className="dedicatedhostmain">
          <div className="dedicatedhostmain1">
            <p className="dedicatedhostpar1">Exclusive Performance with Our Dedicated Hosting</p>
            <p className="dedicatedhostpar2">
              Enjoy isolated resources, top-notch security, and ultimate control with our dedicated hosting plans
            </p>
            <div className="dedicatedhostbtn">
              <button className="dedicatedhostbtn1">Get Stated</button>
              <button className="dedicatedhostbtn2">View Plans</button>
            </div>
          </div>
        </div>

        {/* ===================== HERO IMAGE WITH CONTENT ===================== */}
        <div className="dedicatedheroimgmain">
          {/* Left Side Image */}
          <div className="dedicatedheroimgmain1"></div>

          {/* Right Side Content */}
          <div className="dedicatedheroimgmain2">
            <div className="dedicatedheroimgmain3">
              <p className="dedicatedheroimgpar1">Advanced features for the advanced user</p>
              <p className="dedicatedheroimgpar2">
                Focus on your business and avoid all the web hosting managed hosting guarantees unmatched performance, reliability and choice with 24/7 support.
              </p>
              <p className="dedicatedheroimgpar3">Advance Feature</p>
              <hr className="dedicatedhosthr1" />
            </div>

            {/* Feature List */}
            <div className="dedicatedheroimgmain4">
              <ul className="dedicatedhostul">
                {[
                  "Unlimited Free SSL Certificates.",
                  "Unlimited Bandwidth",
                  "Unlimited MySQL Databases",
                  "Unlimited Subdomains",
                  "Unlimited FTP/SFTP Accounts.",
                  "Unlimited Mail accounts",
                  "Unlimited Scheduled Tasks",
                  "Dedicated Support"
                ].map((item, index) => (
                  <li key={index}>
                    <div className="dedicatedsubimgparmain">
                      <div className="icondsedicatedhost">
                        <FaCheck className="checkdedicated" />
                      </div>
                      <p className="dedicatedsuvhostpar1">{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ===================== HOSTING PLAN ===================== */}
        <DedicatedHost />

        {/* ===================== HOSTING SOLUTIONS ===================== */}
        <Hostingplans />

        {/* ===================== OUR ADDON SERVICES ===================== */}
        <div className="mainserve">
          <p className="ourparmainsub">Our Addon That will help You </p>

          {/* Decorative Line and Circles */}
          <div className="subserve">
            {Array(4).fill().map((_, i) => (
              <React.Fragment key={i}>
                <hr className={`minihr${i || ''}`} />
                <div className="circlezero">
                  <div className="circlezeromini"></div>
                </div>
              </React.Fragment>
            ))}
            <hr className="minihr" />
          </div>

          {/* Addon Cards */}
          <div className="minisubserve">
            {[
              {
                title: "Dedicated Ip",
                desc: "Switching to Serverpie is quick and easy...",
              },
              {
                title: "Abuse Protection",
                desc: "Pay no extra charges for the registration of an SSL certificate...",
              },
              {
                title: "360 Monitering",
                desc: "Our Support Team is Certified & Trained...",
              },
              {
                title: "Click Installer",
                desc: "Simple and quick installation of your favorite CMS app...",
              },
            ].map((item, i) => (
              <div className="subminiservebox1" key={i}>
                <div className="earthserve">
                  <IoEarthOutline className="webearth" />
                </div>
                <div className="parserve">
                  <p className="servepar1">{item.title}</p>
                  <p className="servepar2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== TECHNOLOGIES SECTION ===================== */}
        <div className="technologymain">
          {/* First Row */}
          <div className="technologysub1">
            {["wordpress", "Whmcs", "Mangento", "Laravel", "Druple", "Joomla"].map((tech, i) => (
              <div className="technologysub11" key={i}>
                <div className="technologyminibox">
                  <img src={`/${String(i + 1).padStart(2, '0')}icon.png`} alt="" />
                </div>
                <p className="technologypar1">{tech}</p>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="technologysub2">
            {["Python", "wordpress", "PrestaShop", "Django", "React", "Node js"].map((tech, i) => (
              <div className="technologysub11" key={i}>
                <div className="technologyminibox">
                  <img src={`/${String(i + 7).padStart(2, '0')}icon.png`} alt="" />
                </div>
                <p className="technologypar1">{tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== FAQ SECTION ===================== */}
        <Faq />

        {/* ===================== TRY OUT SERVICES SECTION ===================== */}
        <TryoutServices />

        {/* ===================== CONTACT FRIENDLY SECTION ===================== */}
        <Contactfriedly />

      </main>

      {/* --------------------------------- Footer --------------------------------- */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DedicatedHosting;
