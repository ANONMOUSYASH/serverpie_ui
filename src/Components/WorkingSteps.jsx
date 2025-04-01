import React from 'react'
import '../Styles/WorkingSteps.css'

const WorkingStaps = () => {
  return (
    <div className='containermain1'>
        <div className="subcontainer1">
            <p className='howp1'>How It Works</p>
            <p className='top1'>To purchase hosting and domain from our portal, follow these steps</p>
        </div>
        <div className="sub2container1">
            {/* <div className="sub2box1"> */}
            
               
                <div className='sub2con11'>
                    <img className='imgrac1' src="rac1.png" alt="" />
                    <div className="sub2box21">
                    <img src="4c.png" alt="" />
                </div>
                    <p className='choose1'>Get in Touch</p>
                    <p className='chhose11'>Submit the form, and our team will reach out within 24 hours.</p>
                </div>
            {/* </div> */}
            {/* <div className="sub2box1"> */}
            
          
                <div className='sub2con11'>
                <img  src="rac2.png" alt="" />
                <div className="sub2box21"> 
                <img src="3c.png" alt="" />
                </div>
                    <p className='choose1'>Service Activation</p>
                    <p className='chhose11'>We register and configure your protected assets.</p>
                </div>
            {/* </div> */}
            <div className='sub2con11'>
                <img  src="rac3.png" alt="" />
                <div className="sub2box21"> 
                <img src="2c.png" alt="" />
                </div>
                    <p className='choose1'>Traffic Routing Setup</p>
                    <p className='chhose11'>Login to our portal using your account credentials or create a new account if you don't have one.</p>
                </div>
                <div className='sub2con11'>
                <img  src="rac4.png" alt="" />
                <div className="sub2box21"> 
                <img src="1c.png" alt="" />
                </div>
                    <p className='choose1'>Mitigation & Protection</p>
                    <p className='chhose11'>Make a secure payment using our payment options to complete the purchase.</p>
                </div>
        </div>
    </div>
  )
}

export default  WorkingStaps;