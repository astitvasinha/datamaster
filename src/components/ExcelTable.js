import React, { useState } from "react"
import { DataGrid } from '@mui/x-data-grid';
import { SelectColumn } from 'react-data-grid'

const columns = [
  SelectColumn,
  { key: 'productId', name: 'ID' },
  { key: 'productName', name: 'Name' },
  { key: 'department', name: 'Dept' },
  { key: 'cost', name: 'Cost' },
];

const initialRows = [
  { id: 1, ID: '', Name: '', Dept: '', Cost: '' },
  { id: 2, ID: '', Name: '', Dept: '', Cost: '' },
  { id: 3, ID: '', Name: '', Dept: '', Cost: '' },
];

const ExcelTable = (props) => {
  const [rows, setRows] = useState(initialRows);

  const handleGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      for (let i = fromRow; i <= toRow; i++) {
        updatedRows[i] = { ...updatedRows[i], ...updated };
      }
      return updatedRows;
    });
  };

  return (
    <div>
      <DataGrid
        columns={columns}
        rows={rows}
        rowKey="id"
        enableCellSelect={true}
        onGridRowsUpdated={handleGridRowsUpdated}
      />
    </div>
  )
};

export default ExcelTable;
