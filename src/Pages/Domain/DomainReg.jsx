import React from 'react'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Attacks from '../../Components/Attacks';
import Migration from '../../Components/Migration';
import DdosAttacks from '../../Components/DdosAttacks';
import '../../Styles/DomainReg.css';
import Hostingplans from '../../Components/Hostingplans';
import DomainPricing from '../../Components/DomainPricing';
import HostingSolution from '../../Components/HostingSolution';
import Wordpress from '../../Components/Wordpress';

const DomainReg = () => {
  return (
    <div>
      <nav>
        {/* <Navbar /> */}
      </nav>
      <main>
        <DomainPricing/>
        <div className='mt-[25px]'></div>
        <HostingSolution />
        <Wordpress />
       
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default DomainReg;
