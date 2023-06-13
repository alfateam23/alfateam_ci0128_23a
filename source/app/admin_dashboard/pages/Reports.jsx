import { React, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment"
import { ExcelJS } from "exceljs"
import { saveAs } from "file-saver"
import { Table } from "flowbite-react"
import { TableHead } from "flowbite-react/lib/esm/components/Table/TableHead";
import { TableRow } from "flowbite-react/lib/esm/components/Table/TableRow";
import { TableHeadCell } from "flowbite-react/lib/esm/components/Table/TableHeadCell";
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";

const ReportTable = ({ reportType, reportData }) => {
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
  const today = moment().format('YYYY-MM-DD')

  const [reportData, setData] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reportType, setReportType] = useState(null);
  const [saveFile, setSaveFile] = useState(null);

  useEffect(() => {
    fetch(`/backend/reports/${reportType ? reportType : 'visits'}/${startDate ? startDate : today}/${endDate ? endDate : today}`)
      .then((reportData) => {
        setData(reportData);
      })
      .catch((error) => {
        console.error('Error al obtener datos', error);
      });
    if (saveFile) {
      const workbook = new ExcelJS.Workbook();
      workbook.creator = 'Asojunquillal'
      workbook.created = new Date();
      workbook.addWorksheet('Reporte').addRows(reportData ? reportData : []);
      workbook.xlsx.writeBuffer().then((reportData) => {
        const blob = new Blob([reportData],
          { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' });
        saveAs(blob, `${reportType ? reportType : 'visits'}-${startDate ? startDate : today}-${endDate ? endDate : today}.xlsx`);
      });
      setSaveFile(false);
    }
  }, [reportData, startDate, endDate, reportType, saveFile]);

  //         {reportData ? <ReportTable reportType={reportType} reportData={reportData} /> : ''}

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
            onChange={(date) => setStartDate(moment(date).format('YYYY-MM-DD'))} />
          <DatePicker className="rounded-xl"
            onChange={(date) => setEndDate(moment(date).format('YYYY-MM-DD'))} />
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

      </div>
    </div>
  );
};

export default Reports;
