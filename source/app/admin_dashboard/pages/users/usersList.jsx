import React from "react";
import 'flowbite';


const UsersList = () => {
    const TABLE_HEAD = ["Nombre", "Apellido", "Cédula", "Estado de Cuenta", ""];
    const [data, setData] = React.useState(null); // use state
    const [isLoading, setIsLoading] = React.useState(true); // For re loading data when is changed


    /* Fetch for endpoint of usersList */
    const handlegetAdmins = () => {
        setIsLoading(true);
        fetch(`/backend/users/getAdmins`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            });

    }

    const handleUserState = (cedula) => {
        fetch(`/backend/users/changeActive/${cedula}`, {
            method: 'POST',
            // Additional options and headers can be added here
        })
            .then(response => response.json())
            .then(data => {
                // Process the fetched data as needed
                console.log(data);
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error('Error:', error);
            });
        window.location.reload(); // for refreshing the window with the recently changed info

    };


    /* Set state */
    React.useEffect(() => {
        handlegetAdmins()
    }, []);

    return (
        <div>
            <h1 className="font-sans text-4xl rounded-none py-4 m-3"> Usuarios </h1>

            {/* Waits for data to be charged */}
            {/* Esta tabla es un componente de flowbite, por eso algunos tags están definidos con esos atributos */}
            {data ? (
                <div className="table-container">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 px-6">
                            <thead className="text-xl text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="bg-[#FF8C32]">
                                    <th scope="col" className="px-6 py-3">
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
                                        <span className="sr-only">{TABLE_HEAD[4]}</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((user, index) => (
                                    <tr key={index} className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.PrimerNombre}
                                        </th>
                                        <td className="px-6 py-4">
                                            {user.PrimerApellido}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.Cedula}
                                        </td>
                                        <td className="px-6 py-4 ">
                                            {user.EstadoActividad ? "Activo" : "Deshabilitado"}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => handleUserState(user.Cedula)}
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                Cambiar Estado
                                            </button>
                                        </td>
                                    </tr >
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                // Si aun no esta la data tira este mensaje
            ) : ("Cargando información...")}
        </div>
    );
};

export default UsersList;
