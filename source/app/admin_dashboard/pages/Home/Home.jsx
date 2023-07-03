import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

const Home = () => {
    const [cupoCampingTotal, setCupoCampingTotal] = useState(''); /* For setting the  quota */
    const [usersCount, setUsersCount] = useState('');  /* For user count */

    /* For setting dates and time */
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const time = new Date();
    const showTime = time.getHours()
        + ':' + time.getMinutes();

    /* For setting the  quota */
    useEffect(() => {
        fetch("/backend/quota/C")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setCupoCampingTotal(data.CupoTotal);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    /* For user count */
    useEffect(() => {
        fetch(`/backend/users/getActiveAdmins`)
            .then((res) => res.json())
            .then((data) => {
                setUsersCount(data.length);
            });
    }, []);

    const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const charTitle = "Cantidad de visitantes: " + current.getFullYear();
    const data = {
        labels: labels,
        datasets: [
            {
                label: charTitle,
                backgroundColor: "rgb(241, 180, 47)",
                borderColor: "rgb(0, 0, 0)",
                data: [0, 10, 5, 2, 20, 30, 45, 12, 5, 1, 8, 35],
            },
        ],
    };

    return (
        <div className="mt-4">
            <h1 class="font-lexend text-3xl font-thin" data-test-id="title-home">¡Bienvenido al Centro de control!</h1>
            <div class="">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    {/* Brief general info */}
                    <div class="grid grid-cols-3 h-20 w-auto gap-4 mb-4">
                        <div class="grid rounded bg-gray-50 dark:bg-gray-800">
                            <p class="font-sans font-bold pl-3 pt-2 text-xs justify-end text-left"> Fecha de Servidor </p>
                            <p class="font-sans font-bold text-3xl text-center text-[#F1B42F] pb-2"> {showTime} {date} </p>
                        </div>
                        <div class="grid rounded bg-gray-50 dark:bg-gray-800">
                            <p class="font-sans font-bold pl-3 pt-2 text-xs justify-end text-left"> Cupos restantes de camping para hoy </p>
                            <p class="font-sans font-bold text-3xl text-center text-[#F1B42F] pb-2"> {cupoCampingTotal} </p>
                        </div>
                        <div class="grid rounded bg-gray-50 dark:bg-gray-800">
                            <p class="font-sans font-bold pl-3 pt-2 text-xs justify-end text-left"> Cantidad de Usuarios Activos </p>
                            <p class="font-sans font-bold text-3xl text-center text-[#F1B42F] pb-2"> {usersCount} </p>
                        </div>
                    </div>
                    {/* Graph */}
                    <div class="flex items-center justify-center h-60 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <Bar data={data} />
                    </div>
                    {/* Quick Actions */}
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <a href={`/reservation`} className="font-sans font-bold text-2xl text-black hover:text-yellow-500 hover:underline">
                                Crear una Reserva
                            </a>
                            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                        </div>
                        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <a href={`/lista`} className="font-sans font-bold text-2xl text-black hover:text-yellow-500 hover:underline">
                                Administrar Reservas Activas
                            </a>
                            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Home;