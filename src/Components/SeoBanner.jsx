import React from 'react'
import '../Styles/SeoBanner.css'

const SeoBanner = () => {
  return (
    <div className='flex gap-[50px]'>
      <div className='seobanner'>
      </div>
      <div className="seobanner1">
        <div className="seobannermini1">
          <p className='seobannerminipar1'>THE ALL-NEW, BLAZING FAST</p>
          <p className='seobannerminipar2'>India location based Server <span className='text-[#3973E6]'>#serverpie</span></p>
          <p className='seobannerminipar3'>Boost conversions and SEO ranking by reducing your website load-time!
            Start by selecting a server location that is closest to your customer. If most
            of your customers reside in India, you should pick a data center located in
            or close to India for faster website load time.</p>
          <button
            className="btnyt w-auto h-[44px] rounded-[5px] p-[10px] bg-[#3973E6] text-[12px] text-[#ffffff]  responsive-button"
            style={{ fontFamily: "'Inter', sans-serif", borderRadius: "5px" }}
          >
            Get Started →
          </button>
        </div>
      </div>
    </div>
  )
}

export default SeoBanner;