import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <footer>
    <div className="mainfooter">
    <div className="footer1">
    <div className="subfooter1 text-center items-center justify-center">
      <p>
      Ready to benefit from expert advice? Our team is here to help!
      </p>
      <p className=' w-auto' style={{fontFamily: "'Inter',sans-serif", fontWeight: "500", fontSize: "20px"}}>What data centers does ServerPie use, and where are they located?</p>
      <button>Connect</button>
    </div>
    <img src="girl1.png" alt="" />
  </div>
  {/* <div class="footer2">
  <div class="subfooter2">
    <div class="subbox1">
      <div class="minisubbox1">
        <div class="mini2">
          <h3>ServerPie</h3>
          <img class="img1" src="Vector.png" alt="Logo" />
        </div>
        <p class="para1">Client satisfaction with issue resolution</p>
        <div class="minibox">
          <div class="stars">★★★★★</div>
          <div class="minipar1">
            <p class="minipar">Customer satisfaction rating</p>
            <p class="minipar2">99,42%</p>
          </div>
        </div>
      </div>
    </div>
    <div class="subbox1">
      <div class="boxpar2"><p>Collaboration Process Overview</p></div>
      <div class="boxpar3">
        <div class="rectengle"></div>
        <div class="boxcom3">
          <h4 class="boxhead">Book a Consultation</h4>
          <p class="boxp">Contact us via email or phone to 
          schedule a convenient time.</p>
        </div>
      </div>
      <div class="boxpar3">
        <div class="rectengle"></div>
        <div class="boxcom3">
          <h4 class="boxhead">Customized Solution Proposal.</h4>
          <p class="boxp">We’ll discuss your needs and 
          suggest a tailored solution.</p>
        </div>
      </div>
      <div class="boxpar3">
        <div class="rectengle"></div>
        <div class="boxcom3">
          <h4 class="boxhead">Effortless Deployment</h4>
          <p class="boxp">Once approved, we’ll execute the
          plan efficiently for a smooth transition.</p>
        </div>
      </div>
    </div>
    <div class="subbox1">
      <div class="boxcontact3"><p>Contact Us</p></div>
      <div class="parabox3">
        <div class="subpar1">
          <p class="childpar1">Phone:</p>
          <p class="childpar2">+91 70810 06397</p>
        </div>
        <hr />
        <h2 class="subparmail">E-mail: support@serverpie.com</h2>
        <hr />
        <p class="subparmail2">Leave us your email, and we will get back to you.</p>
        <div class="maininputmail">
          <input class="inputmail" type="email" placeholder="E-mail" />
          <button class="mailsend">SEND</button>
        </div>
        <img class="humanimg" src="human.png" alt="Support" />
      </div>
    </div>
  </div>
</div> */}
      <div className="footer3">
  <div className="subfooter3">
    <ul className="foot">
      <li className="subfoot1">Products</li>
      <li className="subfoot2">Shared Hosting</li>
      <li className="subfoot2">WordPress Hosting</li>
      <li className="subfoot2">Dedicated Hosting</li>
      <li className="subfoot2">Envato Hosting</li>
      <li className="subfoot2">VPS Server</li>
      <li className="subfoot2">Dedicated Server</li>
      <li className="subfoot2">Managed Dedicated Server</li>
      <li className="subfoot2">Managed Dedicated Server</li>
      {/* <li className="subfoot2">Managed NAS</li>
      <li className="subfoot2">Managed Database</li>
      <li className="subfoot2">Mass Mailing</li> */}
    </ul>

    <ul className="foot">
      <li className="subfoot1">Registrar Services</li>
      <li className="subfoot2">Register Domain</li>
      <li className="subfoot2">Transfer Domain</li>
      <li className="subfoot2">Managed Domain</li>
      <li className="subfoot2">Extra protection</li>
      <li className="subfoot2">Identity Protection</li>
      {/* <li className="subfoot2">Proxmox: VMware Alternative</li> */}
    </ul>

    <ul className="foot">
      <li className="subfoot1">Solutions</li>
      <li className="subfoot2">Colocation</li>
      <li className="subfoot2">Cybersecurity Services</li>
      <li className="subfoot2">Managed Aws Services</li>
      <li className="subfoot2">Managed Azure Services</li>
      <li className="subfoot2">Managed Clouds Services</li>
      <li className="subfoot2">Seo Services</li>
      <li className="subfoot2">Ddos Protection</li>
    </ul>
    <ul className="foot">
      <li className="subfoot1">About</li>
      <li className="subfoot2">Data Centre</li>
      <li className="subfoot2">About Us</li>
      <li className="subfoot2">Testimonials</li>
      <li className="subfoot2">Partner Program</li>
      <li className="subfoot2">Career</li>
      <li className="subfoot2">Sustainability</li>
    </ul>
    <ul className="foot">
      <li className="subfoot1">Legal</li>
      <li className="subfoot2">Privacy Policy</li>
      <li className="subfoot2">Terms & Condition Policy</li>
      <li className="subfoot2">Refund Policy</li>
      <li className="subfoot2">Cancellation Policy</li>
      <li className="subfoot2">Unlimited Policy</li>
      <li className="subfoot2">Abuse Policy</li>
    </ul>
    <ul className="foot">
      <li className="subfoot1">Our Contact Channels</li>
      <li className="subfoot2">Support:Support@serverpie.com</li>
      <li className="subfoot2">Sales:Sales@serverpie.com</li>
      <li className="subfoot2">Billing:biling@serverpie.com</li>
      <li className="subfoot2">Tech: tech@serverpie.com</li>
      <li className="subfoot2">Abuse: abuse@serverpie.com</li>
    </ul>
  </div>

  {/* Horizontal line separator */}
  <hr />

  {/* Single-line paragraph section */}
  <div className="footer-bottom">
  <p>
      The information contained herein is subject to change without notice and is not warranted to be error-free.
      &nbsp;&nbsp;&nbsp;Privacy protection&nbsp;&nbsp;&nbsp;Documents for download
    </p>
  </div>
</div>
    </div>
  </footer>
  )
}

export default Footer;