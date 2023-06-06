import { React, useEffect, useState } from "react";
import { Table, getHeadings } from './ReportsUtility/Table';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reports = () => {
    const [data, setData] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [reportType, setReportType] = useState(null);
    const [consult, setConsult] = useState(0);

    useEffect(() => {
      if (reportType && startDate && endDate) {
        console.log('hola')
        fetch(`/backend/reports/${reportType}/${startDate}/${endDate}`)
          .then((res) => {
            if (!res.ok) {
              console.log('Network response was not ok');
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }
      setConsult(0)
    }, [reportType, startDate, endDate]);

    const handleSelectChange = (event) => {
      setReportType(event.target.value);
    };

    return (
      <div className="flex flex-col space-y-20 bg-slate-400
      rounded-3xl">
        <div className="px-10 py-5
        flex flex-row space-x-24
        items-center justify-center">
          <div>
          <select className="rounded-lg border border-black
          shadow-[1px_7px_15px_-4px_rgba(0,0,0,0.75)]"
          value={reportType}
          onChange={handleSelectChange}>
            <option value="visits">Visitantes</option>
            <option value="profits">Financiero</option>
          </select>
          </div>
          <div className="flex flex-row space-x-10">
          <DatePicker selected={startDate} className="rounded-xl"
          onChange={(date) => setStartDate(date)} />
          <DatePicker selected={endDate} className="rounded-xl"
          onChange={(date) => setEndDate(date)} />
          </div>
        </div>
        <div>
          {!data ? "Loading..." : 
          <Table theadData={getHeadings(data)} tbodyData={data}/>}
        </div>
      </div>
    );
};

export default Reports;
