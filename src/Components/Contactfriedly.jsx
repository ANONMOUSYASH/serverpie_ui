import React from "react";
import { PiChatsCircleFill } from "react-icons/pi";
import { PiChatCircleTextFill } from "react-icons/pi";
import { FaPhoneVolume } from "react-icons/fa6";
import "../Styles/Contactfriedly.css";

const Contactfriedly = () => {
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
      <div className="submainfram92">
        <div className="subbox91">
            {/* <div className="circle"> */}
            <img src="call.svg" alt="" />
          {/* </div> */}
          <p className="livep">Live Chat with Sales</p>
          <p className="speak">
            Speak directly to our expert sales team for instant assistance
          </p>
          <button className="chat">Chat Now</button>
        </div>
        <div className="subbox91">
          {/* <div className="circle"> */}
          <img src="whats.svg" alt="" />
          {/* </div> */}
          <p className="livep">Whatsapp Support</p>
          <p className="speak">
            Connect with our friendly support team on WhatsApp for quick help.
          </p>
          <button className="chat">Whatsapp</button>
        </div>
        <div className="subbox91">
          {/* <div className="circle"> */}
            <img src="whats1.svg" alt="" />
          {/* </div> */}
          <p className="livep">Raise a Support Ticket</p>
          <p className="speak">
            Need help? Submit a ticket, and our team will respond promptly.
          </p>
          <button className="chat">Raise Ticket</button>
        </div>
        <div className="subbox91">
           {/* <div className="circle"> */}
           <img src="call1.svg" alt="" />
          {/* </div> */}
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
