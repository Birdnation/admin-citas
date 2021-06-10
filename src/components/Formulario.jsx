import { Fragment, useState } from "react";
import uuid from "uuid/v4";

const Formulario = () => {
  //crear state de citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    dueno: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //state para error
  const [error, actualizarError] = useState(false);
  //funcion que se ejecuta al cambiar un input
  const actualizarInput = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, dueno, fecha, hora, sintomas } = cita;

  const crearCita = (e) => {
    e.preventDefault();
    //Validar
    if (
      mascota.trim() === "" ||
      dueno.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    //modificar mensaje de error previo
    actualizarCita(false);

    //asignar ID
    cita.id = uuid();

    //crear Cita

    //reiniciar Form
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={crearCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarInput}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="dueno"
          className="u-full-width"
          placeholder="Nombre Dueño"
          onChange={actualizarInput}
          value={dueno}
        />
        <label>Fecha alta</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarInput}
          value={fecha}
        />
        <label>Hora alta</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarInput}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          placeholder="Describa los sintomas"
          onChange={actualizarInput}
          value={sintomas}
        />
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
