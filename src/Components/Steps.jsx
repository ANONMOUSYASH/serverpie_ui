import React from 'react'
import '../Styles/StepsComp.css'

const Steps = () => {
  return (
    <div className='containermain'>
        <div className="subcontainer">
            <p className='howp'>Steps to use our services</p>
            <p className='top'>To purchase hosting and domain from our portal, follow these steps</p>
        </div>
        <div className="sub2container">
            {/* <div className="sub2box1"> */}
            
               
                <div className='sub2con1'>
                    <img className='imgrac' src="rac1.png" alt="" />
                    <div className="sub2box2">
                    <img src="4c.png" alt="" />
                </div>
                    <p className='choose'>Choose Right Plan</p>
                    <p className='chhose1'>Choose a suitable hosting plan from</p>
                    <p className='chhose1'>our options based on your budget |</p>
                    <p className='chhose1'>and requirements.</p>
                </div>
            {/* </div> */}
            {/* <div className="sub2box1"> */}
            
          
                <div className='sub2con1'>
                <img  src="rac2.png" alt="" />
                <div className="sub2box2"> 
                <img src="3c.png" alt="" />
                </div>
                    <p className='choose'>Choose Right Plan</p>
                    <p className='chhose1'>Choose a suitable hosting plan from</p>
                    <p className='chhose1'>our options based on your budget |</p>
                    <p className='chhose1'>and requirements.</p>
                </div>
            {/* </div> */}
            <div className='sub2con1'>
                <img  src="rac3.png" alt="" />
                <div className="sub2box2"> 
                <img src="2c.png" alt="" />
                </div>
                    <p className='choose'>Choose Right Plan</p>
                    <p className='chhose1'>Choose a suitable hosting plan from</p>
                    <p className='chhose1'>our options based on your budget |</p>
                    <p className='chhose1'>and requirements.</p>
                </div>
                <div className='sub2con1'>
                <img  src="rac4.png" alt="" />
                <div className="sub2box2"> 
                <img src="1c.png" alt="" />
                </div>
                    <p className='choose'>Choose Right Plan</p>
                    <p className='chhose1'>Choose a suitable hosting plan from</p>
                    <p className='chhose1'>our options based on your budget |</p>
                    <p className='chhose1'>and requirements.</p>
                </div>
        </div>
    </div>
  )
}

export default Steps;