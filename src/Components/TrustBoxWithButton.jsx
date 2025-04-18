import { useEffect, useRef } from "react";

const TrustBoxWithButton = () => {
  const trustboxRef = useRef();

  useEffect(() => {
    const scriptId = "trustpilot-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    } else if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(trustboxRef.current, true);
    }
  }, []);

  return (
    
    <div
    ref={trustboxRef}
    className="trustpilot-widget pt-[30px] bg-[#1F2937] text-white px-4 py-3 rounded-lg shadow-md w-auto max-w-md mx-auto"
    data-locale="en-US"
    data-template-id="56278e9abfbbba0bdcd568bc"
    data-businessunit-id="67b579695186fc26ff2841b8"
    data-style-height="52px"
    data-style-width="100%"
  >
    <a
      href="https://www.trustpilot.com/review/serverpie.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white underline hover:text-yellow-300 text-center block"
    >
      View Our Trustpilot Reviews
    </a>
  </div>
  
  
   
  );
};

export default TrustBoxWithButton;
