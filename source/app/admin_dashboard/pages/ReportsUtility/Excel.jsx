// Adapted from: https://dev.to/jasurkurbanov/how-to-export-data-to-excel-from-api-using-react-25go

import React from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export const ExportToExcel = ({ apiData }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const fileName = "Reporte_Visitacion";

  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
    
    return (
      <button type="button" onClick={(e) => exportToCSV(apiData, fileName)}
        class="py-2.5 px-5 mr-2
        mb-2 text-sm font-medium
        text-gray-900 bg-white
        rounded-lg border border-black
        hover:bg-gray-100 hover:text-blue-700
        shadow-[1px_7px_15px_-4px_rgba(0,0,0,0.75)]">
          Alternative
      </button>
    );
  };
};