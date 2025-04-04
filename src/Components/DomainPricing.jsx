import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import "../Styles/DomainPricing.css";
import axios from "axios";
import Git from "./Git";

const DomainPricing = () => {
  const [domain, setDomain] = useState("");
  const [mainpricing, setMainPricing] = useState(0);
  const [discountPricing, setDiscountPricing] = useState(0);
  const [availabilityData, setavailable] = useState(false);
  const [extension, setExtension] = useState(".com");
  const [searching, setSearching] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [avilabeDomain, setAvilabeDomain] = useState([]);

  const fetchPricingData = async () => {
    try {
      const response = await axios.get(
        "https://portal.serverpie.com/hiked-tld-price.json"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching pricing data:", error);
      return {};
    }
  };

  const fetchDiscountPricing = async () => {
    try {
      const response = await axios.get(
        "https://portal.serverpie.com/includes/api.php",
        {
          params: {
            action: "GetTLDPricing",
            identifier: "i4uh5DnO4EPln9bXsug68IK0Dprm8Iiy",
            secret: "0OhSegC4VNJw5pZfROMfJbMvcT0qKBxW",
            responsetype: "json",
          },
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching discount pricing:", error);
      return {};
    }
  };

  const handleSearch = async () => {
    setSearching(true);

    const domainLowerCase = domain.toLowerCase(); // Convert input to lowercase
    const domainName = domainLowerCase.replace(/\.[a-z.]+$/, ""); // Extract domain name
    const extensions = [".com", ".org", ".net", ".xyz"];
    const searchDomains = extensions
      .map((ext) => `${domainName}${ext}`)
      .join(",");

    try {
      // Step 1: Check the exact domain entered by the user
      const userDomainCheck = await axios.get(
        `https://api.connectreseller.com/ConnectReseller/ESHOP/bulkDomainCheck?APIKey=T41Xbr4sjmJ5IVJ&websiteNames=${domainLowerCase}`
      );

      const userDomainAvailability = userDomainCheck.data?.responseData?.[0]; // Extract first domain info
      const userDomainExt = domainLowerCase.split(".").pop();

      const mainPricing = await fetchPricingData();
      const discountPricing = await fetchDiscountPricing();

      let newSuggestions = [];

      // Add the searched domain (whether available or unavailable)
      if (userDomainAvailability) {
        newSuggestions.push({
          domain: userDomainAvailability.websiteName,
          available: userDomainAvailability.available,
          price:
            mainPricing?.pricing?.[userDomainExt]?.register?.["1"] || "N/A",
          discountPrice:
            discountPricing?.pricing?.[userDomainExt]?.register?.["1"] ||
            "No discount",
        });
      }

      // Step 2: Check other domain extensions
      const extensionsCheck = await axios.get(
        `https://api.connectreseller.com/ConnectReseller/ESHOP/bulkDomainCheck?APIKey=T41Xbr4sjmJ5IVJ&websiteNames=${searchDomains}`
      );

      const availabilityData = extensionsCheck.data?.responseData || [];

      availabilityData.forEach((item) => {
        if (item.websiteName.toLowerCase() !== domainLowerCase) {
          // Avoid duplicate of searched domain
          const domainExt = item.websiteName.split(".").pop();
          newSuggestions.push({
            domain: item.websiteName,
            available: item.available,
            price: mainPricing?.pricing?.[domainExt]?.register?.["1"] || "N/A",
            discountPrice:
              discountPricing?.pricing?.[domainExt]?.register?.["1"] ||
              "No discount",
          });
        }
      });

      setSuggestions(newSuggestions);
    } catch (error) {
      console.error("Error fetching domain data:", error);
    }

    setSearching(false);
  };

  const handleDomainChange = (e) => {
    const value = e.target.value;
    setDomain(value); // Keep original input for display

    const lowercaseValue = value.toLowerCase(); // Convert to lowercase for processing

    const match = lowercaseValue.match(/\.([a-z]+)$/); // Extract domain extension
    if (match) {
      setExtension(`.${match[1]}`); // Set correct extension in lowercase
    }
  };

  return (
    <div className="mainhero">
      <div className="hero ">
        <div className="flex flex-row">
        <div className="hero1 flex flex-col gap-[22px] ">
          <p className="heropar1">India's Leading Hosting Provider</p>
          <p className="herohead1">Your Dream Domain Awaits Start Today!</p>
          <p className="heropar2">
            Launch your website today with a domain that works for you!
          </p>
        </div>
        <div
          className="boxes border-[1px] border-[#FFFFFF] bg-white p-6 rounded-2xl shadow-lg w-[531px] h-[330px] flex flex-col justify-center items-center ml-[10%]"
          style={{ boxShadow: "0px 4px 23.5px 0px #BBCCD880" }}
        >
          <p
            className="text-lg font-normal text-[#083376] border-[#00000033] mb-3 self-start"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Find Domains Here
          </p>
          <div
            className="flex items-center  overflow-hidden w-full transition-all bg-[#F8F8F8]"
            style={{ borderRadius: "5px" }}
          >
            <input
              type="text"
              value={domain}
              onChange={handleDomainChange}
              placeholder="ex-demo.com"
              className="w-[475px] h-[58px] p-3 text-gray-500 outline-none bg-[#F8F8F8]"
            />
            <div className="w-[105px] h-[38px] flex items-center justify-center bg-white border border-gray-300 rounded-md mr-3">
              <select
                className="w-[86px] p-[10px] rounded-b-lg bg-transparent outline-none text-gray-500"
                value={extension}
                onChange={(e) => setExtension(e.target.value)}
              >
                <option value=".com">.com</option>
                <option value=".net">.net</option>
                <option value=".org">.org</option>
                <option value=".in">.in</option>
                <option value=".xyz">.xyz</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="w-full mt-4 bg-[#3973E6] text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Find My Domain
          </button>
          {suggestions.length > 0 && (
            <>
              <div className="w-full mt-4">
                {suggestions.length > 0 && (
                  <div>
                    {suggestions.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center text-gray-600 py-1"
                      >
                        <span className="text-lg">{item.domain}</span>
                        {item.available ? (
                          <p>Avilabe</p>
                        ) : (
                          <p className="text-[#008000]">Taken</p>
                        )}
                        <span className="text-sm font-semibold text-red-500 line-through block">
                          ₹ {item.price}
                        </span>
                        <span className="text-sm font-semibold text-blue-500">
                          ₹ {item.discountPrice}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                {/* {suggestions.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-gray-600 py-1">
                  <span className="text-lg">{item.domain}</span>
                  {availabilityData ? (<p>Avilabe</p>) : (<p className="text-[#008000]">Taken</p>)}
                  <span className="text-sm font-semibold">Price: {mainpricing}</span>
                  <span className="text-sm font-semibold">Discount: {discountPricing}</span>
                </div>
              ))} */}
              </div>
              <div>
                {avilabeDomain.map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
              </div>
            </>
          )}
        </div></div>
        <Git />
      </div>
    
    </div>
  );
};

export default DomainPricing;
