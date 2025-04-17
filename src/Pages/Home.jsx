// Importing Reusable Components and Assets
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DomainPricing from "../Components/DomainPricing";
import Steps from "../Components/Steps";
import Hosting from "../Components/Hosting";
import SeoBanner from "../Components/SeoBanner";
import Testimonial from "../Components/Testimonial";
import Faq from "../Components/Faq";
import TryoutServices from "../Components/TryoutServices";
import Contactfriedly from "../Components/Contactfriedly";
import ScrollToTop from "../Components/ScrollToToButton";

// React Icons
import { FaArrowRight } from "react-icons/fa";
import "../Styles/Home.css";

// Main Home Component
const Home = () => {
  return (
    <div>
      {/* Scroll to Top Button */}
      {/* <ScrollToTop /> */}

      {/* Navbar (Header) */}
      {/* <Navbar /> */}

      <main className="mainclass">

        {/* Domain Pricing Section */}
        <DomainPricing />

        {/* Steps Section (How it works / Get Started guide) */}
        <Steps />

        {/* Anti-DDoS Features Section */}
        <section className="framemain2">
          <div className="framechild2">
            <h2 className="framechildpar1">
              Discover Our Advanced Anti-DDoS Solutions
            </h2>
            <p className="framechildpar2">
              Our platform is fully equipped with the features you’ll need so
              you never have to worry about speed, security, and support for your
              websites, boost your digital experience with us.
            </p>
            <button className="btnprod">
              Protect domain <span className="arrowp">→</span>
            </button>
          </div>

          {/* Top 2 Features */}
          <div className="framechiled3">
            <div className="framechildbox1">
            <FeatureBox
              color="#FF0808"
              icon="01.svg"
              title="Advanced DDoS Protection"
              description="Cutting-edge tech ensures uptime even under attack."
            /></div>
            <div className="framechildbox2">
            <FeatureBox
              color="#FF8D41"
              icon="03.svg"
              title="Multi-Layered Security"
              description="Blocks volumetric, protocol, and app-layer threats."
            /></div>
          </div>

          {/* Bottom 2 Features */}
          <div className="framesubmini4box">
            <div className="framechildbox3">
            <FeatureBox
              color="#25A75B"
              icon="02.svg"
              title="Real-Time Traffic Filtering"
              description="Instantly detects and mitigates malicious traffic."
            />
            </div>
            <div className="framechildbox5">
            <FeatureBox
              color="#3E9CFF"
              icon="04.svg"
              title="24/7 Monitoring & Alerts"
              description="Stay informed with real-time analytics and alerts."
            /></div>
          </div>
        </section>

        {/* Hosting Plan Section */}
        <Hosting />

        {/* SEO Benefits Banner */}
        <SeoBanner />

        {/* Server Feature Highlights */}
        <section className="heroheadmain2">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[86px] text-center lg:text-left items-center">
            <h2 className="herohead2">
              From top performance to constant support, we’ve got you covered.
            </h2>
            <p className="parhost">
              Host your websites closer to your audience with our worldwide server
              locations, including London, New York, Sydney, Singapore, and more.
              Improve speed, reliability, and SEO rankings with optimized server
              placement.
            </p>
          </div>

          {/* Hosting Benefits Buttons */}
          <div className="herorec2">
            <div className="herorec3 ml-[-60%]">
              <button className="herohead4">Performance</button>
            </div>
            <button className="herohead5">Security</button>
            <button className="herohead5">Flexibility</button>
            <button className="herohead5">Scalability</button>
            <button className="herohead5">Support</button>
          </div>

          {/* Hosting Cards Grid */}
          <div className="heromainbox">
            {Array(1).fill(
              <HostingCard
                icon="05.svg"
                title="Faster Load Times"
                description="Reduce latency with optimized servers for a seamless user experience, improving conversions and SEO rankings."
              />
            )}
            <HostingCard
              icon="05.svg"
              title="Instant Activation"
              description="Launch your projects in minutes with automated provisioning, eliminating downtime."
              type="highlight"
            />
            {Array(2).fill(
               <HostingCard
               icon="05.svg"
               title="High-Performance Architecture"
               description="NVMe SSDs and advanced caching ensure your website runs 10x faster than traditional hosting."
             />
            )}
           
          </div>
        </section>

        {/* Universal Tech Support Section */}
        <section className="frammain3">
          <div className="framsubpart">
            <div className="framsubpart1">
              <h2 className="framsubp1">Host Any Application, Any Tech Stack</h2>
              <p className="framsubp2">
                No matter what technology your application is built on, we provide seamless hosting solutions with top-tier performance and security
              </p>
              <button className="bg-white w-[121px] h-[44px] p-[10px] text-[#3973E6] font-bold" style={{borderRadius: "5px"}}>Host Now →</button>
            </div>
            <div className="framsubpart2">
              <img src="jio.svg" alt="App Hosting" />
            </div>
          </div>
        </section>

        {/* Testimonials / Client Reviews Section */}
        <Testimonial />

        {/* FAQ Section */}
        <Faq />

        {/* Try Our Services - CTA Section */}
        <TryoutServices />

        {/* Contact Us / Friendly Support Section */}
        <Contactfriedly />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;

/** Utility Component for Feature Blocks **/
const FeatureBox = ({ icon, title, description, color }) => (
  <div className="framechildicon">
    <div className="w-[55px] h-[55px] rounded-[27px] m-[30px]" style={{ backgroundColor: color }}>
      <img src={icon} className="icon22" alt={title} />
    </div>
    <h3 className="framechildipar1">{title}</h3>
    <p className="framechildipar2">{description}</p>
  </div>
);

/** Utility Component for Hosting Cards **/
const HostingCard = ({ icon, title, description, type }) => (
  <div className={`herobox${type === "highlight" ? "2" : "1"}`}>
    <div className="herosubbox1">
      <div className="herosubearth1">
        <img src={icon} className="herosubearth2" alt={title} />
      </div>
      <h4 className={type === "highlight" ? "heroboxhead2" : "heroboxhead1"}>{title}</h4>
      <p className={type === "highlight" ? "heroboxpar2" : "heroboxpar1"}>{description}</p>
    </div>
  </div>
);
