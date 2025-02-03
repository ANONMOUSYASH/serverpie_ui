import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <footer>
    <div className="mainfooter">
    <div className="footer1">
    <div className="subfooter1">
      <p>
        Ready to benefit from expert advice? Our team is here to help!
      </p>
      <button>CONTACT US</button>
    </div>
  </div>
  <div class="footer2">
  <div class="subfooter2">
    <div class="subbox1">
      <div class="minisubbox1">
        <div class="mini2">
          <h3>vshosting</h3>
          <img class="img1" src="Vector.png" alt="Logo" />
        </div>
        <p class="para1">Client satisfaction with issue resolution</p>
        <img class="img2" src="Vector1.png" alt="Rating" />
        <div class="minibox">
          <div class="stars">★★★★★</div>
          <div class="minipar1">
            <p class="minipar">Customer satisfaction rating</p>
            <p class="minipar2">99.42%</p>
          </div>
        </div>
      </div>
    </div>
    <div class="subbox1">
      <div class="boxpar2"><p>How our collaboration process works</p></div>
      <div class="boxpar3">
        <div class="rectengle"></div>
        <div class="boxcom3">
          <h4 class="boxhead">Scheduling a consultation</h4>
          <p class="boxp">Reach out to us via email or phone, and we will find the most convenient time for you.</p>
        </div>
      </div>
      <div class="boxpar3">
        <div class="rectengle"></div>
        <div class="boxcom3">
          <h4 class="boxhead">Free solution proposal</h4>
          <p class="boxp">We will discuss how we can assist you and propose a customized solution tailored to your needs.</p>
        </div>
      </div>
      <div class="boxpar3">
        <div class="rectengle"></div>
        <div class="boxcom3">
          <h4 class="boxhead">Professional implementation</h4>
          <p class="boxp">Upon final approval, we will proceed with the implementation for a seamless migration.</p>
        </div>
      </div>
    </div>
    <div class="subbox1">
      <div class="boxcontact3"><p>Contact Us</p></div>
      <div class="parabox3">
        <div class="subpar1">
          <p class="childpar1">Phone:</p>
          <p class="childpar2">+420 246 035 835</p>
        </div>
        <hr />
        <h2 class="subparmail">E-mail: consultation@vshosting.eu</h2>
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
</div>
      <div className="footer3">
  <div className="subfooter3">
    <ul className="foot">
      <li className="subfoot1">Products</li>
      <li className="subfoot2">GPU Servers</li>
      <li className="subfoot2">GPU Cloud</li>
      <li className="subfoot2">Private Cloud</li>
      <li className="subfoot2">Managed Server</li>
      <li className="subfoot2">Managed Cloud</li>
      <li className="subfoot2">Dedicated Server</li>
      <li className="subfoot2">CDN</li>
      <li className="subfoot2">CloudMail</li>
      <li className="subfoot2">Managed NAS</li>
      <li className="subfoot2">Managed Database</li>
      <li className="subfoot2">Mass Mailing</li>
    </ul>

    <ul className="foot">
      <li className="subfoot1">Solutions</li>
      <li className="subfoot2">Cloud Repatriation</li>
      <li className="subfoot2">Managed Kubernetes</li>
      <li className="subfoot2">Managed AWS</li>
      <li className="subfoot2">Backup and Disaster Recovery</li>
      <li className="subfoot2">Managed Windows</li>
      <li className="subfoot2">Proxmox: VMware Alternative</li>
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
      <li className="subfoot1">Insights</li>
    </ul>
    <ul className="foot">
      <li className="subfoot1">Contact</li>
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