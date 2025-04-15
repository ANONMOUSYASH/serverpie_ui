import React from 'react'
import '../Styles/Migration.css'

const Migration = () => {
  return (
    <div className='migrationmain'>
      <div className="submigration">
        
      </div>
      <div className="submigration1">
        <p className='migratpar1'>free migration from another <span className='migratspan'>hosting provider</span></p>
        <p className='migratpar2'>Seamless and automated website migration from popular control panels like cPanel, Plesk, and DirectAdmin. If your website runs on a custom platform, no worries – our experts will handle the migration manually with precision and care.
        We ensure a hassle-free transfer or upgrade to a dedicated server, guaranteeing minimal downtime</p>
        <button className='migratbtn'>Migrate Now</button>
        <div className='flex pt-[30px] '>
          <img src="panel1.svg" alt="cpanel icon" />
          <img className='pl-[15px]' src="panel2.svg" alt="DirectAdmin icon" />
          <img src="panel3.svg" alt="plesk icon" />
        </div>
      </div>
    </div>
  )
}

export default Migration;
