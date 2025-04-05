import { IoIosCheckmark } from "react-icons/io";
import { BiQuestionMark } from "react-icons/bi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";
import "../Styles/Hosting.css";
import { useState } from "react";

const Hosting = () => {
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState("Wordpress Hosting");
=======

  const [activeTab, setActiveTab] = useState("Wordpress Hosting");

>>>>>>> 05788358a9bbc2a994b3e9a8eef27eaf22428e6c
  const tabs = [
    "Shared Hosting",
    "Wordpress Hosting",
    "Dedicated Hosting",
    "Envato Hosting",
  ];
<<<<<<< HEAD

=======
>>>>>>> 05788358a9bbc2a994b3e9a8eef27eaf22428e6c
  return (
    <div className="framemain">
      <div className="framesub1">
        <p className="framesubpar1">
          find the perfect <span className="text-[#3973E6]">hosting plan</span>{" "}
          for your website
        </p>
        <p className="framesubpar2">
          Designed for speed, security, and reliability. Whether you're launching a blog, a business website
          or an online store, we have the perfect plan to fit your needs.
        </p>

<<<<<<< HEAD
        <div className="w-full sm:w-auto items-start px-4 sm:px-0">
          <div className="flex flex-col relative">
            <div className="flex flex-wrap gap-4 md:justify-between w-full sm:w-[620px] items-start">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`relative cursor-pointer text-sm transition-all ${
                    activeTab === tab
                      ? "text-blue-600 font-bold"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  <div
                    className={`absolute left-0 right-0 h-[3px]  bg-blue-600 rounded-full transition-all duration-300 ${
                      activeTab === tab ? "bottom-[-16px] w-full" : "w-0 group-hover:w-full"
                    }`}
=======
        <div className="w-auto items-start  ">
          <div className="flex flex-col relative">
            {/* Options */}
            <div className="flex md:justify-between w-[620px] items-left ">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`relative cursor-pointer text-sm transition-all ${activeTab === tab
                      ? "text-blue-600 font-bold"
                      : "text-gray-500 hover:text-blue-600"
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  {/* Active and Hover Underline Effect */}
                  <div
                    className={`absolute left-0 right-0 h-[3px]  bg-blue-600 rounded-full transition-all duration-300 ${activeTab === tab ? "bottom-[-16px] w-full" : "w-0 group-hover:w-full"
                      }`}
>>>>>>> 05788358a9bbc2a994b3e9a8eef27eaf22428e6c
                  ></div>
                </div>
              ))}
            </div>
<<<<<<< HEAD
            <hr className="w-auto border-t border-gray-300 mt-3" />
          </div>
        </div>
=======

            {/* Bottom Line */}
            <hr className="w-auto border-t border-gray-300 mt-3" />
          </div>
        </div>

>>>>>>> 05788358a9bbc2a994b3e9a8eef27eaf22428e6c
      </div>

      {/* Responsive Card Container */}
      <div className="hostingprovider">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="hostingsub relative">
              {i === 1 && (
                <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h4 className="hostingh4">{i === 0 ? "Shared Hosting" : i === 1 ? "Advanced Plan" : "Standard Plan"}</h4>
              <p className="hostingpar">When you need just one site.</p>
              <p className="hostingparprice">₹169.00/m</p>
              <p className="hostingparprice2">Normally ₹9.99 - 12/mo term</p>
              <hr className="hostinghr" />
              <button className="hostingbutton">Buy Now</button>

              <h5 className="hostingh5">Top Features</h5>
              {[
                "1 Website",
                "50 GB SSD Storage",
                "Custom Themes",
                "24/7 Customer Support",
              ].map((feature, index) => (
                <div key={index} className="hostingminipar001">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FaCircleCheck className="rightcircle" />
                    <p className="hostingpar01">{feature}</p>
                  </div>
                  <MdQuestionMark className="questinghost" />
                </div>
              ))}

              <h5 className="hostingh51">Website Builder Available</h5>
              {[
                "WordPress Integration",
                "Drag and Drop Functionality",
                "AI-Driven Templates",
              ].map((builder, idx) => (
                <div key={idx} className="hostingminipar001">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FaCircleCheck className="rightcircle" />
                    <p className="hostingpar01">{builder}</p>
                  </div>
                </div>
              ))}

              <h5 className="hostingh5">Also Includes</h5>
              {[
                "Free Domain - 1 year",
                "Free CDN Included",
                "Free SSL Certificate",
              ].map((include, idxx) => (
                <div key={idxx} className="hostingminipar001">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <FaCircleCheck className="rightcircle" />
                    <p className="hostingpar01">{include}</p>
                  </div>
                  <MdQuestionMark className="questinghost" />
                </div>
              ))}
              <div className="m-auto">
                <img className="m-auto" src="longarrow.svg" alt="" />
              </div>
              <div className="m-auto"><img className="m-auto" src="longarrow.svg" alt="" /></div>
            </div>
<<<<<<< HEAD
          ))}
=======
          </div>
          <div class="col">
          <div className="hostingsub relative">
  {/* Most Popular Badge */}
  <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
    Most Popular
  </div>
              <h4 className="hostingh4">Advanced Plan</h4>
              <p className="hostingpar">When you need just one site.</p>
              <p className="hostingparprice">₹169.00/m</p>
              <p className="hostingparprice2">Normally ₹9.99 - 12/mo term</p>
              <hr className="hostinghr" />
              <button className="hostingbutton">Buy Now</button>
              <h5 className="hostingh5">Top Features</h5>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">1 Website</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">50 GB SSD Storage</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Custom Themes</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">24/7 Customer Support</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <h5 className="hostingh51">Website Builder Available</h5>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">WordPress Integration</p>
                </div>
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Drag and Drop Functionality</p>
                </div>
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">AI-Driven Templates</p>
                </div>
              </div>
              <h5 className="hostingh5">Also Includes</h5>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Free Domain - 1 year</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Free CDN Included</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Free SSL Certificate</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="m-auto"><img className="m-auto" src="longarrow.svg" alt="" /></div>
            </div>
          </div>
        
          <div class="col">
            <div className="hostingsub">
              <h4 className="hostingh4">Standard Plan</h4>
              <p className="hostingpar">When you need just one site.</p>
              <p className="hostingparprice">₹169.00/m</p>
              <p className="hostingparprice2">Normally ₹9.99 - 12/mo term</p>
              <hr className="hostinghr" />
              <button className="hostingbutton">Buy Now</button>
              <h5 className="hostingh5">Top Features</h5>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Unlimited Websites</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Unlimited SSD Storage</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Custom Themes</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">24/7 Customer Support</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <h5 className="hostingh51">Website Builder Available</h5>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">WordPress Integration</p>
                </div>
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Drag and Drop Functionality</p>
                </div>
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">AI-Driven Templates</p>
                </div>
              </div>
              <h5 className="hostingh5">Also Includes</h5>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Free Domain - 1 year</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Free CDN Included</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Free SSL Certificate</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="m-auto"><img className="m-auto" src="longarrow.svg" alt="" /></div>
            </div>
          </div>
          <div class="col">
            <div className="hostingsub">
              <h4 className="hostingh4">Standard Plan</h4>
              <p className="hostingpar">When you need just one site.</p>
              <p className="hostingparprice">₹169.00/m</p>
              <p className="hostingparprice2">Normally ₹9.99 - 12/mo term</p>
              <hr className="hostinghr" />
              <button className="hostingbutton">Buy Now</button>
              <h5 className="hostingh5">Top Features</h5>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Unlimited Websites</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Unlimited SSD Storage</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Custom Themes</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">24/7 Customer Support</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <h5 className="hostingh51">Website Builder Available</h5>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">WordPress Integration</p>
                </div>
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Drag and Drop Functionality</p>
                </div>
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">AI-Driven Templates</p>
                </div>
              </div>
              <h5 className="hostingh5">Also Includes</h5>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Free Domain - 1 year</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Free CDN Included</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="hostingminipar001">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <FaCircleCheck className="rightcircle" />
                  <p className="hostingpar01">Free SSL Certificate</p>
                </div>
                <MdQuestionMark className="questinghost" />
              </div>
              <div className="m-auto"><img className="m-auto" src="longarrow.svg" alt="" /></div>
            </div>
          </div>
>>>>>>> 05788358a9bbc2a994b3e9a8eef27eaf22428e6c
        </div>
      </div>
    </div>
  );
};

export default Hosting;