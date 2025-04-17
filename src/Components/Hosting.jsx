import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../Styles/Hosting.css";

const Hosting = () => {
  const [activeTab, setActiveTab] = useState("Plus");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [showMore, setShowMore] = useState({});


  const tabs = ["Shared Hosting", "WordpressHostinig", "Dedicated Hosting"];

  const sectionData = [
    {
      title: "Top Features",
      key: "features",
      withQuestion: true,
    },
    {
      title: "Resources",
      key: "resources",
      withQuestion: true,
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
        // supportTitle: "Support - approx response time 24-48 hr",
        features: [
          "1 Website",
          "Upto ~15000 Visits",
          "30 GB Nvme SSD",
          "Unmetered Bandwidth",
        ],
        resources: [
          "Unmetered Bandwidth",
          "2 subdomains",
          "2 databases",
          "1 FTP account",
          "2 Email box",
          "5 cronjobs",
        ],
        security: [
          "Free SSL- Let's Encrypt",
          "Free Malware Scanning",
          "Web Application Firewall",
          "DDoS Protection Included",
          "Proactive protection",
          "Secure access manager",
          "Brute force protection ",
          "Network level Filtering",
          "Real time intrusion scanner",
          "owasp and modsecurity Waf",
          "Daily Website Backups",
          "Email Scanner",
          "Expert  monitoring",
        ],
        supportTitle: "Support - approx response time 24-48 hr",
        support: [
          "Customer support",
          "Ticket support",
          "Live chat support",
          "Whatsapp support",
          "On demand call support",
        ],
        tech: [
          "30 PHP workers",
          "Single Core system",
          "1 GB Shared Memory",
          "3,00,000 INODES",
          "10 Processes",
        ],
        benefits: [
          "Cpanel Control Panel",
          "Dns Manager",
          "Cage Environment",
          "Litespeed Engine",
          "Git version control",
          "Wordpress toolkit",
          "softaculous installer",
          "softaculous installer",
          "Jetbackup",
          "Immunity360 Protection",
          "Redis Cache",
          "ClaimAV virus cleaner",
        ],
      },
    },
    {
      name: "Plus",
      description: "Boost your site with better resources and speed",
      price: "₹149.00/m",
      oldPrice: "₹12.99 - 12/mo term",
      data: {
        // supporttTitle: "Support - approx response time 12-28 hr",
        features: [
          "30 Website",
          "Upto ~30000 Visits",
          "60 GB Nvme SSD",
          "Unmetered Bandwidth",
        ],
        resources: [
          "Unmetered Bandwidth",
          "100 subdomains",
          "100 databases",
          "100 FTP account",
          "100 Email box",
          "100 cronjobs",
        ],
        security: [
          "Free SSL- Let's Encrypt",
          "Free Malware Scanning",
          "Web Application Firewall",
          "DDoS Protection Included",
          "Proactive protection",
          "Secure access manager",
          "Brute force protection ",
          "Network level Filtering",
          "Real time intrusion scanner",
          "owasp and modsecurity Waf",
          "Daily Website Backups",
          "Email Scanner",
          "Expert  monitoring",
        ],
        supporttTitle: "Support - approx response time 12-28 hr",
        support: [
          "Customer support",
          "Ticket support",
          "Live chat support",
          "Whatsapp support",
          "On demand call support",
        ],
        tech: [
          "50 PHP workers",
          "Single Core system",
          "2 GB Shared Memory",
          "6,00,000 INODES",
          "30 Processes",
        ],
        benefits: [
          "Cpanel Control Panel",
          "Dns Manager",
          "Cage Environment",
          "Litespeed Engine",
          "Git version control",
          "Wordpress toolkit",
          "softaculous installer",
          "softaculous installer",
          "Jetbackup",
          "Immunity360 Protection",
          "Redis Cache",
          "ClaimAV virus cleaner",
        ],
      },
    },
    {
      name: "Premium",
      description: "Power your business website or online store",
      price: "₹249.00/m",
      oldPrice: "billed for 36 month",
      data: {
        // supportTitle: "Support - approx response time 6-12 hr",
        features: [
          "60 Website",
          "Upto ~50000 Visits",
          "100 GB Nvme SSD",
          "Unmetered Bandwidth",
        ],
        resources: [
          "Unmetered Bandwidth",
          "300 subdomains",
          "300 databases",
          "300 FTP account",
          "300 Email box",
          "300 cronjobs",
        ],
        security: [
          "Free SSL- Let's Encrypt",
          "Free Malware Scanning",
          "Web Application Firewall",
          "DDoS Protection Included",
          "Proactive protection",
          "Secure access manager",
          "Brute force protection ",
          "Network level Filtering",
          "Real time intrusion scanner",
          "owasp and modsecurity Waf",
          "Daily Website Backups",
          "Email Scanner",
          "Expert  monitoring",
        ],
        supportTitle: "Support - approx response time 6-12 hr",
        support: [
          "Customer support",
          "Ticket support",
          "Live chat support",
          "Whatsapp support",
          "On demand call support",
        ],
        tech: [
          "80 PHP workers",
          "Single Core system",
          "3 GB Shared Memory",
          "10,00,000 INODES",
          "60 Processes",
        ],
        benefits: [
          "Cpanel Control Panel",
          "Dns Manager",
          "Cage Environment",
          "Litespeed Engine",
          "Git version control",
          "Wordpress toolkit",
          "softaculous installer",
          "softaculous installer",
          "Jetbackup",
          "Immunity360 Protection",
          "Redis Cache",
          "ClaimAV virus cleaner",
        ],
      },
    },
    {
      name: "Exclusive",
      description: "Top-tier hosting for serious performance and scale",
      price: "₹499.00/m",
      oldPrice: "₹29.99 - 12/mo term",
      data: {
        // supportTitle: "Support - approx response time 3-6 hr",
        features: [
          "100 Website",
          "Upto ~200000 Visits",
          "200 GB Nvme SSD",
          "Unmetered Bandwidth",
        ],
        resources: [
          "Unmetered Bandwidth",
          "Unlimited subdomains",
          "Unlimited databases",
          "Unlimited FTP account",
          "Unlimited Email box",
          "Unlimited cronjobs",
        ],
        security: [
          "Free SSL- Let's Encrypt",
          "Free Malware Scanning",
          "Web Application Firewall",
          "DDoS Protection Included",
          "Proactive protection",
          "Secure access manager",
          "Brute force protection ",
          "Network level Filtering",
          "Real time intrusion scanner",
          "owasp and modsecurity Waf",
          "Daily Website Backups",
          "Email Scanner",
          "Expert  monitoring",
        ],
        supportTitle: "Support - approx response time 3-6 hr",
        support: [
          "Customer support",
          "Ticket support",
          "Live chat support",
          "Whatsapp support",
          "On demand call support",
        ],
        tech: [
          "100 PHP workers",
          "Single Core system",
          "4 GB Shared Memory",
          "30,00,000 INODES",
          "100 Processes",
        ],
        benefits: [
          "Cpanel Control Panel",
          "Dns Manager",
          "Cage Environment",
          "Litespeed Engine",
          "Git version control",
          "Wordpress toolkit",
          "softaculous installer",
          "softaculous installer",
          "Jetbackup",
          "Immunity360 Protection",
          "Redis Cache",
          "ClaimAV virus cleaner",
        ],
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

      <div className="hostingprovider">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {planData.map((plan, cardIndex) => {
            const isActive = plan.name === activeTab;
            const isHovered = plan.name === hoveredTab;

            return (
              <div>
              <div
                key={plan.name}
                className={`hostingsub relative transition-all duration-300 ${
                  isActive || isHovered ? "active-hosting-box" : ""
                }`}
                onClick={() => setActiveTab(plan.name)} // Link click to active tab
              >
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

                {sectionData.slice(0, 3).map(({ title, key, withQuestion }) => (
                  <div key={key} className="mt-6">
                    <h5 className={key === "resources" ? "hostingh51" : "hostingh5"}>
                      {key === "support"
                        ? plan.data.supportTitle || plan.data.supporttTitle || title
                        : title}
                    </h5>
                    <div className="mt-3">
                      {plan.data[key].map((item, idx) => {
                        const showQuestion =
                          withQuestion && (key !== "features" || item === "Unmetered Bandwidth");
                        return (
                          <div key={idx} className="hostingminipar001">
                            <div style={{ display: "flex", flexDirection: "row" }}>
                              <FaCircleCheck className="rightcircle" />
                              <p className="hostingpar01">{item}</p>
                            </div>
                            {showQuestion && <MdQuestionMark className="questinghost" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {showMore[cardIndex] &&
                  sectionData.slice(3).map(({ title, key, withQuestion }) => (
                    <div key={key} className="mt-6">
                      <h5 className={key === "resources" ? "hostingh51" : "hostingh5"}>
                        {key === "support"
                          ? plan.data.supportTitle || plan.data.supporttTitle || title
                          : title}
                      </h5>
                      <div className="mt-3">
                        {plan.data[key].map((item, idx) => {
                          const showQuestion =
                            withQuestion &&
                            (key !== "features" || item === "Unmetered Bandwidth");
                          return (
                            <div key={idx} className="hostingminipar001">
                              <div style={{ display: "flex", flexDirection: "row" }}>
                                <FaCircleCheck className="rightcircle" />
                                <p className="hostingpar01">{item}</p>
                              </div>
                              {showQuestion && <MdQuestionMark className="questinghost" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                <div
                  className="flex justify-center items-center mt-4 cursor-pointer"
                  onClick={() =>
                    setShowMore((prev) => ({
                      ...prev,
                      [cardIndex]: !prev[cardIndex],
                    }))
                  }
                >
                  {showMore[cardIndex] ? (
                    <FaChevronUp className="text-blue-600" />
                  ) : (
                    <FaChevronDown className="text-blue-600" />
                  )}
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hosting;