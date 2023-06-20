import React from "react";
import 'flowbite';

const TABLE_HEAD = ["Procedencia", "Tipo", "Edad", "Categoria de Pago", "Monto", "Modena", ""];

const Tarifas = () => {
    const [data, setData] = React.useState(null); // use state
    let tableRows = []; // rows of table

    /* Fetch for endpoint of tarifas */
    const handleTarifas = () => {
        fetch("/tarifas")
            .then((res) => res.json())
            .then((data) => setData(data));
    }

    /* Set state */
    React.useEffect(() => {
        handleTarifas()
    }, []);

    // This renders every row for the table, with specific info
    const renderTarifa = () => {
        // Pueden sacar aquí la parte de mapping para tener código más legible
    }

    return (
        <div>
            <h1 className="font-sans text-4xl rounded-none py-4 m-3" data-test-id="title-tarifas"> Tarifas </h1>
            {/* Waits for data to be charged */}
            {/* Esta tabla es un componente de flowbite, por eso algunos tags están definidos con esos atributos */}
            {data ? (
                <div className="table-container">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 px-6" data-test-id="table-tarifas">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3" data-test-id="column-Procedencia">
                                        {TABLE_HEAD[0]}
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        {TABLE_HEAD[1]}
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        {TABLE_HEAD[2]}
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        {TABLE_HEAD[3]}
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        {TABLE_HEAD[4]}
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        {TABLE_HEAD[5]}
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">{TABLE_HEAD[6]}</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((tarifa, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {tarifa.TipoProcedencia}
                                        </th>
                                        <td className="px-6 py-4">
                                            {tarifa.TipoVisita}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tarifa.Estatus}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tarifa.CategoriaPago}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tarifa.Monto}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tarifa.Moneda}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <a 
                                            href={`tarifas/editar/${tarifa.TipoProcedencia}/${tarifa.TipoVisita}/${tarifa.Estatus}/${tarifa.CategoriaPago}`} // aca mando los parametros en mi casa cedula
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr >
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            // Si aun no esta la data tira este mensaje
            ) : ("Cargando información...")}

            {/* this button is for TESTING the FETCH, you can copy and paste to try the fetch in your own file*/}
            < button hidden id="get" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={handleTarifas} > Change Text</button >
        </div >
    );
};

export default Tarifas;