import React from 'react'
import { useNavigate } from "react-router-dom";
import '../Styles/BestPricing.css'

const BestPricing = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true }); // Instant navigation to Homepage
  };
  return (
    <div className="comparepricemain">
              <div className="comparepricesub1">
                <div className="comparepricesub2">
                  <p className="comparepricesubpar2">
                    we offer the{" "}
                    <span className="comparepricesubpar22">best pricing</span>{" "}
                    compared to others
                  </p>
                  <p className="comparepricesubpar3">
                    Even during economic hikes, we maintain stable pricing.
                  </p>
                  <button
      className="btnz w-[226px] h-[72px] rounded-[5px] border-[1px] border-[#3973E6] text-[#ffffff] bg-[#3973E6] 
                 font-inter font-bold text-[20px] leading-[36px] tracking-[0%] align-middle capitalize" style={{ borderRadius: "5px"}}
      onClick={handleClick}
    >
      Buy Now
    </button>
                </div>
                <div className="comparepricesub3">
                  <div className="comparepricesub31">
                    <div className="circlecompare">
                      {/* <p className="scompare">s</p> */}
                    </div>
                    <div className="vcpu1">
                      <div className="raccompare"></div>
                      <p className="vcpu2">2 vCPU/2 GB RAM/30 GB SSD</p>
                    </div>
                    <p className="fourcompare">$4.43 /mo</p>
                  </div>
                  <div className="comparepricesub31">
                    <div className="circlecompare1">
                      <img className="vimg1" src="v1.svg" alt="" />
                    </div>
                    <div className="vcpu1">
                      <div className="raccompare1"></div>
                      <p className="vcpu2">2 vCPU/2 GB RAM/30 GB SSD</p>
                    </div>
                    <p className="fourcompare">$4.43 /mo</p>
                  </div>
                  <div className="comparepricesub31">
                    <div className="circlecompare2">
                      <img className="vimg1" src="v2.svg" alt="" />
                    </div>
                    <div className="vcpu1">
                      <div className="raccompare2"></div>
                      <p className="vcpu2">2 vCPU/2 GB RAM/30 GB SSD</p>
                    </div>
                    <p className="fourcompare">$4.43 /mo</p>
                  </div>
                  <div className="comparepricesub31">
                    <div className="circlecompare3">
                      <img className="vimg1" src="v3.svg" alt="" />
                    </div>
                    <div className="vcpu1">
                      <div className="raccompare3"></div>
                      <p className="vcpu2">2 vCPU/2 GB RAM/30 GB SSD</p>
                    </div>
                    <p className="fourcompare">$4.43 /mo</p>
                  </div>
                  <div className="comparepricesub31">
                    <div className="circlecompare4">
                      <img className="vimg1" src="v4.svg" alt="" />
                    </div>
                    <div className="vcpu1">
                      <div className="raccompare4"></div>
                      <p className="vcpu2">2 vCPU/2 GB RAM/30 GB SSD</p>
                    </div>
                    <p className="fourcompare">$4.43 /mo</p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default BestPricing;