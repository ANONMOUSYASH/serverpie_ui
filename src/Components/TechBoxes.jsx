import React from 'react';
import { MdArrowOutward } from "react-icons/md";

const TechBoxes = () => {
  return (
    <div className="tech-box-container flex flex-col gap-6 items-center justify-center mx-auto p-4">
      <div className="tech-boxes flex flex-wrap gap-4 justify-center">
        {[
          "ASP.NET 7", "cPanel", "CyberPanel 7", "DirectAdmin 7", "Django 7", "Docker 7",
          "Forex", "Ghost", "Jitsi", "Laravel", "Linux", "Magento",
          "Moodle", "n8n", "Nextcloud", "Node.js", "Odoo 7", "Plesk", "Portainer", "Rails"
        ].map((tech, index) => (
          <div key={index} className="tech-box w-[auto] h-[54px] flex items-center justify-center gap-[10px] px-[24px] py-[12px] border-[1px] border-[#C5FFDD] rounded-[100px]">
            <p className="font-bold text-[18px] leading-[30px] tracking-[-0.025em] text-[#0E2954] pt-[15px]" style={{ fontFamily: "'Inter',serif" }}>
              {tech}
            </p>
            <MdArrowOutward className="w-4 h-4 text-[#25A75B]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechBoxes;