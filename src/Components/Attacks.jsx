import '../Styles/Attacks.css';
import { BiTimer } from "react-icons/bi";
import { MdUploadFile } from "react-icons/md";
import { FaWordpress } from "react-icons/fa";

const Attacks = () => {
    return (
        <div className='Attackmain'>
            <div className="subattack1">
                <div className="subattack2">
                    <p className='attackpar1'>How Do We Protect Against DDoS Attacks?</p>
                    <p className='attackpar2'>At Serverpie, we use multi-layered DDoS protection to ensure your website stays online, secure, and fast, even during cyber attacks.</p>
                </div>
                <div className="subattack3">
                <div className="subattacksub3">
                    <div className="attackbox1">
                        <div className="subattackbox1">
                            <img src="time1.png" alt="" />
                        </div>
                            <p className='attackboxpar1'>Real-Time DDoS Monitoring</p>
                            <p className='attackboxpar2'>Our system monitors traffic 24/7, instantly detecting and mitigating suspicious activity. With AI-powered analysis, it identifies threats in real time, blocking malicious requests while allowing legitimate users uninterrupted access.</p>
                        
                    </div>
                    <div className="attackbox1">
                        <div className="subattackbox1">
                        <img src="time2.png" alt="" />
                        </div>
                            <p className='attackboxpar1'>AI-Powered Threat Detection</p>
                            <p className='attackboxpar2'>Using advanced machine learning, our system continuously adapts to new attack patterns. It can instantly differentiate between real users and bots, ensuring maximum security without affecting website performance.</p>
                        
                    </div>
                    <div className="attackbox1">
                        <div className="subattackbox1"> <img src="time3.png" alt="" /></div>
                            <p className='attackboxpar1'>Multi-Layered Firewall Protection</p>
                            <p className='attackboxpar2'>We provide Layer 3/4 protection against volumetric attacks like UDP and SYN floods, while Layer 7 filtering blocks HTTP floods and bot-driven threats. This ensures comprehensive security at every level.</p>
                        
                    </div>
                </div>
                <div className="subattack4">
                <div className="subattacksub4">
                <div className="attackbox1">
                        <div className="subattackbox1">
                        <img src="time4.png" alt="" />
                        </div>
                            <p className='attackboxpar1'>Global Anycast Network</p>
                            <p className='attackboxpar2'>Our worldwide data centers distribute traffic efficiently, reducing latency and absorbing attacks before they reach your server. This ensures a fast, stable, and secure browsing experience.</p>
                        
                    </div>
                    <div className="attackbox1">
                        <div className="subattackbox1"> <img src="time1.png" alt="" /></div>
                            <p className='attackboxpar1'> Automated Traffic Filtering</p>
                            <p className='attackboxpar2'>Malicious bots and harmful requests are blocked instantly through smart filtering and rate limiting. Our system ensures that only clean traffic reaches your website, preventing downtime and slowdowns.</p>
                        
                    </div>
                    <div className="attackbox1">
                        <div className="subattackbox1"> <img src="time1.png" alt="" /></div>
                            <p className='attackboxpar1'> Guaranteed Uptime</p>
                            <p className='attackboxpar2'>With powerful DDoS mitigation, automatic failover, and a resilient infrastructure, we ensure your website stays online even during the most intense attacks, keeping your business running smoothly.</p>
                        
                    </div>
                </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Attacks;