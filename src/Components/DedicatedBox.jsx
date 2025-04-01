import React from 'react';

const dedicatedServerFeatures = [
  [
    "INSTANT OS RELOADS",
    "SUB-USER SYSTEM",
    "INSTANT OS RELOADS",
    "ADVANCED LINUX SUPPORT",
    "REVERSE DNS MANAGEMENT"
  ],
  [
    "INSTANT SETUP",
    "AVG RESPONSE TIME UNDER 30MIN",
    "99.99% UPTIME SLA",
    "FLEXIBLE HARDWARE CONFIGS",
    "FLEXIBLE HARDWARE CONFIGS"
  ],
  [
    "ACCESS TO KVM & IPMI",
    "ACCESS TO KVM & IPMI",
    "US & UK BASED SUPPORT",
    "FREE BGP PEERING",
    "GUARANTEED NETWORK SPEED"
  ]
];

const DedicatedBox = () => {
  return (
    <div className="max-w-[1366px] w-full mx-auto rounded-[33px] p-6 md:p-[57px] flex flex-col gap-12 md:gap-[100px] bg-[#173724]">
      <div className="flex flex-col items-center mx-auto pt-10 md:pt-[60px] text-center">
        <p className="font-bold text-[#25A75B] text-2xl md:text-[48px] leading-tight md:leading-[58px]">
          DEDICATED <span className="text-[#ffffff]">SERVER HARDWARE</span>
        </p>
        <p className="w-full max-w-[640px] font-normal text-[#ffffff] text-sm md:text-[14px] leading-5 md:leading-[20px]">
          All of our hardware is fully owned and managed by PebbleHost's team, allowing us great flexibility in the services we provide for our Dedicated Servers, and allowing us to ensure the most competitive pricing without compromising on support.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-6 md:gap-[68px]">
        {dedicatedServerFeatures.map((group, index) => (
          <div key={index} className="w-full max-w-[291px] flex flex-col gap-4 md:gap-[16px]">
            {group.map((feature, idx) => (
              <div key={idx} className="w-full h-[50px] rounded-[8px] bg-[#ffffff] ">
                <div className="flex items-center gap-3 px-4 py-2">
                  <div className="w-[19px] h-[19px] rounded-full mb-[10px] bg-[#25A75B]"></div>
                  <p className="w-[auto]font-inter font-medium text-xs md:text-[12px] leading-tight text-[#182A1F] pt-[12px]">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className=''>
        <p className='font-bold text-[64px] text-center justify-center text-[#25A75B]' style={{fontFamily: "'Inter',serif"}}>ServerPie <span className='text-[#ffffff]'>Console</span></p>
      </div>
    </div>
  );
};

export default DedicatedBox;
