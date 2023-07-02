import React from "react";
import { Form, redirect, useParams, useNavigate} from 'react-router-dom'
import 'flowbite';



const TarifasEditar = () => {
    const { TipoProcedencia, TipoVisita, Estatus, CategoriaPago } = useParams(); // aca entran los parametros
    const [data, setData] = React.useState(null); // use state
    const navigate = useNavigate(); // for redirecting

    /* For editing a tarifa */
    const [TipoProcedenciaEdit, setTipoProcedenciaEdit] = React.useState(TipoProcedencia); // edit variable for TipoProcedencia
    const [TipoVisitaEdit, setTipoVisita] = React.useState(TipoVisita); // edit variable for TipoProcedencia
    const [EstatusEdit, setEstatus] = React.useState(Estatus); // edit variable for TipoProcedencia
    const [CategoriaPagoEdit, CategoriaPagoVisita] = React.useState(CategoriaPago); // edit variable for TipoProcedencia
    const [MontoEdit, setMonto] = React.useState(null); // edit variable for TipoProcedencia
    const [MonedaEdit, setMoneda] = React.useState(null); // edit variable for TipoProcedencia
    const [showResults, setShowResults] = React.useState(false) // show when edit is done



    // Notification when the change is made
    const Notify = () => (
        <div id="toast-default" class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Fire icon</span>
            </div>
            <div class="ml-3 text-sm font-normal">Set yourself free.</div>
            <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    )

    /* Fetch for get endpoint of tarifas */
    const handleTarifas = () => {
        fetch(`/tarifas/editar//${TipoProcedencia}/${TipoVisita}/${Estatus}/${CategoriaPago}`)
            .then((res) => res.json())
            .then((data) => setData(data));
        // console.log(data);
    }

    /* Fetch del pos en una funcion, on click correr */
    function handleForm(event) {
        event.preventDefault()
        console.log("click")
        let tarifaData = {
            TipoProcedencia: TipoProcedencia,
            TipoVisita: TipoVisita,
            Estatus: Estatus,
            CategoriaPago: CategoriaPago,
            Monto: MontoEdit,
            Moneda: MonedaEdit
        }
        console.log("tarifaData " + tarifaData.TipoProcedencia)
        fetch('/tarifas/editar/guardar', {
            method: 'POST',
            body: JSON.stringify(tarifaData),
            headers: { "Content-Type": "application/json" }
        })
            .then(function (response) {
                return response.json()
            }).then(function (body) {
                console.log(body);
            });
        console.log("Llegue hasta aqui")
        navigate("/tarifas");
    }

    /* Set state */
    React.useEffect(() => {
        handleTarifas()
    }, []);

    return (
        <div>
            <a href="/tarifas"><button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Ir atrás
            </button> </a>
            <h1 className="font-sans text-4xl rounded-none py-4 m-3"> Editar Tarifa </h1>
            {data ? (
                <form method="POST" onSubmit={handleForm}>
                    {data.map(tarifa => (
                        <div className="edit-container">

                            <div class="relative z-0 w-full mb-6 group">
                                <label for="TipoProcedencia" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo de procedencia</label>
                                <input id="TipoProcedencia" name="TipoProcedencia"
                                    aria-label="disabled input" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={tarifa.TipoProcedencia} disabled></input>
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="TipoVisita">Tipo de visita</label>
                                <input id="TipoVisita" name="TipoVisita"
                                    aria-label="disabled input" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={tarifa.TipoVisita} disabled />
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="Estatus">Estatus</label>
                                <input id="Estatus" name="Estatus"
                                    aria-label="disabled input" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={tarifa.Estatus} disabled />
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="CategoriaPago">Categoría de Pago</label>
                                <input id="CategoriaPago" name="CategoriaPago"
                                    aria-label="disabled input" class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={tarifa.CategoriaPago} disabled />
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="Monto">Monto</label>
                                <input id="Monto" name="Monto"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={tarifa.Monto} required
                                    onChange={e => setMonto(e.target.value)}
                                    type="text" />
                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="Moneda">Moneda</label>
                                <input id="Moneda" name="Moneda" //con el id para que el server lo identifique
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={tarifa.Moneda} required
                                    onChange={e => setMoneda(e.target.value)}
                                    type="text" />
                            </div>
                        </div>
                    ))}

                    <button type="submit" value="Actualizar"
                        onClick={() => {
                            alert('La tarifa ha sido cambiada!');
                        }}
                        class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Actualizar
                    </button>
                    {showResults && <Notify />}
                </form>

            ) : ("Cargando información...")}
        </div>
    );
};


export default TarifasEditar;
