import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ComponentDropDown } from "./Input";
import "flowbite";
const UserEditForm = () => {
  const { Cedula } = useParams(); // aca entran los parametros
  const [data, setData] = React.useState(null); // use state para datos
  const navigate = useNavigate(); // for redirecting
  const [confirmarClave, setConfirmarClave] = React.useState(""); // confirmacion de clave
  const [contraseñasCoinciden, setContraseñasCoinciden] = React.useState(true); // variable comprobar que claves sean iguales
  const [submitClicked, setSubmitClicked] = React.useState(false);
  const bcryptjs = require("bcryptjs");
  /* For editing a userForm */
  const [PrimerNombreEdit, setPrimerNombreEdit] = React.useState(null); // edit variable for PrimerNombreEdit
  const [PrimerApellidoEdit, setPrimerApellidoEdit] = React.useState(null); // edit variable for PrimerApellidoEdit
  const [SegundoApellidoEdit, setSegundoApellidoEdit] = React.useState(null); // edit variable for SegundoApellidoEdit
  const [EmailEdit, setEmailEdit] = React.useState(null); // edit variable for EmailEdit
  const [clave, setClave] = React.useState(""); // edit variable for password
  const [NombreRolEdit, setNombreRolEdit] = React.useState(null); // edit variable for Rol
  const [TemporalRol, setTemporalRol] = React.useState(null); // edit variable for Rol
  const Usuarios = [
    { Nombre: "Administrador" },
    { Nombre: "Operador" },
    { Nombre: "Visualizador" },
  ]; // arreglo para guardar diferentes roles de usuarios

  // metodo para establecer valores por defecto
  const setDaultValues = (Nombre, PrimerApellido, SegundoApellido, Email) => {
    setPrimerNombreEdit(Nombre);
    setPrimerApellidoEdit(PrimerApellido);
    setSegundoApellidoEdit(SegundoApellido);
    setEmailEdit(Email);
  };

  //metodo para confirma clave
  const handleConfirmarClaveChange = (e) => {
    setConfirmarClave(e.target.value);
    setContraseñasCoinciden(e.target.value === clave);
  };
  // capturar cambio
  const handleClaveChange = (e) => {
    setClave(e.target.value);
  };
  // metodo para encriptar la contraseña
  const hashPassword = (password) => {
    const salt = 8;
    let passwordHash = bcryptjs.hashSync(password, salt);
    return passwordHash;
  };
  // Fetch del pos en una funcion, on click correr
  function handleForm(event) {
    event.preventDefault();
    if (clave !== confirmarClave) {
      setContraseñasCoinciden(false);
      return;
    }
    if (submitClicked && NombreRolEdit) {
      const passwordHash = hashPassword(clave);
      let datosUsuario = {
        PrimerNombre: PrimerNombreEdit,
        PrimerApellido: PrimerApellidoEdit,
        SegundoApellido: SegundoApellidoEdit,
        Email: EmailEdit,
        Cedula: Cedula,
        Clave: passwordHash,
        NombreRol: NombreRolEdit,
      };
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
      navigate("/users");
    }
  }

  // Set state
  React.useEffect(() => {
    const handleUser = () => {
      fetch(`/backend/users/editar/${Cedula}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);

          setDaultValues(
            // Metodo para establecer valor por defecto
            data[0].PrimerNombre || "",
            data[0].PrimerApellido || "",
            data[0].SegundoApellido || "",
            data[0].Email || ""
          );
        });
    };

    handleUser();
  }, [Cedula]);

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

          <div className="relative z-0 w-full mb-6 group">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="Clave"
            >
              Contraseña
            </label>
            <input
              id="Clave"
              name="Clave"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleClaveChange}
              type="password"
            />
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="ConfirmarClave"
            >
              Confirme contraseña
            </label>
            <input
              id="ConfirmarClave"
              name="ConfirmarClave"
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                contraseñasCoinciden ? "" : "border-red-500"
              }`}
              onChange={handleConfirmarClaveChange}
              type="password"
            />
            {!contraseñasCoinciden && (
              <p className="text-red-500 text-sm mt-1">
                Las contraseñas no coinciden.
              </p>
            )}
          </div>

          <div>
            <ComponentDropDown
              label="Seleccione"
              name="rol"
              leyenda="Seleccione un rol"
              items={Usuarios}
              selectedItem={TemporalRol}
              setSelectedItem={setTemporalRol}
              SetItem={setNombreRolEdit}
            ></ComponentDropDown>
          </div>

          <div>
            <br />
            <br />
            <button
              type="submit"
              value="ActualizarUsuario"
              onClick={() => setSubmitClicked(true)}
              class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Actualizar Usuario
            </button>
          </div>
        </form>
      ) : (
        "Cargando información..."
      )}
    </div>
  );
};

export default UserEditForm;
