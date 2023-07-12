import React from "react"
import { Link } from "react-router-dom";
import logo from "./IMG (1).jpg"
const FileImport = (props) => {
  return (
    <div>
      <div className="container">
        <img src={logo} alt="Logo" className="image-position" />
        <h1 className="h1">BHARAT HEAVY ELECTRICALS LIMITED</h1>
      </div>
      <div className="text-position">
        <h3>STORE DATA INTO DATABASE</h3>
        <h5>Easy storage of XLX and XLSX files in your database</h5>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Link to='/ParseExcel' class="btn btn-primary" style={{ display: 'flex', width: '250px', height: '50px', flexDirection: 'column', justifyContent: 'center', marginTop: '100px', marginLeft: '300px' }}>Select Excel Files</Link>
        <Link to='/ParseExcel' class="btn btn-primary" style={{ display: 'flex', width: '250px', height: '50px', flexDirection: 'column', justifyContent: 'center', marginTop: '100px', marginLeft: '200px' }}>Enter Data Manually</Link>
      </div>


    </div>

  )
};

export default FileImport;
