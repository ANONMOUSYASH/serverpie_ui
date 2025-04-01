import React from "react";
import "../Styles/Serverinfo.css";
import { IoEarthOutline } from "react-icons/io5";

const Serverinfo = () => {
  return (
    <div className="mainserve">
      <div className="vip1 w-[924px] mr-[25%]">
        <p className="font-inter font-medium text-[64px] leading-[100%] tracking-[-6%] text-[#083376] text-start">
          Get <span className="text-[#3973E6]">exclusive perks</span> with ServerPie DDoS protection
        </p>

      </div>
      <div className="minisubserve">
        <div className="subminiservebox1">
          <div className="rounded-[50%] bg-[#3973E6]">
            <IoEarthOutline className="webearth" />
          </div>
          <div className="parserve">
            <p className="servepar1">Free Website Migration</p>
            <p className="servepar2">
              Switching to Serverpie is quick and easy ,we offer first-time
              migrations for FREE, and our migrations for FREE, and our expert
              migration team will move your website swiftly to us in no time
            </p>
          </div>
        </div>
        <div className="subminiservebox1">
          <div className="rounded-[50%] bg-[#3973E6]">
            <IoEarthOutline className="webearth" />
          </div>
          <div className="parserve">
            <p className="servepar1">Free SSL Certificate</p>
            <p className="servepar2">
              Pay no extra charges for the registration of an SSL certificate.
              Serverpie grants free SSL certificates for every website from
              Let's Encrypt with your hosting plan
            </p>
          </div>
        </div>
        <div className="subminiservebox1">
          <div className="rounded-[50%] bg-[#3973E6]">
            <IoEarthOutline className="webearth" />
          </div>
          <div className="parserve">
            <p className="servepar1">Certified professionals</p>
            <p className="servepar2">
              Our Support Team is Certified & Trained with deep expertise in
              solving all technical issues promptly and effeciently
            </p>
          </div>
        </div>
        <div className="subminiservebox1">
          <div className="rounded-[50%] bg-[#3973E6]">
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
  );
};

export default Serverinfo;
