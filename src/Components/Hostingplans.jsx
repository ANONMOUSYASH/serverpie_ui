import React from 'react'
import '../Styles/Hostingplans.css';

const Hostingplans = () => {
  return (
    <div className='hostingplanmaian'>
    <div className='hostingplansub'>
    <div className='hostingplansub1'>
      <p className='hostingplansubpar1'>witth all hosting {' '}<span className='youget'>plans</span>,{" "}you get</p>
      <p className='hostingplansubpar12'>Included with NVMe Unlimited Storage for your Website. Well Optimized Server with Cloudlinux + LiteSpeed + imunify360 for Faster Website Performance & Server Security.</p>
    </div>
    <div className='hostingplansub2'>
    <div class="features">
        <div class="column">
            <ul>
            <li className="w-[246px] h-[48px] rounded-[18px] px-[15px] py-[12px] bg-gradient-to-r from-[#EFF4FE] to-[#FFFFFF] flex text-center">
            User Manager</li>
                <li>Backups</li><hr  className='lihr'/>
                <li>SitePad Website Builder</li><hr className='lihr' />
                <li>1-Click Installer</li><hr className='lihr'/>
                <li>Webmail Access</li><hr className='lihr'/>
                <li>DNS Management</li><hr className='lihr'/>
                <li>FTP Over SSL</li><hr className='lihr'/>
                <li>File Manager</li><hr className='lihr'/>
                <li>Multiple PHP versions</li>
            </ul>
        </div>
        <div class="column">
            <ul>
                <li>PHP Configuration</li><hr className='lihr' />
                <li>PHP INI Editor</li><hr className='lihr' />
                <li>Apache Handlers</li><hr className='lihr' />
                <li>phpMyAdmin</li><hr className='lihr' />
                <li>Cache Manager</li><hr className='lihr' />
                <li>Cron jobs</li><hr className='lihr' />
                <li>CloudLinux</li><hr className='lihr' />
                <li>Curli</li><hr className='lihr' />
                <li>Hotlink Protection</li>
            </ul>
        </div>
        <div class="column">
            <ul>
                <li>LiteSpeed Web Server</li><hr className='lihr' />
                <li>Unlimited Sub Domains</li><hr className='lihr' />
                <li>Unlimited FTP Accounts</li><hr className='lihr' />
                <li>SMTP, POP3, IMAP</li><hr className='lihr' />
                <li>Application Manager</li><hr className='lihr' />
                <li>Auto responders</li><hr className='lihr' />
                <li>Git™ Version Control</li><hr className='lihr' />
                <li>Imunify360</li><hr className='lihr' />
                <li>IP Blocker</li>
            </ul>
        </div>
        <div class="column">
            <ul>
              
                <li>Leech Protection</li><hr className='lihr' />
                <li>ModSecurity</li><hr className='lihr' />
                <li>Optimize Website</li><hr className='lihr' />
                <li>Remote MySQL®</li><hr className='lihr' />
                <li>Resource Usage</li><hr className='lihr' />
                <li>SEO and Marketing Tools</li><hr className='lihr' />
                <li>Softaculous Apps Installer</li><hr className='lihr' />
                <li>& many more...</li>
            </ul>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Hostingplans;