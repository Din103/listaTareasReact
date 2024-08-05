// Importamos la hoja de estilos para el componente de tarea
import '../hojas-de-estilo/Tarea.css';
// Importamos el ícono de cierre del paquete react-icons/ai
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    // Definimos la clase del contenedor de la tarea, aplicando una clase adicional si la tarea está completada
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      {/* Definimos el contenedor del texto de la tarea, y asignamos un evento onClick para completar la tarea */}
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto} {/* Mostramos el texto de la tarea */}
      </div>
      {/* Definimos el contenedor de los íconos, que contiene el ícono para eliminar la tarea */}
      <div className="tarea-contenedor-iconos">
        {/* Incluimos el ícono de cierre, y asignamos un evento onClick para eliminar la tarea */}
        <AiOutlineCloseCircle className='tarea-icono' onClick={() => eliminarTarea(id)} />
      </div>
    </div>
  );
}

