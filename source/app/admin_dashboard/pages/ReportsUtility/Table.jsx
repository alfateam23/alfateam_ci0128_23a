export function Table({theadData, tbodyData}) {
  return (
    <table className="border border-gray-300 rounded-lg">
        <thead className="text-xl bg-white">
            <tr>
              {theadData.map(heading => {
                      return <th key={heading} className="px-4 py-2">{heading}</th>
                      })}
            </tr>
        </thead>
        <tbody className="bg-gray-400">
            {tbodyData.map((row, index) => {
             return <tr key={index}>
                 {theadData.map((key, index) => {
                      return <td key={row[key]} className="px-4 py-2 text-lg">{row[key]}</td>
                 })}
           </tr>;
         })}
        </tbody>
    </table>
  );
};

export const getHeadings = (data) => {
  console.log("getheadings", data);
  return Object.keys(data[0]);
};
