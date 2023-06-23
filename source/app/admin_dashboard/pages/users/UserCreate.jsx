import React from "react";
import { Form, redirect, useParams, useNavigate } from "react-router-dom";
import "flowbite";

const CreateUser = () => {
  const [data, setData] = React.useState(null); // use state
  const navigate = useNavigate(); // for redirecting
  const [showResults, setShowResults] = React.useState(true); // show when edit is done

  /* For editing a userForm */
  const [PrimerNombreEdit, setPrimerNombreEdit] = React.useState(null); // edit variable for PrimerNombreEdit
  const [PrimerApellidoEdit, setPrimerApellidoEdit] = React.useState(null); // edit variable for PrimerApellidoEdit
  const [SegundoApellidoEdit, setSegundoApellidoEdit] = React.useState(null); // edit variable for SegundoApellidoEdit
  const [EmailEdit, setEmailEdit] = React.useState(null); // edit variable for EmailEdit
  const [CedulaEdit, setCedulaEdit] = React.useState(null); // edit variable for CedulaEdit
  const [ClaveEdit, setClaveEdit] = React.useState(null); // edit variable for EmailEdit
  const [NombreRolEdit, setNombreRolEdit] = React.useState(null); // edit variable for EmailEdit

  // Fetch del pos en una funcion, on click correr
  function handleForm(event) {
    event.preventDefault();
    // console.log("click");
    let datosUsuario = {
      PrimerNombre: PrimerNombreEdit,
      SegundoNombre: "",
      PrimerApellido: PrimerApellidoEdit,
      SegundoApellido: SegundoApellidoEdit,
      Email: EmailEdit,
      Cedula: CedulaEdit,
      Clave: ClaveEdit,
      NombreRol: NombreRolEdit
    };
    console.log("SegundoApellido " + SegundoApellidoEdit);
    fetch("/backend/users/create", {
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
    navigate("/users");
  }

  return (
    <div>
      <a href="/users">
        <button
          type="button"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Regresar
        </button>{" "}
      </a>
      <h1 className="font-sans text-4xl rounded-none py-4 m-3">
        {" "}
        Crear Usuarios{" "}
      </h1>

      <form method="POST" onSubmit={handleForm}>
        <div className="edit-container">
          <div class="relative z-0 w-full mb-6 group">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="Cedula"
            >
              Cédula
            </label>
            <input
              id="Cedula"
              name="Cedula" //con el id para que el server lo identifique
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setCedulaEdit(e.target.value)}
              type="text"
            />
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="Nombre"
            >
              Nombre
            </label>
            <input
              id="Nombre"
              name="Nombre" //con el id para que el server lo identifique
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setPrimerNombreEdit(e.target.value)}
              type="text"
            />
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="PrimerApellido"
            >
              Apellido
            </label>
            <input
              id="PrimerApellido"
              name="PrimerApellido" //con el id para que el server lo identifique
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setPrimerApellidoEdit(e.target.value)}
              type="text"
            />
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="SegundoApellido"
            >
              Segundo Apellido
            </label>
            <input
              id="SegundoApellido"
              name="SegundoApellido" //con el id para que el server lo identifique
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setSegundoApellidoEdit(e.target.value)}
              type="text"
            />
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="Email"
            >
              Email
            </label>
            <input
              id="Email"
              name="Email" //con el id para que el server lo identifique
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setEmailEdit(e.target.value)}
              type="text"
            />
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="Clave"
            >
              Contraseña
            </label>
            <input
              id="Clave"
              name="Clave" //con el id para que el server lo identifique
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setClaveEdit(e.target.value)}
              type="text"
            />
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="Clave"
            >
              Confirme contraseña
            </label>
            <input
              id="Clave"
              name="Clave" //con el id para que el server lo identifique
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              // onChange={(e) => setClaveEdit(e.target.value)}
              type="text"
            />
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="Rol"
            >
              Rol
            </label>
            <input
              id="Rol"
              name="Rol" //con el id para que el server lo identifique
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => setNombreRolEdit(e.target.value)}
              type="text"
            />
          </div>
        </div>

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
    </div>
  );
};

export default CreateUser;
