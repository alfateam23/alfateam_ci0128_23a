import React from 'react';

const TablaReservaciones = ({
  data,
  cancelEstado,
  aprobeEstado
}) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Código
          </th>
          <th scope="col" className="px-6 py-3">
            Tipo
          </th>
          <th scope="col" className="px-6 py-3">
            Cantidad de Visitantes{' '}
          </th>
          <th scope="col" className="px-6 py-5">
            Fecha entrada
          </th>
          <th scope="col" className="px-6 py-3">
            Estado
          </th>
          <th scope="col" className="px-6 py-3"></th>
          <th scope="col" className="px-6 py-3"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            key={item.ReservacionCodigo}
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.ReservacionCodigo}
            </th>
            <td className="px-6 py-4">
              {item.TipoArea === 'C' ? 'Camping' : 'Picnic'}
            </td>
            <td className="px-6 py-4">{item.TotalCantidadVisitantes}</td>
            <td className="px-6 py-4">
              {new Date(item.FechaInicio).toDateString()}
            </td>
            <td className="px-6 py-4">
              {item.EstadoPago == true
                ? 'Aceptado'
                : item.EstadoActividad == false
                ? 'Cancelado'
                : 'Pendiente'}
            </td>

            {item.EstadoActividad && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
                onClick={() => cancelEstado(item.ReservacionCodigo)}
              >
                Cancelar
              </button>
            )}
            {!item.EstadoActividad && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
                onClick={() => aprobeEstado(item.ReservacionCodigo)}
              >
                Aceptar
              </button>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaReservaciones;
