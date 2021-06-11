import { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
import PropTypes from "prop-types";

function App() {
  //citas en el localStorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //use Effect para operaciones cuando el state cambia ejemplo cambia las citas y ejecuta el useEffect
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  //funcion para tomas las citas actuales y agregar una nueva
  const crearCitas = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //funcion para eliminar una cita del listado de citas
  const eliminarCita = (id) => {
    const nuevaCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevaCitas);
  };

  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCitas={crearCitas} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Formulario.propTypes = {
  crearCitas: PropTypes.func.isRequired,
};

export default App;
