import React from 'react';
import '../Styles/WorkingSteps.css';

const WorkingStaps = () => {
  return (
    <section className='containermain1'>
      
      {/* === Header Section === */}
      <div className="subcontainer1">
        <h2 className='howp1'>How It Works</h2>
        <p className='top1'>
          To purchase hosting and domain from our portal, follow these steps
        </p>
      </div>

      {/* === Steps Section === */}
      <div className="sub2container1">
        
        {/* Step 1 */}
        <article className='sub2con11'>
          <img className='imgrac1' src="rac1.png" alt="Customer support icon" />
          <div className="sub2box21">
            <img src="4c.png" alt="Step 1 indicator" />
          </div>
          <h3 className='choose1'>Get in Touch</h3>
          <p className='chhose11'>
            Submit the form, and our team will reach out within 24 hours.
          </p>
        </article>

        {/* Step 2 */}
        <article className='sub2con11'>
          <img src="rac2.png" alt="Service activation icon" />
          <div className="sub2box21">
            <img src="3c.png" alt="Step 2 indicator" />
          </div>
          <h3 className='choose1'>Service Activation</h3>
          <p className='chhose11'>
            We register and configure your protected assets.
          </p>
        </article>

        {/* Step 3 */}
        <article className='sub2con11'>
          <img src="rac3.png" alt="Traffic routing icon" />
          <div className="sub2box21">
            <img src="2c.png" alt="Step 3 indicator" />
          </div>
          <h3 className='choose1'>Traffic Routing Setup</h3>
          <p className='chhose11'>
            Login to our portal using your account credentials or create a new account if you don't have one.
          </p>
        </article>

        {/* Step 4 */}
        <article className='sub2con11'>
          <img src="rac4.png" alt="Security protection icon" />
          <div className="sub2box21">
            <img src="1c.png" alt="Step 4 indicator" />
          </div>
          <h3 className='choose1'>Mitigation & Protection</h3>
          <p className='chhose11'>
            Make a secure payment using our payment options to complete the purchase.
          </p>
        </article>
        
      </div>
    </section>
  );
};

export default WorkingStaps;
