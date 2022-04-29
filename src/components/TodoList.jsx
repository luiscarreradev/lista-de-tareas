import { useState } from "react"
import Formulario from "./Formulario"
import Todo from "./Todo"

const TodoList = () => {

  const [tareas, setTareas] = useState([])
  
  const agregarTareas = tarea => {
    console.log(tarea);
    setTareas((prevState) => [...prevState, tarea])
  }

  const eliminarTarea = id => {
    setTareas((old) => old.filter(item => item.id !== id))
  }

  return (
    <>
      <Formulario manejarTareas={agregarTareas}/>
      <h3 className="text-center mt-5">Lista de tareas</h3>
      <ol className="list-group list-group-numbered mt-2">
      {
        tareas.map(item => (
          <Todo key={item.id} todo={item} eliminarTarea={eliminarTarea}/>
        ))
      }
      </ol>
    </>
  )
}

export default TodoList