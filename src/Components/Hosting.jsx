import { useState } from "react";
import { FaCircleCheck, FaChevronDown } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";
import "../Styles/Hosting.css";

const Hosting = () => {
  const [activeTab, setActiveTab] = useState("Wordpress Hosting");

  const [sectionStates, setSectionStates] = useState({});

  const tabs = [
    "Shared Hosting",
    "Wordpress Hosting",
    "Dedicated Hosting",
    "Envato Hosting",
  ];

  const toggleSection = (cardIndex, key) => {
    const sectionKey = `${cardIndex}-${key}`;
    setSectionStates((prev) => {
      const current = prev[sectionKey] || 0;
      return {
        ...prev,
        [sectionKey]: (current + 1) % 3, // 0 = hidden, 1 = show heading, 2 = show content
      };
    });
  };

  const sectionData = [
    {
      title: "Top Features",
      key: "features",
      items: [
        "1 Website",
        "50 GB SSD Storage",
        "Custom Themes",
        "24/7 Customer Support",
      ],
      withQuestion: true,
    },
    {
      title: "Website Builder Available",
      key: "builder",
      items: [
        "WordPress Integration",
        "Drag and Drop Functionality",
        "AI-Driven Templates",
      ],
      withQuestion: false,
    },
    {
      title: "Also Includes",
      key: "includes",
      items: [
        "Free Domain - 1 year",
        "Free CDN Included",
        "Free SSL Certificate",
      ],
      withQuestion: true,
    },
  ];

  return (
    <div className="framemain">
      <div className="framesub1">
        <p className="framesubpar1">
          find the perfect <span className="text-[#3973E6]">hosting plan</span>{" "}
          for your website
        </p>
        <p className="framesubpar2">
          Designed for speed, security, and reliability. Whether you're
          launching a blog, a business website or an online store, we have the
          perfect plan to fit your needs.
        </p>

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
                      activeTab === tab
                        ? "bottom-[-16px] w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
            <hr className="w-auto border-t border-gray-300 mt-3 hidden sm:block" />
          </div>
        </div>
      </div>

      {/* Responsive Card Container */}
      <div className="hostingprovider">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, cardIndex) => (
            <div key={cardIndex} className="hostingsub relative">
              {cardIndex === 1 && (
                <div className="absolute -top-3 left-4 bg-[#3973E6] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h4 className="hostingh4">
                {cardIndex === 0
                  ? "Shared Hosting"
                  : cardIndex === 1
                  ? "Advanced Plan"
                  : "Standard Plan"}
              </h4>
              <p className="hostingpar">When you need just one site.</p>
              <p className="hostingparprice">₹169.00/m</p>
              <p className="hostingparprice2">Normally ₹9.99 - 12/mo term</p>
              <hr className="hostinghr hidden sm:block" />
              <button className="hostingbutton">Buy Now</button>

              {sectionData.map(({ title, key, items, withQuestion }, sectionIndex) => {
                const sectionKey = `${cardIndex}-${key}`;
                const state = sectionStates[sectionKey] || 0;

                return (
                  <div key={sectionKey} className="mt-6">
                    {/* Desktop view: show everything */}
                    <div className="hidden sm:block">
                      <h5 className={key === "builder" ? "hostingh51" : "hostingh5"}>
                        {title}
                      </h5>
                      <div className="mt-3">
                        {items.map((item, idx) => (
                          <div key={idx} className="hostingminipar001">
                            <div style={{ display: "flex", flexDirection: "row" }}>
                              <FaCircleCheck className="rightcircle" />
                              <p className="hostingpar01">{item}</p>
                            </div>
                            {withQuestion && (
                              <MdQuestionMark className="questinghost" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mobile view */}
                    <div className="sm:hidden">
                      {/* Only show "Top Features" by default */}
                      {key === "features" && (
                        <>
                          <h5 className={key === "builder" ? "hostingh51" : "hostingh5"}>
                            {title}
                          </h5>
                          <div className="mt-2">
                            {items.map((item, idx) => (
                              <div key={idx} className="hostingminipar001">
                                <div
                                  style={{ display: "flex", flexDirection: "row" }}
                                >
                                  <FaCircleCheck className="rightcircle" />
                                  <p className="hostingpar01">{item}</p>
                                </div>
                                {withQuestion && (
                                  <MdQuestionMark className="questinghost" />
                                )}
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {/* Other sections: conditional step toggle */}
                      {key !== "features" && (
                        <div className="mb-4">
                          {state >= 1 && (
                            <h5
                              className={`${
                                key === "builder" ? "hostingh51" : "hostingh5"
                              }`}
                            >
                              {title}
                            </h5>
                          )}

                          {state === 2 && (
                            <div className="mt-2">
                              {items.map((item, idx) => (
                                <div key={idx} className="hostingminipar001">
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <FaCircleCheck className="rightcircle" />
                                    <p className="hostingpar01">{item}</p>
                                  </div>
                                  {withQuestion && (
                                    <MdQuestionMark className="questinghost" />
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Arrow below all */}
                          <div className="flex justify-center mt-2">
                            <button
                              onClick={() => toggleSection(cardIndex, key)}
                              className="transform transition-transform duration-300"
                            >
                              <FaChevronDown
                                className={`text-xl text-blue-600 mx-auto ${
                                  state === 2 ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Desktop only image */}
              <div className="m-auto hidden sm:block">
                <img className="m-auto" src="longarrow.svg" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hosting;
