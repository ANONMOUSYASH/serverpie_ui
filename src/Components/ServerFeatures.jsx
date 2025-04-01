import React from 'react';

const serverFeatures = [
  { img: "server1.png", text: "DDOS Protection", learnMore: true },
  { img: "server2.png", text: "24/7 UPTIME MONITORING" },
  { img: "server3.png", text: "1 gbps Unmetered" },
  { img: "", text: "Remote Reboots" },
  { img: "server4.png", text: "MANAGED SUPPORT", learnMore: true },
  { img: "server5.png", text: "ZERO SETUP FEES", learnMore: true },
  { img: "", text: "24/7 UPTIME MONITORING" },
  { img: "", text: "Remote KVM" },
  { img: "server6.png", text: "PROVISIONING Time" },
  { img: "server7.png", text: "Floating IPs" },
  { img: "server8.png", text: "IPMI Access" },
  { img: "server9.png", text: "Remote OS Reinstall" }
];

const ServerFeatures = () => {
  return (
    <div className="w-full bg-[#FAFAFA] flex flex-col items-center text-center p-6 md:p-[50px]">
      <p className="font-inter font-bold text-3xl md:text-[48px] leading-[58px] text-[#25A75B] p-[10px]">
        Server <span className="text-[#000000]">Features</span>
      </p>
      <div className="w-full max-w-[1219px] flex flex-wrap justify-center gap-[29px] pt-[20px]">
        {serverFeatures.map((feature, index) => (
          <div key={index} className="w-[179px] h-[120px] border-[1px] border-[#F3F3F3] rounded-[12px] p-[10px] bg-[#FFFFFF] shadow-md">
            <div className="w-[43px] h-[43px] rounded-full bg-[#F1F1F1] flex items-center justify-center mx-auto">
              {feature.img && <img className="p-[10px]" src={feature.img} alt="" />}
            </div>
            <p className="font-inter font-medium text-[12px] leading-[18px] text-center w-[130px] mx-auto pt-[5px]">
              {feature.text} {feature.learnMore && <span className="text-[#25A75B]">(LEARN MORE)</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerFeatures;
