import { Fragment, useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  //arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //funcion para tomas las citas actuales y agregar una nueva
  const crearCitas = (cita) => {
    guardarCitas([...citas, cita]);
  };

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCitas={crearCitas} />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
