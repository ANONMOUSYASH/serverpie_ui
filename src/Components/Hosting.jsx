import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";
import "../Styles/Hosting.css";

const Hosting = () => {
  const [activeTab, setActiveTab] = useState("Basic");

  const tabs = ["Basic", "Plus", "Premium", "Exclusive"];

  const sectionData = [
    {
      title: "Top Features",
      key: "features",
      withQuestion: true,
    },
    {
      title: "Resources",
      key: "resources",
      withQuestion: false,
    },
    {
      title: "Security",
      key: "security",
      withQuestion: true,
    },
    {
      title: "Support - approx response time 24-48 hr",
      key: "support",
      withQuestion: true,
    },
    {
      title: "Technical Configuration",
      key: "tech",
      withQuestion: true,
    },
    {
      title: "Additional Benefits",
      key: "benefits",
      withQuestion: true,
    },
  ];

  const planData = [
    {
      name: "Basic",
      description: "Simple. Reliable. Perfect for personal projects",
      price: "₹169.00/m",
      oldPrice: "₹9.99 - 12/mo term",
      data: {
        features: ["1 Website", "Upto ~15000 Visits", "30 GB Nvme SSD", "Unmetered Bandwidth"],
        resources: ["Unmetered Bandwidth", "2 subdomains", "2 databases", "1 FTP account", "2 Email box", "5 cronjobs"],
        security: ["Free SSL- Let's Encrypt", "Malware Scanning", "DDoS Protection"],
        support: ["Email support", "Ticket support"],
        tech: ["30 PHP workers", "Single Core", "1 GB Memory"],
        benefits: ["Cpanel", "Softaculous", "Litespeed Engine"],
      },
    },
    {
      name: "Plus",
      description: "Boost your site with better resources and speed",
      price: "₹149.00/m",
      oldPrice: "₹12.99 - 12/mo term",
      data: {
        features: ["5 Websites", "Upto ~50000 Visits", "60 GB Nvme SSD", "Unmetered Bandwidth"],
        resources: ["Unlimited Bandwidth", "10 subdomains", "10 databases", "5 FTP accounts", "5 Email box", "10 cronjobs"],
        security: ["Free SSL", "Malware Scanning", "WAF", "DDoS Protection"],
        support: ["Live Chat", "Email", "Ticket", "Whatsapp"],
        tech: ["50 PHP workers", "Dual Core", "2 GB Memory"],
        benefits: ["Git Versioning", "SitePad Builder", "JetBackup"],
      },
    },
    {
      name: "Premium",
      description: "Power your business website or online store",
      price: "₹249.00/m",
      oldPrice: "billed for 36 month",
      data: {
        features: ["10 Websites", "Upto ~100000 Visits", "100 GB Nvme SSD", "Unmetered Bandwidth"],
        resources: ["Unlimited everything", "20 Email boxes", "20 cronjobs"],
        security: ["Advanced Firewall", "Daily Backup", "Proactive Monitoring"],
        support: ["Phone", "Chat", "Ticket", "Email", "WhatsApp"],
        tech: ["70 PHP workers", "Quad Core", "4 GB Memory"],
        benefits: ["Redis Cache", "Immunity360", "WordPress Toolkit"],
      },
    },
    {
      name: "Exclusive",
      description: "Top-tier hosting for serious performance and scale",
      price: "₹499.00/m",
      oldPrice: "₹29.99 - 12/mo term",
      data: {
        features: ["Unlimited Websites", "Upto ~500000 Visits", "200 GB Nvme SSD", "Unmetered Bandwidth"],
        resources: ["Unlimited everything", "Unlimited cronjobs", "Unlimited databases"],
        security: ["Enterprise Firewall", "DDoS Protection", "WAF", "Real-time Scanning"],
        support: ["24/7 Premium Support", "Dedicated Manager"],
        tech: ["100 PHP workers", "Hexa Core", "8 GB Memory"],
        benefits: ["JetBackup", "GitHub CI/CD", "Premium Cpanel", "Litespeed Pro"],
      },
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

      <div className="hostingprovider">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {planData.map((plan, cardIndex) => (
            <div key={plan.name} className="hostingsub relative">
              {cardIndex === 1 && (
                <div className="absolute -top-3 left-4 bg-[#3973E6] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h4 className="hostingh4">{plan.name}</h4>
              <p className="hostingpar">{plan.description}</p>
              <p className="hostingparprice">{plan.price}</p>
              <p className="hostingparprice2">Normally {plan.oldPrice}</p>
              <hr className="hostinghr hidden sm:block" />
              <button className="hostingbutton">Buy Now</button>

              {sectionData.map(({ title, key, withQuestion }) => (
                <div key={key} className="mt-6">
                  <h5 className={key === "resources" ? "hostingh51" : "hostingh5"}>
                    {title}
                  </h5>
                  <div className="mt-3">
                    {plan.data[key].map((item, idx) => (
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
              ))}

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
