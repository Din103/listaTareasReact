//App.css

import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
// import ListaDeTareas from './componentes/ListaDeTareas';
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        {/* <img 
          src={freeCodeCampLogo} 
          className='freecodecamp-logo' alt="kkk" /> */}
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mi Lista de Tareas Pendientes</h1>
        <Tarea texto='Aprender React'/>
        {/* <ListaDeTareas /> */}
      </div>
    </div>
  );
}

export default App;