//App.css

import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <h1>Lista de Tareas Pendientes</h1>
        <ListaDeTareas />
        
      </div>
    </div>
  );
}

export default App;