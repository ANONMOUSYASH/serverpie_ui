import React from 'react'
import '../Styles/DdosAttacks.css'

const DdosAttacks = () => {
  return (
    <div className='ddosattackmain'>
      <div className="ddosattacksub1">
        <p className='ddosattacksubpar1'>Real-World Examples of DDoS Attacks and Their Impact</p>
        <p className='ddosattacksubpar2'>Several real-world DDoS attacks have resulted in significant disruptions and financial losses for organizations</p>
      </div>
      <div className="ddosattack2">
        <div className="ddosattacksub2">
            <img className='ddosattacksubimg2' src="/image234.png" alt="" />
            <p className='ddosattacksubpar12'>Krebs and OVH (2016)</p>
            <p className='ddosattacksubpar22'>Brian Krebs' cybersecurity blog was hit by a 620 Gbps DDoS attack from the Mirai botnet. Shortly after, Mirai targeted OVH, a major European hosting provider, with a 1.1 Tbps attack using 145,000 bots, affecting a single OVH customer.</p>
        </div>
        <div className="ddosattacksub2sub">
            <img className='ddosattacksubimg2' src="/image235.png" alt="" />
            <p className='ddosattacksubpar12'>GitHub (2018)</p>
            <p className='ddosattacksubpar22'>Brian Krebs' cybersecurity blog was hit by a 620 Gbps DDoS attack from the Mirai botnet. Shortly after, Mirai targeted OVH, a major European hosting provider, with a 1.1 Tbps attack using 145,000 bots, affecting a single OVH customer.</p>
            <p className='readmore'>Read more</p>
            {/* <hr className='readhrmore'/> */}
        </div>
        <div className="ddosattacksub2">
            <img className='ddosattacksubimg2' src="/image236.png" alt="" />
            <p className='ddosattacksubpar12'>Cloud Flare (2014)</p>
            <p className='ddosattacksubpar22'>In 2014, CloudFlare was hit by a massive 400 Gbps DDoS attack targeting a single customer in Europe. The attackers leveraged a vulnerability in the Network Time Protocol (NTP) to amplify the attack, demonstrating the risks of protocol-based exploits in large-scale cyberattacks.</p>
        </div>
      </div>
    </div>
  )
}

export default DdosAttacks;
