import { React, useEffect, useState } from "react";
import { Table, getHeadings } from './ReportsUtility/Table';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reports = () => {
  const [data, setData] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reportType, setReportType] = useState(null);
  const [reportFormat, setReportFormat] = useState(null);

  useEffect(() => {
    if (reportType && reportFormat && startDate && endDate) {
      fetch(`/backend/reports/${reportType}/${reportFormat}/${startDate}/${endDate}`)
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error('Error al obtener datos', error);
        });
    }
    setConsult(0)
  }, [reportType, reportFormat, startDate, endDate]);

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
          <label>Formato de reporte</label>
          <select className="rounded-lg border border-black
          shadow-[1px_7px_15px_-4px_rgba(0,0,0,0.75)]"
            onChange={(type) => setReportType(type)}>
            <option value="csv">CSV</option>
            <option value="xlsx">XLSX</option>

          </select>
        </div>

      </div>
      <div>
        {!data ? "" :
          <Table theadData={getHeadings(data)} tbodyData={data} />}
      </div>
    </div>
  );
};

export default Reports;
