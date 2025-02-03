import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { CiSearch } from "react-icons/ci";
import { IoEarthSharp } from "react-icons/io5";

import "../Styles/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="hero">
          <p className="heropar1">India's Leading Hosting Provider</p>
          <h1 className="herohead1">Your Dream Domain Awaits Start Today!</h1>
          <p className="heropar2">
            Launch your website today with a domain that works for you!
          </p>
        </div>
        <div className="heroinput">
          <div className="input-container">
            <CiSearch className="herosearch" />
            <input
              className="heroinput1"
              type="text"
              placeholder="Enter Your Domain Name"
            />
          </div>
          <hr className="herohr" />
          <div className="select-container">
            <IoEarthSharp className="heroearth" />
            <select className="heroselect">
              <option value="com">Domain</option>
              <option value="net">.net</option>
              <option value="org">.org</option>
            </select>
          </div>
        </div>
        <button className="herobtn">Find My Domain</button>
        <div className="herorec">
          <div className="subrec">
            <h2 className="subrechead">Discover Our Advanced Anti-DDoS Solutions</h2>
            <p className="subrecpar">Our platform is fully equipped with the features you’ll need so you never have to worry about speed,
            security, and support for your websites, boost your digital experience with us.</p>
          </div>
        </div>
        <h2 className="herohead2">From Peak Performance To Non-stop Support, We’ve Got Every Angle Covered.</h2>
        <div className="herorec2">
          <div className="herorec3">
          <h3 className="herohead4">Performance</h3>
          </div>
          <h3 className="herohead5">Security</h3>
          <h3 className="herohead5">Flexibility</h3>
          <h3 className="herohead5">Scalability</h3>
          <h3 className="herohead5">Support</h3>
        </div>
        <div className="heromainbox">
        <div className="herobox1">
          <div className="herosubbox1">
            <div className="herosubearth1">
              <IoEarthSharp className="herosubearth2" />
              </div>
              <h4 className="heroboxhead1" >Rapid Deployment</h4>
              <p className="heroboxpar1">Deploy your server in just minutes with our streamlined process, ensuring your projects launch quickly.</p>
          </div>
        </div>
        <div className="herobox2">
        <div className="herosubbox1">
            <div className="herosubearth1">
              <IoEarthSharp className="herosubearth2" />
              </div>
              <h4 className="heroboxhead2" >Rapid Deployment</h4>
              <p className="heroboxpar2">Deploy your server in just minutes with our streamlined process, ensuring your projects launch quickly.</p>
          </div>
        </div>
        <div className="herobox3">
        <div className="herosubbox1">
            <div className="herosubearth1">
              <IoEarthSharp className="herosubearth2" />
              </div>
              <h4 className="heroboxhead1" >Rapid Deployment</h4>
              <p className="heroboxpar1">Deploy your server in just minutes with our streamlined process, ensuring your projects launch quickly.</p>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
