import { useEffect, useState } from "react"
import Formulario from "./Formulario"
import Todo from "./Todo"

const TodoList = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("tareas")){
      setTareas(JSON.parse(localStorage.getItem("tareas")));
    }
  },[])

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  },[tareas])
  
  const agregarTareas = tarea => {
    console.log(tarea);
    setTareas((prevState) => [...prevState, tarea])
  }

  const eliminarTarea = id => {
    setTareas((old) => old.filter(item => item.id !== id))
  }

  const editarTarea = id => {
    const editarTareas = tareas.map(item => (
      item.id === id ? { ...item, estado: !item.estado } : item
    ))

    setTareas(editarTareas)
    
  }

  return (
    <>
      <Formulario manejarTareas={agregarTareas}/>
      <h3 className="text-center mt-5">Lista de tareas</h3>
      <ol className="list-group list-group-numbered mt-2">
      {
        tareas.map(item => (
          <Todo
            key={item.id}
            todo={item}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea} />
        ))
      }
      </ol>
    </>
  )
}

export default TodoList