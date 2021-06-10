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
      </form>
    </Fragment>
  );
};

export default Formulario;
