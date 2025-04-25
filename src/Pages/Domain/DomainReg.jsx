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
      <main>
        <DomainPricing/>
        <HostingSolution />
        <div className='pt-[15%]'>
        <Wordpress />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default DomainReg;
