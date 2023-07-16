import React, { useState } from "react";
import * as XLSX from 'xlsx'
import './ParseExcel.css'
const ParseExcel = (props) => {
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };

  return (
    <div>
      <div style={{ marginTop: '50px', marginLeft: '400px' }}>
        <h2>Choose the excel file to display</h2>
      </div>
      <input
        style={{ marginTop: '50px', marginLeft: '400px' }}
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      <table class="table container" style={{ marginLeft: '500px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Des</th>
          </tr>
        </thead>
        <tbody style={{ marginTop: '50px' }}>
          {items.map((d) => (
            <tr key={d.ID}>
              <th>{d.ID}</th>
              <td>{d.Des}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
};

export default ParseExcel;
