import React from "react";
import "flowbite";

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
  };

  const handleUserState = (cedula) => {
    fetch(`/backend/users/changeActive/${cedula}`, {
      method: "POST",
      // Additional options and headers can be added here
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the fetched data as needed
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
      });
    window.location.reload(); // for refreshing the window with the recently changed info
  };

  /* Set state */
  React.useEffect(() => {
    handlegetAdmins();
  }, []);

  return (
    <div>
      <h1 className="font-sans text-4xl rounded-none py-4 m-3"> Administración de Usuarios </h1>
      <a href="/users/create">
        <button
          type="button"
          class="py-2.5 px-5 mr-2 mb-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Crear Usuario
        </button>{" "}
      </a>
      {/* Waits for data to be charged */}
      {/* Esta tabla es un componente de flowbite, por eso algunos tags están definidos con esos atributos */}
      {data ? (
        <div className="table-container">
          <div className="relative overflow-x-hidden shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 px-6">
              <thead className="text-xl text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="bg-[#FF8C32]">
                  <th scope="col" className="px-6 py-6">
                    {TABLE_HEAD[0]}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {TABLE_HEAD[1]}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    {TABLE_HEAD[2]}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rol
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    {TABLE_HEAD[3]}
                  </th>
                  <th scope="col" className="px-8 mx-8 py-3 w-1/4">
                    <span className="sr-only">{TABLE_HEAD[4]}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {user.PrimerNombre}
                    </th>
                    <td className="px-6 py-4">{user.PrimerApellido}</td>
                    <td className="px-6 py-4">{user.Cedula}</td>
                    <td className="px-6 py-4">{user.NombreRol}</td>
                    <td className="px-6 py-4 ">
                      {user.EstadoActividad ?
                        <span className="bg-[#A0C49D] text-white font-bold py-2 px-2 rounded m-4" disabled>
                          Activa
                        </span> :
                        <span className="bg-[#FF9B9B] text-white font-bold py-2 px-2 rounded" disabled>
                          Inactiva
                        </span>
                      }
                    </td>
                    <td className="px-6 py-4 mx-2">
                      <div className="flex items-center whitespace-nowrap">
                        <a
                          href={`users/editar/${user.Cedula}`}
                          className="font-medium text-black hover:underline"
                        >
                          Editar Usuario 
                        </a>
                        <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <br />
        </div>
      ) : (
        // Si aun no esta la data tira este mensaje
        "Cargando información..."
      )}
    </div>
  );
};

export default UsersList;
