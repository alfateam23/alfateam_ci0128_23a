import React from "react";
import { Form, redirect, useParams, useNavigate} from 'react-router-dom'
import 'flowbite';

const TarifasEditar = () => {
    const { PrimerNombre, PrimerApellido, Cedula } = useParams(); // aca entran los parametros
    /* For editing a userForm */
    //const [TipoProcedenciaEdit, setTipoProcedenciaEdit] = React.useState(TipoProcedencia); // edit variable for TipoProcedencia
    //const [TipoVisitaEdit, setTipoVisita] = React.useState(TipoVisita); // edit variable for TipoProcedencia
    //const [EstatusEdit, setEstatus] = React.useState(Estatus); // edit variable for TipoProcedencia
    //const [CategoriaPagoEdit, CategoriaPagoVisita] = React.useState(CategoriaPago); // edit variable for TipoProcedencia
  return (
    <div>
      <h1>Hola desde user</h1>
    </div>
  );
};

export default TarifasEditar;
