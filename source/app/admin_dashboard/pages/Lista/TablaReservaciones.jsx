import React from 'react';
import Lista from './Lista';

const TablaReservaciones = ({
  data,
  cancelEstado,
  aprobeEstado,
  sortField,
  sortOrder,
  sortElements
}) => {
  return (
    <table className="w-full text-sm text-center ">
<thead className="  text-white uppercase">
        <tr>
          <th scope="col" className="bg-blue-500 text-lg px-6 py-3 w-[250px]">
            Código
            <button onClick={() => sortElements('ReservacionCodigo')}>
                {sortField === 'ReservacionCodigo' && sortOrder === 'asc' ? '▲' : '▼'}
            </button>
          </th>
          <th scope="col" className="bg-blue-500 text-xl px-6 py-3 w-[200px] ">
            Tipo 
            <button onClick={() => sortElements('TipoArea')}>
              {sortField === 'TipoArea' && sortOrder === 'asc' ? '▲' : '▼'}
            </button>
          </th>
          <th scope="col" className="bg-blue-500  text-lg px-6 py-3 w-[300px]">
            Visitantes{' '}
            <button onClick={() => sortElements('TotalCantidadVisitantes')}>
                {sortField === 'TotalCantidadVisitantes' && sortOrder === 'asc' ? '▲' : '▼'}
              </button>
          </th>
          <th scope="col" className="bg-blue-500 text-lg px-6 py-4 w-[900px]">
            Fecha entrada
          </th>
          <th scope="col" className="bg-blue-500 text-lg px-6 py-3 w-[250px]">
            Estado
            <button onClick={() => sortElements('EstadoPago')}>
                {sortField === 'EstadoPago' && sortOrder === 'asc' ? '▲' : '▼'}
                </button>
          </th>
          <th scope="col" className="bg-blue-500 px-6 py-3"></th>
        </tr>
      </thead>
      <tbody className="text-gray-500 dark:text-gray-400">
        {data.map((item) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-base"
            key={item.ReservacionCodigo}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.ReservacionCodigo}
            </th>
            <td className="px-6 py-4 text-base">
              {item.TipoArea === 'C' ? 'Camping' : 'Picnic'}
            </td>
            <td className="px-6 py-4 text-base">{item.TotalCantidadVisitantes}</td>
            <td className="px-6 py-4 text-base">
              {new Date(item.FechaInicio).toDateString()}
            </td>
            <td className="px-6 py-4 text-base">
  {item.EstadoActividad === false
    ? 'Cancelado'
    : item.EstadoPago === true
    ? 'Aceptado'
    : 'Pendiente'}
</td>
            <div className="flex flex-row">
  {item.EstadoActividad && (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      onClick={() => cancelEstado(item.ReservacionCodigo)}
    >
      Cancelar
    </button>
  )}
  {!item.EstadoPago && item.EstadoActividad && (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      onClick={() => aprobeEstado(item.ReservacionCodigo)}
    >
      Aceptar
    </button>
  )}
</div>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaReservaciones;
