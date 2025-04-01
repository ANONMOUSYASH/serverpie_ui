import React from 'react'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import '../../Styles/WordpressHosting.css';
import Hosting from '../../Components/Hosting'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Faq from '../../Components/Faq';
import TryoutServices from '../../Components/TryoutServices';
import Contactfriedly from '../../Components/Contactfriedly';
import Wordpress from '../../Components/Wordpress';

const WordpressHosting = () => {
  return (
    <div>
    <nav>
      {/* <Navbar /> */}
    </nav>
    <main>
      {/* Herro Section */}
      <div className="wordpresshero">
        <div className="wordpresshero1">
          <p className="wordpressheropar1">Fast, Secure & Managed
          WordPress Hosting</p>
          <p className="wordpressheropar2">Supercharge your WordPress website with our high-speed, secure, and fully optimized hosting.</p>
        </div>
        <div className="wordpressherobtn">
          <button className="wordpressherobttn1">View Plans</button>
          <button className="wordpressherobtn2">Connect With Expert</button>
        </div>
      </div>
      {/* Hero Section End */}
      {/* Hero Image Section */}
      <Wordpress />
      {/* Hero Image Section End */}

      {/* Hosting Plan */}
      <Hosting />
      {/* Hosting Plan End */}

      {/* Boost Component */}
      <div className="boostcompmain">
      <div className="boostcompmain1">
      <div className="boostcompmain2">
        <p className='boostmainpar1'>We help you boost your business</p>
      </div>
      <div className="boostcompmain3">
      <div className="boostcompmain33">
        <div className="boostrecmain"></div>
        <p className="subboostpar2">99.99% Uptime</p>
      </div>
      <div className="boostcompmain33">
        <div className="boostrecmain"></div>
        <p className="subboostpar2">Anoravaily</p>
      </div>
      <div className="boostcompmain33">
        <div className="boostrecmain"></div>
        <p className="subboostpar2">Dedicated Support</p>
      </div>
      <div className="boostcompmain33">
        <div className="boostrecmain"></div>
        <p className="subboostpar2">30-Day Money-Back Guarantee</p>
      </div>
      </div>
      </div>
      </div>
      {/* Boost Component End */}

      {/* Wordpress siter com */}
      <div className="planningcommain">
      <div className="planningcommain1">
      <div className="planningcommain2">
      <div className="planningcommain3"></div>
      <div className="planningcommain4">
        <p className="plaanningcompar1">Planning to create <span className='spanplanningcom1'>WordPress</span> sites?</p>
        <p className="planningcompar2">You can now build WordPress sites in just 1-click.</p>
      </div>
      </div>
      <div className="planningcom5">
        <button className="planningcombtn1">order now</button>
      </div>
      </div>
      </div>
       {/* Wordpress siter com End */}

        {/* Faq Com */}
        <Faq />
        {/* Faq Com End*/}

         {/* TryOutServices Com */}
       <TryoutServices />
        {/* TryOutServices Com End*/}

        {/* ContactFriedly Com */}
       <Contactfriedly />
       {/* ContactFriedly Com End*/}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
  )
}

export default WordpressHosting;
