import { IoIosCheckmark } from "react-icons/io";
import { BiQuestionMark } from "react-icons/bi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { MdQuestionMark } from "react-icons/md";
import '../Styles/Hosting.css'

const Hosting = () => {
    return (
        <div className="framemain">
            <div className="framesub1">
                <p className="framesubpar1">
                    tailored cloud services for <span className="text-[#C0C2CD]">every need</span>
                </p>
                <p className="framesubpar2">
                    Our platform is fully equipped with the features you’ll need so
                    you never have to worry about speed, security, and support for
                    your websites, boost your digital experience with us.
                </p>
                {/* <div className="framesubmainbtn">
                    <button className="framesubbtn1">Hosting</button>
                    <button className="framesubbtn2">Reseller</button>
                    <button className="framesubbtn3">Servers</button>
                    <button className="framesubbtn4">Security</button>
                </div> */}
            </div>
            <div class="hostingprovider">
            <div class="row row-cols-4">
                <div class="col">
                    <div className="hostingsub">
                        <h4 className="hostingh4">Shared Hosting</h4>
                        <p className="hostingpar">When you need just one site.</p>
                        <p className="hostingparprice">$2.45</p>
                        <p className="hostingparprice2">Normally $9.99 - 12/mo term</p>
                        <hr className="hostinghr" />
                        <button className="hostingbutton">Buy Now</button>
                        <h5 className="hostingh5">Top Features</h5>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">1 Website</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">50 GB SSD Storage</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Custom Themes</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">24/7 Customer Support</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <h5 className="hostingh51">Website Builder Available</h5>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">WordPress Integration</p></div>
                            
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Drag and Drop Functionality</p></div>
                            
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">AI-Driven Templates</p></div>
                        </div>
                        <h5 className="hostingh5">Also Includes</h5>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Free Domain - 1 year</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Free CDN Included</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Free SSL Certificate</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                    </div>
                </div>
                <div class="col">
                <div className="hostingsub">
                        <h4 className="hostingh4">Wordpress Hosting</h4>
                        <p className="hostingpar">When you need just one site.</p>
                        <p className="hostingparprice">$2.45</p>
                        <p className="hostingparprice2">Normally $9.99 - 12/mo term</p>
                        <hr className="hostinghr" />
                        <button className="hostingbutton">Buy Now</button>
                        <h5 className="hostingh5">Top Features</h5>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">1 Website</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">50 GB SSD Storage</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Custom Themes</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">24/7 Customer Support</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <h5 className="hostingh51">Website Builder Available</h5>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">WordPress Integration</p></div>
                            
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Drag and Drop Functionality</p></div>
                            
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">AI-Driven Templates</p></div>
                        </div>
                        <h5 className="hostingh5">Also Includes</h5>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Free Domain - 1 year</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Free CDN Included</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Free SSL Certificate</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                    </div>
                </div>
                <div class="col">
                <div className="hostingsub">
                        <h4 className="hostingh4">Dedicated Hosting</h4>
                        <p className="hostingpar">When you need just one site.</p>
                        <p className="hostingparprice">$2.45</p>
                        <p className="hostingparprice2">Normally $9.99 - 12/mo term</p>
                        <hr className="hostinghr" />
                        <button className="hostingbutton">Buy Now</button>
                        <h5 className="hostingh5">Top Features</h5>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Unlimited Websites</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Unlimited SSD Storage</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Custom Themes</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">24/7 Customer Support</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <h5 className="hostingh51">Website Builder Available</h5>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">WordPress Integration</p></div>
                            
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Drag and Drop Functionality</p></div>
                            
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">AI-Driven Templates</p></div>
                        </div>
                        <h5 className="hostingh5">Also Includes</h5>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Free Domain - 1 year</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Free CDN Included</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Free SSL Certificate</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                    </div>
                </div>
                <div class="col">
                <div className="hostingsub">
                        <h4 className="hostingh4">Envato Hosting</h4>
                        <p className="hostingpar">When you need just one site.</p>
                        <p className="hostingparprice">$2.45</p>
                        <p className="hostingparprice2">Normally $9.99 - 12/mo term</p>
                        <hr className="hostinghr" />
                        <button className="hostingbutton">Buy Now</button>
                        <h5 className="hostingh5">Top Features</h5>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Unlimited Websites</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Unlimited SSD Storage</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Custom Themes</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">24/7 Customer Support</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <h5 className="hostingh51">Website Builder Available</h5>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">WordPress Integration</p></div>
                            
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Drag and Drop Functionality</p></div>
                            
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">AI-Driven Templates</p></div>
                        </div>
                        <h5 className="hostingh5">Also Includes</h5>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Free Domain - 1 year</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Free CDN Included</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                        <div className="hostingminipar001">
                            <div style={{display: 'flex',flexDirection:'row'}}><FaCircleCheck className="rightcircle" />
                            <p className="hostingpar01">Free SSL Certificate</p></div>
                            <MdQuestionMark className="questinghost" />
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Hosting;