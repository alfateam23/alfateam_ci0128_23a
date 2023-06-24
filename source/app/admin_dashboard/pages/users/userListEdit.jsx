import React from "react";
import { Form, redirect, useParams, useNavigate } from "react-router-dom";
import "flowbite";

const TarifasEditar = () => {
  const { Cedula } = useParams(); // aca entran los parametros
  const [data, setData] = React.useState(null); // use state
  const navigate = useNavigate(); // for redirecting

  /* For editing a userForm */
  const [PrimerNombreEdit, setPrimerNombreEdit] = React.useState(null); // edit variable for PrimerNombreEdit
  const [PrimerApellidoEdit, setPrimerApellidoEdit] = React.useState(null); // edit variable for PrimerApellidoEdit
  const [SegundoApellidoEdit, setSegundoApellidoEdit] = React.useState(null); // edit variable for SegundoApellidoEdit
  const [EmailEdit, setEmailEdit] = React.useState(null); // edit variable for EmailEdit
  const [EstadoEdit, setEstadoEdit] = React.useState(null); // edit variable for EstadoEdit
  const [showResults, setShowResults] = React.useState(true); // show when edit is done

  /* Fetch for get endpoint of User */
  const handleUser = () => {
    fetch(`/backend/users/editar/${Cedula}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setDaultValues(
          data[0].PrimerNombre || "",
          data[0].PrimerApellido || "",
          data[0].SegundoApellido || "",
          data[0].Email || ""
        ); // Establecer valor por defecto
      });
    //console.log(data);
  };

  const setDaultValues = (Nombre, PrimerApellido, SegundoApellido, Email) => {
    /*console.log("Nombre: " + Nombre);
    console.log("PrimerApellido: " + PrimerApellido);
    console.log("SegundoApellido: " + SegundoApellido);
    console.log("Email: " + Email);*/
    setPrimerNombreEdit(Nombre);
    setPrimerApellidoEdit(PrimerApellido);
    setSegundoApellidoEdit(SegundoApellido);
    setEmailEdit(Email);
  };

  // Fetch del pos en una funcion, on click correr
  function handleForm(event) {
    event.preventDefault();
    // console.log("click");
    let datosUsuario = {
      PrimerNombre: PrimerNombreEdit,
      PrimerApellido: PrimerApellidoEdit,
      SegundoApellido: SegundoApellidoEdit,
      Email: EmailEdit,
      Cedula: Cedula,
    };
    // console.log("SegundoApellido " + SegundoApellidoEdit);
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
    navigate("/users");
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
          Regresar
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
                  Cédula
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
                  placeholder={user.PrimerNombre}
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
                  placeholder={user.PrimerApellido}
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
                  placeholder={user.SegundoApellido}
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
                  placeholder={user.Email}
                  onChange={(e) => setEmailEdit(e.target.value)}
                  type="email"
                />
              </div>
            </div>
          ))}

          <button
            type="submit"
            value="Actualizar"
            onClick={() => {
              alert("La informacion del usuario ha sido cambiada!");
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
