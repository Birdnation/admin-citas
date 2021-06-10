import { Fragment } from "react";

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="dueno"
          className="u-full-width"
          placeholder="Nombre Dueño"
        />
        <label>Fecha alta</label>
        <input type="date" name="fecha" className="u-full-width" />
        <label>Hora alta</label>
        <input type="time" name="hora" className="u-full-width" />
        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          placeholder="Describa los sintomas"
        />
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
