// Adapted from: https://dev.to/jasurkurbanov/how-to-export-data-to-excel-from-api-using-react-25go

import React from 'react';
import * as XLSX from "xlsx";
import * as functions from './ExcelSheets';

export const ExportToExcel = ({startDate, endDate}) => {
  const excelTitle = [
    ["SISTEMA NACIONAL DE AREAS DE CONSERVACION"],
    ["AREA DE CONSERVACION GUANACASTE"],
    ["REGISTRO DE VISITACIÓN ACG"],
    ["R.V.S. Bahía Junquillal"],
    [""]
  ];
  return (
    <button type="button" onClick={async (e) => await exportToCSV(excelTitle,startDate, endDate)}
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

const exportToCSV = async (title, startDate, endDate) => {
  const wb = XLSX.utils.book_new();
  const visitation = await functions.createVisitationSheet(title, startDate, endDate);
  title.pop();
  const picnicFinancial = await functions.createPicnicFinancialSheet(title, startDate, endDate);
  const campingFinancial = await functions.createCampingFinancialSheet(title, startDate, endDate);
  XLSX.utils.book_append_sheet(wb,visitation[0], visitation[1]);
  XLSX.utils.book_append_sheet(wb,picnicFinancial[0], picnicFinancial[1]);
  XLSX.utils.book_append_sheet(wb,campingFinancial[0], campingFinancial[1]);
  XLSX.writeFile(wb, "Reportes_Junquillal.xlsx");
};
