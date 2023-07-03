import React from "react"
import * as XLSX from 'xlsx'
const ParseExcel = (props) => {

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const data = file.arrayBuffer();
    /* data is an ArrayBuffer */
    const workbook = XLSX.read(data);

    console.log(workbook);
  };
  return (
    <div>
      <h1>Upload the excel file</h1>
      <input type="file" onChange={(e) => handleFile(e)} />
    </div>
  )
};

export default ParseExcel;
