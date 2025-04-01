import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import "../Styles/DomainPricing.css";

const DomainPricing = () => {
  return (
    <>
    <div className="hero">
      <div className="hero1 flex flex-col">
        <p className="heropar1">India's Leading Hosting Provider</p>
        <p className="herohead1">Your Dream Domain Awaits Start Today !</p>
        <p className="heropar2">
          Launch your website today with a domain that works for you!
        </p>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[531px] h-[317px] flex flex-col justify-center items-center ml-[15%]">
      <p className="text-lg font-semibold text-[#083376] border-[#00000033] mb-3 self-start" style={{fontFamily: "'Inter', sans-serif"}}>
        Find Domains Here
      </p>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full">
        <input
          type="text"
          placeholder="ex-demo.com"
          className="w-full p-3 text-gray-500 outline-none bg-[#F8F8F8]"
        />
        <select className="bg-[#ffffff] p-3 border-l border-gray-300 outline-none">
          <option value="com">.com</option>
          <option value="net">.net</option>
          <option value="org">.org</option>
          <option value="in">.in</option>
        </select>
      </div>
      <button className="w-full mt-4 bg-[#3973E6] text-white py-3 rounded-lg font-semibold hover:bg-blue-700" style={{fontFamily: "'Inter', sans-serif"}}>
        Find My Domain
      </button>
    </div>
   
      {/* <div className="domainprice">
                <div className="subdomainbox">
                  <div className="minidomain">
                    <p className="com">.Com</p>
                      <p className="starting">Starting at</p>
                      <div className="subminidomain2">
                      <p className="starting1">$4.99</p>
                      <div className="arrowrightmain"><FaArrowRight className="arrowright" /></div>
                    </div>
                  </div>
                </div>
                <div className="subdomainbox">
                <div className="minidomain">
                    <p className="com">.In</p>
                      <p className="starting">Starting at</p>
                      <div className="subminidomain2">
                      <p className="starting1">$4.99</p>
                      <div className="arrowrightmain"><FaArrowRight className="arrowright" /></div>
                    </div>
                  </div>
                </div>
                <div className="subdomainbox1">
                <div className="minidomain">
                    <p className="com">.Net</p>
                      <p className="starting">Starting at</p>
                      <div className="subminidomain2">
                      <p className="starting1">$4.99</p>
                      <div className="arrowrightmain1"><FaArrowRight className="arrowright1" /></div>
                    </div>
                  </div>
                </div>
                <div className="subdomainbox">
                <div className="minidomain">
                    <p className="com">.Org</p>
                      <p className="starting">Starting at</p>
                      <div className="subminidomain2">
                      <p className="starting1">$4.99</p>
                      <div className="arrowrightmain"><FaArrowRight className="arrowright" /></div>
                    </div>
                  </div>
                </div>
                <div className="subdomainbox">
                <div className="minidomain">
                    <p className="com">.io</p>
                      <p className="starting">Starting at</p>
                      <div className="subminidomain2">
                      <p className="starting1">$4.99</p>
                      <div className="arrowrightmain"><FaArrowRight className="arrowright" /></div>
                    </div>
                  </div>
                </div>
              </div> */}
    </div>
     <div className="w-[auto] h-[101px] m-auto flex flex-col gap-[23px] ">
     <p className="font-normal text-[18px] text-[#B6C4D7]" style={{fontFamily: "'Inter',serif"}}>Trusted by the best front-end teams</p>
     <div className="flex  gap-[40px] w-[1211px] h-[32px] m-auto">
      <img src="git.png" alt="" />
      <img src="ai.png" alt="" />
      <img src="nasa.png" alt="" />
      <img src="google.png" alt="" />
      <img src="fedora.png" alt="" />
      <img src="gitlab.png" alt="" />
      <img src="upwork.png" alt="" />
     </div>
   </div>
   </>
  );
};

export default DomainPricing;
