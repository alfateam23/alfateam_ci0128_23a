import React from "react";
import { Form, redirect, useParams, useNavigate } from "react-router-dom";
import "flowbite";

const TarifasEditar = () => {
  const { PrimerNombre, PrimerApellido, Cedula } = useParams(); // aca entran los parametros
  const [data, setData] = React.useState(null); // use state
  const navigate = useNavigate(); // for redirecting

  /* For editing a userForm */
  //const [PrimerNombre, setPrimerNombre] = React.useState(TipoProcedencia); // edit variable for TipoProcedencia
  //const [PrimerApellido, setPrimerApellido] = React.useState(TipoVisita); // edit variable for TipoProcedencia
  //const [Cedula, setCedula] = React.useState(Estatus); // edit variable for TipoProcedencia
  const [showResults, setShowResults] = React.useState(true); // show when edit is done



  /* Fetch for get endpoint of User */
  const handleUser = () => {
    fetch(`/backend/users/editar/${PrimerNombre}/${PrimerApellido}/${Cedula}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    //console.log(data);
  };

  // Fetch del pos en una funcion, on click correr
  function handleForm(event) {
    event.preventDefault();
    console.log("click");
    let datosUsuario = {
      PrimerNombre: PrimerNombre,
      PrimerApellido: PrimerApellido,
      Cedula: Cedula,
    };
    //console.log("tarifaData " + tarifaData.TipoProcedencia)
    fetch("/backend/users/editar", {
      method: "POST",
      body: JSON.stringify(datosUsuario),
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        console.log(body);
      });
    //console.log("Llegue hasta aqui")
    navigate("/userList");
  }

  // Set state
  React.useEffect(() => {
    handleUser();
  }, []);

  return (
    <div>
      <a href="/users">
        <button
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Ir atrás
        </button>{" "}
      </a>
      <h1 className="font-sans text-4xl rounded-none py-4 m-3">
        {" "}
        Editar Usuarios{" "}
      </h1>
      {data ? (
        <form method="POST" onSubmit={handleForm}>
          {data.map((user) => (
            <div className="edit-container">
              <div class="relative z-0 w-full mb-6 group">
                <label
                  for="Cedula"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Cedula
                </label>
                <input
                  id="Cedula"
                  name="Cedula"
                  aria-label="disabled input"
                  class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={user.Cedula}
                  disabled
                ></input>
              </div>
            </div>
          ))}

          <button
            type="submit"
            value="Actualizar"
            onClick={() => {
              alert("La tarifa ha sido cambiada!");
            }}
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Actualizar
          </button>
          {showResults}
        </form>
      ) : (
        "Cargando información..."
      )}
    </div>
  );
};

export default TarifasEditar;
