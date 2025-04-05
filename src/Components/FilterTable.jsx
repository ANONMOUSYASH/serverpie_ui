import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import "../Styles/FilterTable.css";

const FilterTable = () => {
    const [price, setPrice] = useState(5);
  const [cpu, setCpu] = useState(4);
  const [ram, setRam] = useState(8);
  const [storage, setStorage] = useState(0.5);
  const [drives, setDrives] = useState(1);
  
  
  return (
    <div className="container mt-4">
      <div className="row">
      <div className="col-md-3">
          <div className="filters p-3 border rounded position-relative">
            <h5>Filters <span className="text-success float-end">Clear All</span></h5>
            <hr />

            {/* Billing Term */}
            <div className="mb-3">
              <label className="form-label">Billing Term</label><br />
              <input type="radio" name="billing" defaultChecked /> Monthly
              <input type="radio" name="billing" className="ms-2" /> Daily
            </div>

            {/* Region */}
            <div className="mb-3">
              <label className="form-label">Region</label>
              <select className="form-select">
                <option>All</option>
                <option>Atlanta</option>
                <option>Miami</option>
              </select>
            </div>

                {/* Price Range */}
      <div className="mb-3 position-relative">
        <label className="form-label">Price</label>
        <div className="d-flex align-items-center">
          <input 
            type="text" 
            className="form-control me-2" 
            value={price} 
            readOnly 
            style={{ maxWidth: "50px", textAlign: "center" }} 
          />
          <span>-</span>
          <input 
            type="text" 
            className="form-control ms-2" 
            value="53" 
            readOnly 
            style={{ maxWidth: "50px", textAlign: "center" }} 
          />
        </div>
        <input
          type="range"
          className="form-range custom-range"
          min="5"
          max="53"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

            {/* CPU */}
            <div className="mb-3 position-relative">
      <div className="mb-3">
        <select className="form-select">
          <option>All</option>
          <option>Atlanta</option>
          <option>Miami</option>
        </select>
      </div>
      <label className="form-label">Cores Per Server</label>
      <small className="d-block text-muted">({4} — {cpu})</small>
      <input
        type="range"
        className="form-range custom-range"
        min="4"
        max="64"
        value={cpu}
        onChange={(e) => setCpu(e.target.value)}
      />
    </div>
            {/* RAM */}
            <div className="mb-3 position-relative">
        <label className="form-label">RAM</label>
        <small className="d-block text-muted">({8}GB — {ram}GB)</small>
        <input
          type="range"
          className="form-range custom-range"
          min="8"
          max="2048"
          value={ram}
          onChange={(e) => setRam(e.target.value)}
        />
      </div>
    

            {/* Drive Types */}
            <div className="mb-3">
              <label className="form-label">Drive Types</label>
              <select className="form-select">
                <option>SSD</option>
                <option>HDD</option>
              </select>
            </div>

            {/* Storage Capacity */}
            <div className="mb-3 position-relative">
              <label className="form-label">Storage Capacity</label>
              <small className="d-block text-muted">(0.5TB — {storage}TB)</small>
              <input
                type="range"
                className="form-range custom-range"
                min="0.5" max="18"
                value={storage}
                onChange={(e) => setStorage(e.target.value)}
              />
            </div>

            {/* Number of Drives */}
            <div className="mb-3 position-relative">
              <label className="form-label">Number of Drives</label>
              <small className="d-block text-muted">(1 — {drives})</small>
              <input
                type="range"
                className="form-range custom-range"
                min="1" max="6"
                value={drives}
                onChange={(e) => setDrives(e.target.value)}
              />
            </div>

            {/* GPU */}
            <div className="mb-3">
              <label className="form-label">GPU</label>
              <select className="form-select">
                <option>None</option>
                <option>1x GPU</option>
                <option>2x GPU</option>
              </select>
            </div>

          </div>
        </div>
      
        <div className="col-md-9 bg-light d-flex flex-column gap-2 text-center items-center justify-center">
          <table className="table table-bordered mt-2 text-[#262626] font-normal text-[11px]" style={{ borderCollapse: 'separate', borderSpacing: '0 10px', fontFamily: "'Inter',serif" }}>
            <thead>
              <tr style={{ borderRadius: '5px', background: '#F4F4F5'}}>
                <th>Model</th>
                <th>RAM</th>
                <th>Storage</th>
                <th>Bandwidth</th>
                <th>Region</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro E3-1265L</td>
                <td>32GB DDR3</td>
                <td>1x960GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>Atlanta (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
              <tr style={{ borderRadius: '5px', background: '#fff' }}>
                <td>Supermicro D-1531</td>
                <td>16GB DDR4</td>
                <td>1x480GB SSD</td>
                <td>300MB/s Unmetered</td>
                <td>New York (US)</td>
                <td>$5 USD</td>
                <td><button className=" w-[73px] h-[27px]  bg-[#25A75B] text-[#ffffff]" style={{borderRadius: "5px"}}>BUY</button></td>
              </tr>
            </tbody>
          </table>
          <div className='pagination-container'>
            <ul className="pagination">
              <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item active"><a className="page-link"style={{background: "#25A75B"}} href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTable;
