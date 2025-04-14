import React from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "../Styles/Wordpress.css";

const Wordpress = () => {
  return (
    // ================== Main Container ==================
    <div className='wordpressheroimgmain'>

      {/* ---------- Section 1: Heading Text ---------- */}
      <div className='wordpressheroimgsub1'>
        <p className="wordpressheroimgpar1">
          everything your wordpress site needs for <span className='subwordpressspan'>success.</span>
        </p>
        {/* Optional Subheading */}
        {/* <p className="wordpressheroimgpar2">At A2 Hosting, we make WordPress easy and give you access to a variety of tools to get your website up and running in no time.</p> */}
      </div>

      {/* ---------- Section 2: Feature List + Image ---------- */}
      <div className='wordpressheroimgsub2'>

        {/* Left: Feature Boxes */}
        <div className='wordpressheroimg22'>

          {/* === Feature Box 1 === */}
          <div className="wordpresssubmini">
            <div className="subwordpressimg">
              <div className="iconwordpress">
                <MdOutlineArrowForwardIos className='iconwordpress1' />
              </div>
              <p className='subwordpresspar1'>Out-Of-The-Box Optimized WordPress</p>
            </div>
            <p className='subwordpresspar2'>
              We pre-configure our WordPress installs with the best speed and security settings with our A2 Optimized plugin.
            </p>
          </div>

          {/* === Feature Box 2 === */}
          <div className="wordpresssubmini">
            <div className="subwordpressimg">
              <div className="iconwordpress">
                <MdOutlineArrowForwardIos className='iconwordpress1' />
              </div>
              <p className='subwordpresspar1'>WooCommerce for WordPress</p>
            </div>
            <p className='subwordpresspar2'>
              Easily create an online eCommerce store with just a few clicks by adding the WooCommerce plugin to your site.
            </p>
          </div>

          {/* === Feature Box 3 === */}
          <div className="wordpresssubmini">
            <div className="subwordpressimg">
              <div className="iconwordpress">
                <MdOutlineArrowForwardIos className='iconwordpress1' />
              </div>
              <p className='subwordpresspar1'>TurboHub Control Panel</p>
            </div>
            <p className='subwordpresspar2'>
              Easily optimize performance, update plugins, and increase security for every A2 Hosting WordPress site you manage with our cutting-edge TurboHub control panel.
            </p>
          </div>

          {/* === Feature Box 4 === */}
          <div className="wordpresssubmini">
            <div className="subwordpressimg">
              <div className="iconwordpress">
                <MdOutlineArrowForwardIos className='iconwordpress1' />
              </div>
              <p className='subwordpresspar1'>Need for Speed</p>
            </div>
            <p className='subwordpresspar2'>
              Our Managed WordPress plans are backed with our Turbo line that offer some serious speed.
            </p>
          </div>

        </div>

        {/* Right: Hero Image */}
        <div className='wordpressheroimgsub21'>
          <img 
            src="wordpress.svg" 
            alt="WordPress Illustration" 
            className="wprdpressheroimgimg1 ml-[20%]" 
          />
        </div>

      </div>

    </div>
  );
};

export default Wordpress;
