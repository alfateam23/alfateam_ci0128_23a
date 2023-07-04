import React from "react";
import 'flowbite';

const TABLE_HEAD = ["Procedencia", "Tipo", "Edad", "Categoria de Pago", "Monto", "Moneda", ""];

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
                        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 px-6" data-test-id="table-tarifas">
                            <thead className="text-xl text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="bg-[#FF8C32]">
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
                                        {TABLE_HEAD[5]}
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        {TABLE_HEAD[4]}
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">{TABLE_HEAD[6]}</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((tarifa, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                    >
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
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
                                            {tarifa.Moneda}
                                        </td>
                                        <td className="px-6 py-4">
                                            {tarifa.Monto}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center whitespace-nowrap">
                                                <a
                                                    href={`tarifas/editar/${tarifa.TipoProcedencia}/${tarifa.TipoVisita}/${tarifa.Estatus}/${tarifa.CategoriaPago}`}
                                                    className="font-medium text-black hover:underline"
                                                >
                                                    Editar Tarifa
                                                </a>
                                                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                                            </div>
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