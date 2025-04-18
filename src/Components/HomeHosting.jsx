import React, { useState } from 'react';
import Hosting from './Hosting';
import WordpressHost from './WordpressHost';
import DedicatedHost from './DedicatedHost';

const HomeHosting = () => {
  const [activeTab, setActiveTab] = useState("Shared Hosting");
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabs = ["Shared Hosting", "Wordpress Hosting", "Dedicated Hosting"];

  return (
    <div className="container">
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
                  onMouseEnter={() => setHoveredTab(tab)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  {tab}
                  <div
                    className={`absolute left-0 right-0 h-[3px] bg-blue-600 rounded-full transition-all duration-300 ${
                      activeTab === tab ? "bottom-[-16px] w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
            <hr className="w-auto border-t border-gray-300 mt-3 hidden sm:block" />
          </div>
        </div>
      </div>

      {/* Conditionally render hosting components */}
      {activeTab === "Shared Hosting" && <Hosting showHeader= {false} />}
      {activeTab === "Wordpress Hosting" && <WordpressHost showHeader= {false} />}
      {activeTab === "Dedicated Hosting" && <DedicatedHost showHeader= {false} />}
    </div>
  );
};

export default HomeHosting;
