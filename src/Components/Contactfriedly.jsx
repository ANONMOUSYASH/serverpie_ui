import React, { useEffect, useRef } from "react";
import "../Styles/Contactfriedly.css";

const Contactfriedly = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const isMobile = window.innerWidth <= 768;
    if (!isMobile || !container) return;

    let scrollDirection = 1;

    const autoScroll = () => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        scrollDirection = -1;
      } else if (container.scrollLeft <= 0) {
        scrollDirection = 1;
      }

      container.scrollLeft += scrollDirection * 1.5; // scroll speed
    };

    const intervalId = setInterval(autoScroll, 20); // interval time

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="frammain9">
      <div className="submainfram9">
        <p className="conpar">Contact Us</p>
        <p className="letp">
          Host your websites closer to your audience with our worldwide server
          locations, including London, New York, Sydney, Singapore, and more.
          Improve speed, reliability, and SEO rankings with optimized server
          placement.
        </p>
      </div>
      <div className="submainfram92" ref={scrollRef}>
        <div className="subbox91">
          <img src="call.svg" alt="" />
          <p className="livep">Live Chat with Sales</p>
          <p className="speak">
            Speak directly to our expert sales team for instant assistance
          </p>
          <button className="chat">Chat Now</button>
        </div>
        <div className="subbox91">
          <img src="whats.svg" alt="" />
          <p className="livep">Whatsapp Support</p>
          <p className="speak">
            Connect with our friendly support team on WhatsApp for quick help.
          </p>
          <button className="chat">Whatsapp</button>
        </div>
        <div className="subbox91">
          <img src="whats1.svg" alt="" />
          <p className="livep">Raise a Support Ticket</p>
          <p className="speak">
            Need help? Submit a ticket, and our team will respond promptly.
          </p>
          <button className="chat">Raise Ticket</button>
        </div>
        <div className="subbox91">
          <img src="call1.svg" alt="" />
          <p className="livep">Connect on call</p>
          <p className="speak">
            Get in touch with our team directly for assistance over the phone.
          </p>
          <button className="chat">Call Now</button>
        </div>
      </div>
    </div>
  );
};

export default Contactfriedly;
