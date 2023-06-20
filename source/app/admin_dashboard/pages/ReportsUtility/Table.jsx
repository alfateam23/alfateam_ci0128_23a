export function Table({theadData, tbodyData}) {
  return (
    <table className="w-full text-sm text-center ">
        <thead className="  text-white uppercase">
            <tr scope="col" className="bg-blue-500 text-lg px-6 py-3 w-[250px]">
              {theadData.map(heading => {
                      return <th key={heading} className="px-4 py-2">{heading}</th>
                      })}
            </tr>
        </thead>
        <tbody className="text-gray-500 dark:text-gray-400">
            {tbodyData.map((row, index) => {
             return <tr key={index}>
                 {theadData.map((key, index) => {
                      return <td key={row[key]} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-base">{row[key]}</td>
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
