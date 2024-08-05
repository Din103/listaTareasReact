import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css'
import { useState } from "react";
import Tarea from './Tarea';

export default function ListaDeTareas() {
  // Estado que contiene la lista de tareas, inicializada como un array vacío
  const [lasTareas, setLasTareas] = useState([]);
  
  const agregarTarea = tarea => {
    // Verifica si el texto de la tarea no está vacío después de recortar espacios en blanco
    if (tarea.texto.trim()) {
      // Recorta los espacios en blanco del texto de la tarea
      tarea.texto = tarea.texto.trim();
      // Crea una nueva lista de tareas actualizada, agregando la nueva tarea al inicio
      const tareasActualizadas = [tarea, ...lasTareas];
      // Actualiza el estado con la nueva lista de tareas
      setLasTareas(tareasActualizadas);
    }    
  }

  const eliminarTarea = (id) => {
    // Filtra las tareas para excluir la tarea con el id proporcionado
    const tareasActualizadas = lasTareas.filter(tarea => tarea.id !== id);
    // Actualiza el estado con la lista de tareas actualizada
    setLasTareas(tareasActualizadas);
  }

  const completarTarea = (id) => {
    // Mapea las tareas y cambia el estado de completada para la tarea con el id proporcionado
    const tareasActualizadas = lasTareas.map(tarea => {
      if (tarea.id === id) {
        // Alterna el estado de completada
        tarea.completada = !tarea.completada;
      }
      // Devuelve la tarea actualizada
      return tarea;
    });
    // Actualiza el estado con la lista de tareas actualizada
    setLasTareas(tareasActualizadas); 
  }

  return (
    <>
      {/* Componente para el formulario de agregar tareas, pasando la función agregarTarea como prop */}
      <TareaFormulario onSubmit={agregarTarea} />

      <div className="tareas-lista-contenedor">
        {
          // Mapea las tareas del estado y renderiza un componente Tarea para cada una
          lasTareas.map((tarea) =>
            <Tarea
              key={tarea.id} // Propiedad clave única para cada tarea
              id={tarea.id} // Id de la tarea
              texto={tarea.texto} // Texto de la tarea
              completada={tarea.completada} // Estado de completada de la tarea
              eliminarTarea={eliminarTarea} // Función para eliminar la tarea
              completarTarea={completarTarea} // Función para completar la tarea
            />            
          )
        }
      </div>
    </>
  )
}
