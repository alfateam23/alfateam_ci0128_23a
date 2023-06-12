import { React, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ExcelJS } from "exceljs"
import { saveAs } from "file-saver"
import {Table} from "flowbite-react"
import { TableHead } from "flowbite-react/lib/esm/components/Table/TableHead";
import { TableRow } from "flowbite-react/lib/esm/components/Table/TableRow";
import { TableHeadCell } from "flowbite-react/lib/esm/components/Table/TableHeadCell";
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";

const  ReportTable = ({reportType, reportData}) => {
  let reportHeaders = new Array();

  switch (reportType) {
    case 'visits':
      reportHeaders = ['Procedencia', 'Tipo de visita', 'Estatus', 'Categoría de pago', 'Cantidad por tipos de visitantes']
      break;
    case 'profits':
      reportHeaders = ['Procedencia', 'Tipo de visita', 'Estatus', 'Categoría de pago', 'Ingresos por tipos de visitantes']
      break;
    default:
      break;
  }

  return (
    <div>
      <Table>
      <TableHead>
        {reportHeaders.forEach(item => {
        <TableHeadCell>
        {item}
         </TableHeadCell>
        })}
      </TableHead>
      <TableBody>
        {reportData.forEach(item =>
        <TableRow>
          {item}
        </TableRow>)}
      </TableBody>
      </Table>
    </div>
  )
}

const Reports = () => {
  const [reportData, setData] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reportType, setReportType] = useState(null);
  const [saveFile, setSaveFile] = useState(null);

  useEffect(() => {
    if (reportType && startDate && endDate) {
      fetch(`/backend/reports/${reportType}/${startDate}/${endDate}`)
        .then((reportData) => {
          setData(reportData);
        })
        .catch((error) => {
          console.error('Error al obtener datos', error);
        });
    }

    if (saveFile && reportData) {
      const workbook = new ExcelJS.Workbook();
      workbook.creator = 'Asojunquillal'
      workbook.created = new Date();
      workbook.addWorksheet('Reporte').addRows(reportData);
      workbook.xlsx.writeBuffer().then((reportData) => {
        const blob = new Blob([reportData],
          { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' });
        saveAs(blob, `reporte-${reportType}-${startDate}-${endDate}.xlsx`);
      });
    }
  }, [reportType, saveFile, startDate, endDate]);

  return (
    <div className="flex flex-col space-y-20 bg-slate-400
      rounded-3xl">
      <div className="px-10 py-5
        flex flex-row space-x-24
        items-center justify-center">
        <div>
          <select className="rounded-lg border border-black
          shadow-[1px_7px_15px_-4px_rgba(0,0,0,0.75)]"
            onChange={(type) => setReportType(type)}>
            <option value="visits">Reporte de visitas</option>
            <option value="profits">Reporte de ingresos financieros</option>
          </select>
        </div>
        <div className="flex flex-row space-x-10">
          <DatePicker className="rounded-xl"
            onChange={(date) => setStartDate(date)} />
          <DatePicker className="rounded-xl"
            onChange={(date) => setEndDate(date)} />
        </div>
        <div>
          <button className="rounded-lg border border-black
          shadow-[1px_7px_15px_-4px_rgba(0,0,0,0.75)]"
            onChange={(type) => setSaveFile(type)}>
            Exportar a Excel
          </button>
        </div>
      </div>
      <div>
        {reportData ? <ReportTable reportType={reportType} reportData={reportData} /> : ''}
      </div>
    </div>
  );
};

export default Reports;
