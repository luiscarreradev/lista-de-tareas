import { useState } from "react"
import Formulario from "./Formulario"

const TodoList = () => {

  const [tareas, setTareas] = useState([])
  
  const agregarTareas = tarea => {
    console.log(tarea);
    setTareas((prevState) => [...prevState, tarea])
  }

  return (
    <>
      <Formulario manejarTareas={agregarTareas}/>
    </>
  )
}

export default TodoList