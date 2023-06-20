const formatHeading = (heading) => {
  let map = {
    'TipoProcedencia' : 'Procedencia',
    'TipoVisita' : 'Visita',
    'Estatus' : 'Estatus',
    'TotalVisitors' : 'Cantidad Visitantes',
    'TotalSubtotal' : 'Ganancia Total'
  }

  return map[heading];
}

export function Table({theadData, tbodyData}) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 px-6">
          <thead className="text-xl text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-[#FF8C32]">
                {theadData.map(heading => {
                        return <th key={heading}
                        scope="col" className="px-6 py-3">{formatHeading(heading )}</th>
                        })}
              </tr>
          </thead>
          <tbody>
              {tbodyData.map((row, index) => {
              return <tr key={index} className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {theadData.map((key, index) => {
                        return <td key={row[key]} className="px-6 py-4">{row[key]}</td>
                  })}
            </tr>;
          })}
          </tbody>
      </table>
    </div>
  );
};

export const getHeadings = (data) => {
  return Object.keys(data[0]);
};
