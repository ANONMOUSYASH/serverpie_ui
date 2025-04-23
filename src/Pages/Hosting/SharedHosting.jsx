import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import HostingSolution from '../../Components/HostingSolution';
import '../../Styles/SharedHosting.css';
import Steps from '../../Components/Steps';
import Faq from '../../Components/Faq';
import TryoutServices from '../../Components/TryoutServices';
import Contactfriedly from '../../Components/Contactfriedly';
import Hosting from '../../Components/Hosting';
import Hostingplans from '../../Components/Hostingplans';
import Testimonial from "../../Components/Testimonial";
import WorkingStaps from '../../Components/WorkingSteps';
import BestPricing from '../../Components/BestPricing';
import SecretServpie from '../../Components/SecretServpie';
import SharedHost from '../../Components/SharedHost';

const SharedHosting = () => {
  return (
    <div>
      {/* ===== Main Content Starts ===== */}
      <main>

        {/* ===== Hero Section ===== */}
        <div className="container">
        <section className='sharedhosthero'>
          <div className="sharedhostherosub">
            <p className='sharedhostingheropar1 text-start font-medium'> 
              Fast & Secure Hosting Go Live Instantly!
            </p>
            <p className='sharedhostingheropar2 text-start pl-[30px] text-[#2D5087]'>
              Affordable, reliable, and optimized for speed – Perfect for blogs, startups, 
              and businesses. Get free SSL, cPanel, and 24/7 expert support!
            </p>
            <div className="sharehostherobtn mr-[20%]">
              <button className='sharedhostingbtn12 bg-[#3973E6]'>Buy Now</button>
              <button className='sharedhostingbtn22' style={{width: "222px"}}>Connect With Expert</button>
            </div>
          </div>
          <div className='w-auto h-auto ml-[15%]'>
            <img src="computer1.png" alt="Serverpie Computer" />
          </div>
        </section>
        </div>
        {/* ===== Hero Section End ===== */}

        {/* ===== Steps Section (Working Process) ===== */}
        <WorkingStaps />

        {/* ===== Hosting Comparison Section ===== */}  
        {/* <Hosting /> */}
        <SharedHost />

        {/* ===== Hosting Solution Section (Scroll-based) ===== */}
        <HostingSolution />

        {/* ===== Best Pricing Plans Section ===== */}
        <BestPricing />

        {/* ===== Secret of Serverpie Section (Unique Features) ===== */}
        <SecretServpie />
        {/* ===== Secret of Serverpie End ===== */}

        {/* ===== Hosting Plans with Tabs Section ===== */}
        
        <Hostingplans />

        {/* ===== Testimonial Section (Client Reviews) ===== */}
        <Testimonial />

        {/* ===== FAQ Section ===== */}
        <Faq />
        {/* ===== FAQ Section End ===== */}

        {/* ===== Try Out Services Section ===== */}
        <TryoutServices />
        {/* ===== Try Out Services End ===== */}

        {/* ===== Contact-Friendly Section (Support) ===== */}
        <Contactfriedly />
        {/* ===== Contact-Friendly Section End ===== */}

      </main>
      {/* ===== Main Content End ===== */}

      {/* ===== Footer Section ===== */}
      <footer>
        <Footer />
      </footer>
      {/* ===== Footer Section End ===== */}
    </div>
  );
};

export default SharedHosting;
