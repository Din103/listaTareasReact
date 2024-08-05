import '../hojas-de-estilo/TareaFormulario.css';
import { useState } from 'react';
// Importamos la utilidad uuidv4 para generar identificadores únicos
import { v4 as uuidv4 } from 'uuid'; 

export default function TareaFormulario(props) {
  // Definimos un estado llamado 'input' para almacenar el valor del campo de entrada del formulario
  const [input, setInput] = useState('');

  // Función que maneja el cambio en el campo de entrada del formulario
  const manejarCambio = (e) => {
    // Actualizamos el estado 'input' con el valor actual del campo de entrada
    setInput(e.target.value);
  };

  // Función que maneja el envío del formulario
  const manejarEnvio = (e) => {
    // Prevenimos el comportamiento por defecto del formulario (recargar la página)
    e.preventDefault();
    // Creamos un nuevo objeto de tarea con un id único, el texto del input y el estado de completada en false
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    // Llamamos a la función onSubmit pasada como prop con la nueva tarea
    props.onSubmit(tareaNueva);
    // Limpiamos el campo de entrada después de enviar el formulario
    setInput(''); 
  };

  return (
    <form 
      className='tarea-formulario' 
      onSubmit={manejarEnvio} 
    >
      <input 
        className='tarea-input' 
        type='text' 
        placeholder='Escribe una Tarea' 
        name='texto' 
        value={input} // Vinculamos el valor del campo de entrada al estado 'input'
        onChange={manejarCambio} // Asignamos la función manejarCambio al evento onChange del campo de entrada
      />
      <button className='tarea-boton'>Agregar Tarea
      </button>
    </form>
  );
}
