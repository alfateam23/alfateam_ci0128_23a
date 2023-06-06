import { React, useEffect, useState } from "react";

function Table({theadData, tbodyData}) {
    return (
      <table>
          <thead>
              <tr>
                {theadData.map(heading => {
                        return <th key={heading}>{heading}</th>
                        })}
              </tr>
          </thead>
          <tbody>
              {tbodyData.map((row, index) => {
               return <tr key={index}>
                   {theadData.map((key, index) => {
                        return <td key={row[key]}>{row[key]}</td>
                   })}
             </tr>;
           })}
          </tbody>
      </table>
    );
  }

const Reports = () => {
    const [data, setData] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [reportType, setReportType] = useState(null);

    useEffect(() => {
        setReportType(() => 'visits')
        setStartDate(() => '2023-07-01')
        setEndDate(() => '2023-07-31')
//        fetch(`/backend/reports/${reportType}/${startDate}/${endDate}`)
        fetch("/backend/reports/visits/2023-01-01/2023-12-01")
          .then((res) => {
            if (!res.ok) {
              console.log('Network response was not ok');
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setData(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    }, []);


    console.log("Data from endpoint", data);



    // async function getGet() {
    //     fetch(`/backend/reports/visits/2023-07-01/2023-07-31`)
    //         .then((res) => res.json())
    //         .then((data) => setData(data.info));
    // }


    //setData(() => getGet());

    const getHeadings = () => {
        console.log("getheadings", data);
        return Object.keys(data[0]);
    }

    return (
            <div className="container">
                {!data ? "Loading..." : <Table theadData={getHeadings()} tbodyData={data}/>}
            </div>
    );
};

export default Reports;
