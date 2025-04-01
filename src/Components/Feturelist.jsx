import React from "react";
import "../Styles/Feturelist.css";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Feturelist = () => {
  return (
    <div className="container">
      <div className="subcontainer">
        <h2 className="headingsee">See How We Stack Up Against the Competition</h2>
        <p className="parbetter">Better Pricing • Fast SSD Storage • Hack-free Protection • Easy Scaling</p>
      </div>
      <table class="comparison-table">
        <thead>
          <tr>
            <th className="title1"></th>
            <th class="serverpie">SERVERPIE</th>
            <th class="namecheap">NAMECHEAP</th>
            <th class="hostinger">HOSTINGER</th>
          </tr>
        </thead>
        <tbody>
            <tr>
            <td className="title2">Pricing</td>
            <td className="check1"></td>
            <td className="check2"></td>
            <td className="check3"></td>
            </tr>
          <tr>
            <td className="title3">Starting Price</td>
            <td className="check1"><FaCircleCheck /></td>
            <td className="check2"><div className="limited"><ImCross className="cross1" /><p className="limited1">Limited Support</p></div></td>
            <td className="check3"><div className="limited"><FaCheck className="rightcheckk" /><p className="limited1">Limited Support</p></div></td>
          </tr>
          <tr>
            <td className="title3">VIP Customer Success Team</td>
            <td className="check1"><FaCircleCheck /></td>
            <td className="check2"><ImCross className="cross1" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
          <tr>
            <td className="title2">Flexibility</td>
            <td className="check1"></td>
            <td className="check2"></td>
            <td className="check3"></td>
            </tr>
          <tr>
            <td className="title3">Pick Your PHP  Version</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><ImCross className="cross1" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
          <tr>
            <td className="title3">No-Commitment Free Trial</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><ImCross className="cross1" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
          <tr>
            <td className="title3">Unlimited Application Installation</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><ImCross className="cross1" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
          <tr>
            <td className="title2">Performance</td>
            <td className="check1"></td>
            <td className="check2"></td>
            <td className="check3"></td>
            </tr>
          <tr>
            <td className="title3">PHP 8.1 Ready Servers</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><FaCheck className="rightcheckk" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
          <tr>
            <td className="title3">Optimized Stack With Advanced Cache</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><ImCross className="cross1" /></td>
            <td class="check3"><ImCross className="cross1" /></td>
          </tr>
          <tr>
            <td className="title3">Performance-Tuned Stacks for WordPress</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><ImCross className="cross1" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
          <tr>
            <td className="title3">Next-Gen NVMe SSD Storage</td>
            <td class="check1"><FaCheck className="rightcheckk" /></td>
            <td class="check2"><FaCheck className="rightcheckk" /></td>
            <td class="check3"><ImCross className="cross1" /></td>
          </tr>
          <tr>
            <td className="title2">Ease of use</td>
            <td className="check1"></td>
            <td className="check2"></td>
            <td className="check3"></td>
            </tr>
          <tr>
            <td className="title3">Launch 10+ Apps Through 1-Click</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><ImCross className="cross1" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
          <tr>
            <td className="title3">Easy DNS Management</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><ImCross className="cross1" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
          <tr>
            <td className="title2">Automation</td>
            <td className="check1"></td>
            <td className="check2"></td>
            <td className="check3"></td>
            </tr>
          <tr>
            <td className="title3">1-Click SafeUpdates for WordPress</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><ImCross className="cross1" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
          <tr>
            <td className="title3">Automated Backups</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><ImCross className="cross1" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
          <tr>
            <td className="title2">Security</td>
            <td className="check1"></td>
            <td className="check2"></td>
            <td className="check3"></td>
            </tr>
          <tr>
            <td className="title3">1-Click Free SSL Installation</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><FaCheck className="rightcheckk" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
          <tr>
            <td className="title3">Dedicated Firewalls</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><ImCross className="cross1" /></td>
            <td class="check3"><ImCross className="cross1" /></td>
          </tr>
          <tr>
            <td className="title3">Server & App Monitoring (15+ Metrics)</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><ImCross className="cross1" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
          <tr>
            <td className="title3">Auto-Healing Servers</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><FaCheck className="rightcheckk" /></td>
            <td class="check3"><ImCross className="cross1" /></td>
          </tr>
          <tr>
            <td className="title3">Malware Scanner</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><ImCross className="cross1" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
          <tr>
            <td className="title3">Free SSL security certificates</td>
            <td class="check1"><FaCircleCheck /></td>
            <td class="check2"><ImCross className="cross1" /></td>
            <td class="check3"><FaCheck className="rightcheckk" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Feturelist;
