import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../../Styles/WordpressHosting.css';
import Hosting from '../../Components/Hosting';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Faq from '../../Components/Faq';
import TryoutServices from '../../Components/TryoutServices';
import Contactfriedly from '../../Components/Contactfriedly';
import Wordpress from '../../Components/Wordpress';
import WordpressHost from '../../Components/WordpressHost';

const WordpressHosting = () => {
  return (
    <div>
      {/* --------------------------- Main Content --------------------------- */}
      <main>

        {/* ===================== HERO SECTION ===================== */}
        <div className="wordpresshero pt-[10%]">
          <div className="wordpresshero1">
            <p className="wordpressheropar1">
              Fast, Secure & Managed WordPress Hosting
            </p>
            <p className="wordpressheropar2">
              Supercharge your WordPress website with our high-speed, secure, and fully optimized hosting.
            </p>
            <div className="wordpressherobtn">
              <button className="wordpressherobttn1">Buy Now</button>
              <button className="wordpressherobtn2">Connect With Expert</button>
            </div>
          </div>

          {/* Hero Illustration Image */}
          <div>
            <img src="computer1.png" alt="WordPress Hosting" />
          </div>
        </div>
        {/* ===================== HERO SECTION END ===================== */}

        {/* ===================== WORDPRESS FEATURES SECTION ===================== */}
        <Wordpress />
        {/* ===================== WORDPRESS FEATURES SECTION END ===================== */}

        {/* ===================== WORDPRESS HOSTING PLANS ===================== */}
        <WordpressHost />
        {/* ===================== WORDPRESS HOSTING PLANS END ===================== */}

        {/* ===================== BOOST YOUR BUSINESS SECTION ===================== */}
        <div className="boostcompmain">
          <div className="boostcompmain1">

            {/* Section Title */}
            <div className="boostcompmain2">
              <p className='boostmainpar1'>We help you boost your business</p>
            </div>

            {/* Boost Features */}
            <div className="boostcompmain3">
              {[
                "99.99% Uptime",
                "Anoravaily",
                "Dedicated Support",
                "30-Day Money-Back Guarantee"
              ].map((feature, i) => (
                <div className="boostcompmain33" key={i}>
                  <div className="boostrecmain"></div>
                  <p className="subboostpar2">{feature}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
        {/* ===================== BOOST YOUR BUSINESS SECTION END ===================== */}

        {/* ===================== WORDPRESS SITE BUILDER CTA ===================== */}
        <div className="planningcommain">
          <div className="planningcommain4">
            <p className="plaanningcompar1">Planning to create WordPress sites?</p>
            <p className="planningcompar2">You can now build WordPress sites in just 1-click.</p>
            <button className="planningcombtn1">Order Now</button>
          </div>
        </div>
        {/* ===================== WORDPRESS SITE BUILDER CTA END ===================== */}

        {/* ===================== FAQ SECTION ===================== */}
        <Faq />
        {/* ===================== FAQ SECTION END ===================== */}

        {/* ===================== TRY OUT SERVICES SECTION ===================== */}
        <TryoutServices />
        {/* ===================== TRY OUT SERVICES SECTION END ===================== */}

        {/* ===================== FRIENDLY CONTACT SECTION ===================== */}
        <Contactfriedly />
        {/* ===================== FRIENDLY CONTACT SECTION END ===================== */}

      </main>

      {/* --------------------------- Footer --------------------------- */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default WordpressHosting;
