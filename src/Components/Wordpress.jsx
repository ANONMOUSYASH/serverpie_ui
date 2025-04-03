import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "../Styles/Wordpress.css";

const Wordpress = () => {
  return (
    <div className='wordpressheroimgmain'>
      <div className='wordpressheroimgsub1'>
        <p className="wordpressheroimgpar1">everything your wordpress site needs for <span className='subwordpressspan'>success.</span></p>
        {/* <p className="wordpressheroimgpar2">At A2 Hosting, we make WordPress easy and give you access to a variety of tools to get your website up and running in no time.</p> */}
      </div>
      <div className='wordpressheroimgsub2'>
      <div className='wordpressheroimg22'>
        <div className="wordpresssubmini">
        <div className="subwordpressimg">
          <div className="iconwordpress"><MdOutlineArrowForwardIos className='iconwordpress1' /></div>
          <p className='subwordpresspar1'>Out-Of-The-Box Optimized WordPress</p>
        </div>
        <p className='subwordpresspar2'>We pre-configure our WordPress installs with the best speed and security settings with our A2 Optimized plugin.</p>
        </div>
        <div className="wordpresssubmini">
        <div className="subwordpressimg">
          <div className="iconwordpress"><MdOutlineArrowForwardIos className='iconwordpress1' /></div>
          <p className='subwordpresspar1'>WooCommerce for WordPress</p>
        </div>
        <p className='subwordpresspar2'>Easily create an online eCommerce store with just a few clicks by adding the WooCommerce plugin to your site.</p>
        
        {/* <hr className='subwordpresshr'/> */}
        </div>
        <div className="wordpresssubmini">
        <div className="subwordpressimg">
          <div className="iconwordpress"><MdOutlineArrowForwardIos className='iconwordpress1' /></div>
          <p className='subwordpresspar1'>TurboHub Control Panel</p>
        </div>
        <p className='subwordpresspar2'>Easily optimize performance, update plugins, and increase security for every A2 Hosting WordPress site you manage with our cutting-edge TurboHub control panel.</p>
        
      
        </div>
        <div className="wordpresssubmini">
        <div className="subwordpressimg">
          <div className="iconwordpress"><MdOutlineArrowForwardIos className='iconwordpress1' /></div>
          <p className='subwordpresspar1'>Need for Speed</p>
        </div>
        <p className='subwordpresspar2'>Our Managed WordPress plans are backed with our Turbo line that offer some serious speed.</p>
        
        
        </div>
      </div>
      <div className='wordpressheroimgsub21'>
        <img src="wordpress.svg" alt="" className="wprdpressheroimgimg1 ml-[20%]" />
      </div>
      </div>
      </div>
  )
}

export default Wordpress;
