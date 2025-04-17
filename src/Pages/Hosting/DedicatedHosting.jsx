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
      
      <main>
        {/* Hero Contant */}
        <div className="dedicatedhostmain">
          <div className="dedicatedhostmain1">
            <p className="dedicatedhostpar1">
              Exclusive Performance with Our Dedicated Hosting
            </p>
            <p className="dedicatedhostpar2">
              Enjoy isolated resources, top-notch security, and ultimate control
              with our dedicated hosting plans
            </p>
            <div className="dedicatedhostbtn">
              <button className="dedicatedhostbtn1">Get Stated</button>
              <button className="dedicatedhostbtn2">View Plans</button>
            </div>
          </div>
        </div>
        {/* Hero Contant End */}
        {/* Hero image with contant */}
        <div className="dedicatedheroimgmain">
          <div className="dedicatedheroimgmain1"></div>
          <div className="dedicatedheroimgmain2">
            <div className="dedicatedheroimgmain3">
              <p className="dedicatedheroimgpar1">
                Advanced features for the advanced user
              </p>
              <p className="dedicatedheroimgpar2">
                Focus on your business and avoid all the web hosting managed
                hosting guarantees unmatched performance, reliability and choice
                with 24/7 support.{" "}
              </p>
              <p className="dedicatedheroimgpar3">Advance Feature</p>
              <hr className="dedicatedhosthr1" />
            </div>
            <div className="dedicatedheroimgmain4">
              <ul className="dedicatedhostul">
                <li className="dedicatedhostli">
                  <div className="dedicatedsubimgparmain">
                    <div className="icondsedicatedhost">
                      <FaCheck className="checkdedicated" />
                    </div>
                    <p className="dedicatedsuvhostpar1">
                      Unlimited Free SSL Certificates.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="dedicatedsubimgparmain">
                    <div className="icondsedicatedhost">
                      <FaCheck className="checkdedicated" />
                    </div>
                    <p className="dedicatedsuvhostpar1">Unlimited Bandwidth</p>
                  </div>
                </li>
                <li>
                  <div className="dedicatedsubimgparmain">
                    <div className="icondsedicatedhost">
                      <FaCheck className="checkdedicated" />
                    </div>
                    <p className="dedicatedsuvhostpar1">
                      Unlimited MySQL Databases
                    </p>
                  </div>
                </li>
                <li>
                  <div className="dedicatedsubimgparmain">
                    <div className="icondsedicatedhost">
                      <FaCheck className="checkdedicated" />
                    </div>
                    <p className="dedicatedsuvhostpar1">Unlimited Subdomains</p>
                  </div>
                </li>
                <li>
                  <div className="dedicatedsubimgparmain">
                    <div className="icondsedicatedhost">
                      <FaCheck className="checkdedicated" />
                    </div>
                    <p className="dedicatedsuvhostpar1">
                      Unlimited FTP/SFTP Accounts.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="dedicatedsubimgparmain">
                    <div className="icondsedicatedhost">
                      <FaCheck className="checkdedicated" />
                    </div>
                    <p className="dedicatedsuvhostpar1">
                      Unlimited Mail accounts
                    </p>
                  </div>
                </li>
                <li>
                  <div className="dedicatedsubimgparmain">
                    <div className="icondsedicatedhost">
                      <FaCheck className="checkdedicated" />
                    </div>
                    <p className="dedicatedsuvhostpar1">
                      Unlimited Scheduled Tasks
                    </p>
                  </div>
                </li>
                <li>
                  <div className="dedicatedsubimgparmain">
                    <div className="icondsedicatedhost">
                      <FaCheck className="checkdedicated" />
                    </div>
                    <p className="dedicatedsuvhostpar1">Dedicated Support </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Hero image with contant */}
        {/* Hosting Plan */}
        <DedicatedHost />
        {/* Hosting Plan End */}
        {/* Hosting Solution */}
        <Hostingplans />
        {/* Hosting Solution End */}
        {/* Uur Addopt */}
        <div className="mainserve">
          <p className="ourparmainsub">Our Addon That will help You </p>
          <div className="subserve">
            <hr className="minihr" />
            <div className="circlezero">
              <div className="circlezeromini"></div>
            </div>
            <hr className="minihr1" />
            <div className="circlezero">
              <div className="circlezeromini"></div>
            </div>
            <hr className="minihr2" />
            <div className="circlezero">
              <div className="circlezeromini"></div>
            </div>
            <hr className="minihr3" />
            <div className="circlezero">
              <div className="circlezeromini"></div>
            </div>
            <hr className="minihr" />
            {/* <div className="circlezero">
                     <div className="circlezeromini"></div>
                     </div> */}
          </div>
          <div className="minisubserve">
            <div className="subminiservebox1">
              <div className="earthserve">
                <IoEarthOutline className="webearth" />
              </div>
              <div className="parserve">
                <p className="servepar1">Dedicated Ip</p>
                <p className="servepar2">
                  Switching to Serverpie is quick and easy ,we offer first-time
                  migrations for FREE, and our migrations for FREE, and our
                  expert migration team will move your website swiftly to us in
                  no time
                </p>
              </div>
            </div>
            <div className="subminiservebox1">
              <div className="earthserve">
                <IoEarthOutline className="webearth" />
              </div>
              <div className="parserve">
                <p className="servepar1">Abuse Protectionv</p>
                <p className="servepar2">
                  Pay no extra charges for the registration of an SSL
                  certificate. Serverpie grants free SSL certificates for every
                  website from Let's Encrypt with your hosting plan
                </p>
              </div>
            </div>
            <div className="subminiservebox1">
              <div className="earthserve">
                <IoEarthOutline className="webearth" />
              </div>
              <div className="parserve">
                <p className="servepar1">360 Monitering </p>
                <p className="servepar2">
                  Our Support Team is Certified & Trained with deep expertise in
                  solving all technical issues promptly and effeciently
                </p>
              </div>
            </div>
            <div className="subminiservebox1">
              <div className="earthserve">
                <IoEarthOutline className="webearth" />
              </div>
              <div className="parserve">
                <p className="servepar1">Click Installer</p>
                <p className="servepar2">
                  Simple and quick installation of your favorite CMS app! With
                  Softaculous one-click installer, you can install apps like
                  WordPress, Joomla, PHP and 400+ similar ones in just a
                  single-click.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Uur Addopt End */}
        {/* Technologies  */}
        <div className="technologymain">
          <div className="technologysub1">
            <div className="technologysub11">
              <div className="technologyminibox">
                <img src="/01icon.png" alt="" />
              </div>
              <p className="technologypar1">wordpress</p>
            </div>
            <div className="technologysub11">
            <div className="technologyminibox">
            <img src="/02icon.png" alt="" />
            </div>
            <p className="technologypar1">Whmcs</p>
            </div>
            <div className="technologysub11">
            <div className="technologyminibox">
            <img src="/03icon.png" alt="" />
            </div>
            <p className="technologypar1">Mangento</p>
            </div>
            <div className="technologysub11">
            <div className="technologyminibox">
            <img src="/04icon.png" alt="" />
            </div>
            <p className="technologypar1">Laravel</p>
            </div>
            <div className="technologysub11">
            <div className="technologyminibox">
            <img src="/05icon.png" alt="" />
            </div>
            <p className="technologypar1">Druple</p>
            </div>
            <div className="technologysub11">
            <div className="technologyminibox">
            <img src="/06icon.png" alt="" />
            </div>
            <p className="technologypar1">Joomla</p>
            </div>
          </div>
          <div className="technologysub2">
          <div className="technologysub11">
              <div className="technologyminibox">
              <img src="/07icon.png" alt="" />
              </div>
              <p className="technologypar1">Python</p>
            </div>
            <div className="technologysub11">
              <div className="technologyminibox">
              <img src="/08icon.png" alt="" />
              </div>
              <p className="technologypar1">wordpress</p>
            </div>
            <div className="technologysub11">
              <div className="technologyminibox">
              <img src="/09icon.png" alt="" />
              </div>
              <p className="technologypar1">PrestaShop</p>
            </div>
            <div className="technologysub11">
              <div className="technologyminibox">
              <img src="/10icon.png" alt="" />
              </div>
              <p className="technologypar1">Django</p>
            </div>
            <div className="technologysub11">
              <div className="technologyminibox">
              <img src="/11icon.png" alt="" />
              </div>
              <p className="technologypar1">React</p>
            </div>
            <div className="technologysub11">
              <div className="technologyminibox">
              <img src="/12icon.png" alt="" />
              </div>
              <p className="technologypar1">Node js</p>
            </div>
          </div>
        </div>
        {/* Technologies  End*/}
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

export default DedicatedHosting;
