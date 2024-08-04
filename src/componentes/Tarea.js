import '../hojas-de-estilo/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Tarea({ texto }) {
  return (
    <div className="tarea-contenedor">
      <div className="tarea-texto">
        {texto}
      </div>
      <div className="tarea-contenedor-iconos">
        <AiOutlineCloseCircle className='tarea-icono'/>
      </div>

    </div>
  )
}
