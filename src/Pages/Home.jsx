import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { CiSearch } from "react-icons/ci";
import { IoEarthSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";
// import { IoMdStar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import "../Styles/Home.css";
import Testimonial from "../Components/Testimonial";
import Hosting from "../Components/Hosting";
import Feturelist from "../Components/Feturelist";
import Faq from "../Components/Faq";
import Steps from "../Components/Steps";
import { LuRocket } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import { AiOutlineBarChart } from "react-icons/ai";
import Serverinfo from "../Components/Serverinfo";
import SeoBanner from "../Components/SeoBanner";
import Contactfriedly from "../Components/Contactfriedly";
import TryoutServices from "../Components/TryoutServices";
import DomainPricing from "../Components/DomainPricing";

const Home = () => {
  return (
    <div>
      <main className="mainclass">
        <DomainPricing />
        <Steps />

        <div className="framemain2">
          <div className="framechild2">
            <p className="framechildpar1">
              Discover Our Advanced Anti-DDoS Solutions
            </p>
            <p className="framechildpar2">
              Our platform is fully equipped with the features you’ll need so
              you never have to worry about speed,security, and support for your
              websites, boost your digital experience with us.
            </p>
          </div>
          <div className="framechiled3">
            <div className="framechildbox1">
              <div className="framechildicon">
                <div className="w-[55px] h-[55px] bg-[#FF0808] rounded-[27px] m-[30px]">
                <img src="01.svg" className="icon22 " />
                </div>
                <p className="framechildipar1">Advanced DDoS Protection</p>
                <p className="framechildipar2">
                  Cutting-edge tech ensures uptime even under attack.
                </p>
              </div>
            </div>

            <div className="framechildbox2">
              <div className="framechildicon">
                <div className="w-[55px] h-[55px] rounded-[27px] m-[30px] bg-[#FF8D41]">
                  <img src="03.svg" className="icon22 " />
                </div>
                <p className="framechildipar1">Multi-Layered Security</p>
                <p className="framechildipar2">
                  Blocks volumetric, protocol, and app-layer threats.
                </p>
              </div>
            </div>
          </div>
          <div className="framesubmini4box">
            <div className="framechildbox3">
              <div className="framechildicon">
                <div className="w-[55px] h-[55px] bg-[#25A75B] rounded-[27px] m-[30px]">
                <img src="02.svg" className="icon22 " />
                </div>
                <p className="framechildipar1">Real-Time Traffic Filtering</p>
                <p className="framechildipar2">
                  Instantly detects and mitigates malicious traffic.
                </p>
              </div>
            </div>
            <div className="framechildbox5">
              <div className="framechildicon">
                <div className="w-[55px] h-[55px] bg-[#3E9CFF] rounded-[27px] m-[30px]">
                <img src="04.svg" className="icon22 " />
                </div>
                <p className="framechildipar1">24/7 Monitoring & Alerts</p>
                <p className="framechildipar2">
                  Stay informed with real-time analytics and alerts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hostig Pricing Boxes */}

        <Hosting />

        {/* <Serverinfo /> */}

        <SeoBanner />

        <div className="heroheadmain2">
        <div className="flex flex-col lg:flex-row w-auto gap-6 lg:gap-[86px] text-center lg:text-left items-center">
          <p className="herohead2">
            From top performance to constant support, we’ve got you covered.
          </p>
          <p className="w-[408px] font-normal text-[#2D5087] text-[12px] text-2xl text-center justify-center pt-[50px]" style={{fontFamily: "'Inter',sans-serif"}} >
            Host your websites closer to your audience with our worldwide server
            locations, including London, New York, Sydney, Singapore, and more.
            Improve speed, reliability, and SEO rankings with optimized server
            placement.
          </p>
          </div>
          <div className="herorec2 ">
            <div className="herorec3 ml-[-58%]">
              <button className="herohead4">Performance</button>
            </div>
            <button className="herohead5">Security</button>
            <button className="herohead5">Flexibility</button>
            <button className="herohead5">Scalability</button>
            <button className="herohead5">Support</button>
          </div>
          <div className="heromainbox">
            <div className="herobox1">
              <div className="herosubbox1">
                <div className="herosubearth1">
                  <img src="05.svg" className="herosubearth2" />
                </div>
                <h4 className="heroboxhead1">Faster Load Times</h4>
                <p className="heroboxpar1">
                  Reduce latency with optimized servers for a seamless user
                  experience, improving conversions and SEO rankings.
                </p>
              </div>
            </div>
            <div className="herobox1">
              <div className="herosubbox1">
                <div className="herosubearth1">
                <img src="05.svg" className="herosubearth2" />
                </div>
                <h4 className="heroboxhead1">Faster Load Times</h4>
                <p className="heroboxpar1">
                  Reduce latency with optimized servers for a seamless user
                  experience, improving conversions and SEO rankings.
                </p>
              </div>
            </div>
            <div className="herobox2">
              <div className="herosubbox1">
                <div className="herosubearth1">
                <img src="05.svg" className="herosubearth2" />
                </div>
                <h4 className="heroboxhead2">Instant Activation</h4>
                <p className="heroboxpar2">
                  Launch your projects in minutes with automated provisioning,
                  eliminating downtime.
                </p>
              </div>
            </div>
            <div className="herobox3">
              <div className="herosubbox1">
                <div className="herosubearth1">
                <img src="05.svg" className="herosubearth2" />
                </div>
                <h4 className="heroboxhead1">High-Performance Architecture</h4>
                <p className="heroboxpar1">
                  NVMe SSDs and advanced caching ensure your website runs 10x
                  faster than traditional hosting.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Feturelist codebase */}
        {/* <Feturelist /> */}
        {/* Feturelist codebase */}
        <div className="frammain3">
          <div className="framsubpart">
            <div className="framsubpart1">
              <p className="framsubp1">
              Host Any Application, Any Tech Stack
              </p>
              <p className="framsubp2">
              No matter what technology your application is built on, we provide seamless hosting solutions with top-tier performance and security
              </p>
              <button className="w-[121px] h-[44px] rounded-[5px] p-[10px] bg-[#ffffff] text-[#3973E6] font-bold text-[12px]" style={{fontFamily: "'Intter',sans-serif"}}>Host Now →</button>
            </div>
            <div className="framsubpart2">
              <img src="girl.png" alt="" />
              {/* <div className="framsub3box">
                <img className="costomer" src="costomer.png" alt="" />
                <h4 className="customerhead">24x7 Support</h4>
                <p className="customerpar">
                  Get assistance anytime with our dedicated team, ensuring
                  uninterrupted service for your projects
                </p>
              </div> */}
              {/* <div className="framsub3box">
                <img className="costomer" src="gov.png" alt="" />
                <h4 className="customerhead">Backed by Indian Government</h4>
                <p className="customerpar">
                  Benefit from government-backed reliability and compliance,
                  ensuring trust and credibility for your server deployment.
                </p>
              </div> */}
              {/* <div className="framsub3box">
                <img className="costomer" src="refund.png" alt="" />
                <h4 className="customerhead">Refund Policy</h4>
                <p className="customerpar">
                  Enjoy peace of mind with our hassle-free 7 days refund policy,
                  prioritizing your satisfaction.
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <Testimonial />

        {/* <div className="framemain5">
          <div className="subfram5">
            <p className="subframpara5">
              Our <span>Trusted</span>{" "}
              <span className="trusted">Partnerships</span>
            </p>
            <div className="minisubfram5">
              <div className="minisubfram1">
                <img src="f1.png" alt="Partner 1" />
                <img src="f2.png" alt="Partner 2" />
                <img src="f3.png" alt="Partner 3" />
                <img src="f4.png" alt="Partner 4" />
                <img src="f5.png" alt="Partner 5" />
                <img src="f6.png" alt="Partner 6" />
              </div>
              <p className="minisubframpar">
                Collaborating with industry leaders like AWS, Google Cloud, and
                more than 30 other trusted partners to deliver top-tier
                solutions.
              </p>
            </div>
          </div>
        </div> */}
        {/* Faq Com */}
        <Faq />
        {/* Faq Com End*/}

        {/* TryOutServices Com */}
        <TryoutServices />
        {/* TryOutServices Com End*/}

        {/* ContactFriedly Com */}
        <Contactfriedly />
        {/* ContactFriedly Com End*/}
        {/* </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
