import { IoIosCheckmark } from "react-icons/io";
import { BiQuestionMark } from "react-icons/bi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";
import "../Styles/Hosting.css";

const Hosting = () => {
  return (
    <div className="framemain">
      <div className="framesub1">
        <p className="framesubpar1">
          Find the Perfect <span className="text-[#3973E6]">Hosting Plan</span>{" "}
          for Your Website
        </p>
        <p className="framesubpar2">
          Our platform is fully equipped with the features you’ll need so you
          never have to worry about speed, security, and support for your
          websites, boost your digital experience with us.
        </p>

        <div class="w-full max-w-[750px] ml-0 md:ml-[-15%] px-4">
  <div class="flex flex-col relative">
    {/* <!-- Options --> */}
    <div class="flex flex-wrap gap-4 md:gap-[32px] justify-center md:justify-between w-full md:w-[597px]">
      <div class="flex gap-2 items-center group">
        <span class="text-gray-500 text-sm group-hover:text-blue-600 transition-all">
          1 Month
        </span>
        <span class="text-gray-400 bg-gray-200 px-2 py-1 rounded-lg text-xs group-hover:bg-green-100 group-hover:text-green-600 transition-all">
          10%
        </span>
      </div>
      <div class="flex gap-2 items-center font-bold text-blue-600 group">
        <span class="text-sm">3 Month</span>
        <span class="text-green-600 bg-green-100 px-2 py-1 rounded-lg text-xs">
          40%
        </span>
      </div>
      <div class="flex gap-2 items-center group">
        <span class="text-gray-500 text-sm group-hover:text-blue-600 transition-all">
          6 Month
        </span>
        <span class="text-gray-400 bg-gray-200 px-2 py-1 rounded-lg text-xs group-hover:bg-green-100 group-hover:text-green-600 transition-all">
          70%
        </span>
      </div>
      <div class="flex gap-2 items-center group">
        <span class="text-gray-500 text-sm group-hover:text-blue-600 transition-all">
          1 Year
        </span>
        <span class="text-gray-400 bg-gray-200 px-2 py-1 rounded-lg text-xs group-hover:bg-green-100 group-hover:text-green-600 transition-all">
          40%
        </span>
      </div>
    </div>

    {/* <!-- Gray Line --> */}
    <hr class="w-auto border-t border-gray-300 mt-4" />
  </div>
</div>

      </div>

      <div class="hostingprovider">
        <div class="row row-cols-4">
          <div class="col">
            <div className="hostingsub">
              <h4 className="hostingh4">Shared Hosting</h4>
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
            </div>
          </div>
          <div class="col">
            <div className="hostingsub">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hosting;
