import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import 'flowbite';


const TABLE_HEAD = ["Procedencia", "Tipo", "Edad", "Categoria de Pago", "Monto", "Modena",""];

const TABLE_ROWS = [
    {
        Concepto: "Camping Nacional Adulto",
        Monto: "CRC",
    },
    {
        Concepto: "Camping Nacional Niño",
        Monto: "CRC",
    },
    {
        Concepto: "Camping Extranjero Adulto",
        Monto: "CRC",
    },
    {
        Concepto: "Camping Extranjero Niño",
        Monto: "CRC",
    },
    {
        Concepto: "Picnic Nacional Adulto",
        Monto: "CRC",
    },
    {
        Concepto: "Picnic Nacional Niño",
        Monto: "CRC",
    },
    {
        Concepto: "Picnic Extranjero Adulto",
        Monto: "CRC",
    },
    {
        Concepto: "Picnic Extranjero Niño",
        Monto: "CRC",
    },
];

const Tarifas = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    async function getGet() {
        fetch("/tarifas")
            .then((res) => res.json())
            .then((data) => setData(data.info));
    }

    return (
        <div>
            <h1 className="font-sans text-4xl rounded-none py-4 m-3"> Tarifas </h1>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 px-6">
                    {/* Table Head */}
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                {TABLE_HEAD[0]}
                            </th>
                            <th scope="col" class="px-6 py-3">
                                {TABLE_HEAD[1]}
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">{TABLE_HEAD[2]}</span>
                            </th>
                        </tr>
                    </thead>
                    {/* Table Rows */}
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">
                                $99
                            </td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tarifas;

/* 
        <div>
            <h1 className="font-bold text-xl">Tarifas</h1>
            <button id="get" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={getGet}>Change Text</button>
            <p> {!data ? "Loading..." : data} </p>
        </div>
*/