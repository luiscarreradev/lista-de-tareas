import React from 'react'

const Todo = ({ todo,eliminarTarea, editarTarea }) => {

  const { nombre, descripcion, estado, prioridad, id } = todo;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{nombre} {estado ? '(Finalizado)' : '(Pendiente)'}</div>
        <p>{descripcion}</p>
        <div>
          <button className="btn btn-danger me-2" onClick={() => eliminarTarea(id)}>Eliminar</button>
          <button className="btn btn-warning" onClick={() => editarTarea(id)}>Editar</button>
        </div>
      </div>
      <span className="badge bg-primary rounded-pill">
        {prioridad ? 'Prioritario' : 'Normal'}
      </span>
    </li>
  );
}

export default Todo