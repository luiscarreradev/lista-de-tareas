import { useState } from "react";
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ manejarTareas }) => {

  //Estado inicial del formulario ----------------------------------------
  const initialState = {
    nombre: "",
    descripcion: "",
    estado: 'pendiente',
    prioridad: false,
  }

  const [ inputs, handleChange, reset ] = useFormulario(initialState);

  const { nombre, descripcion, estado, prioridad } = inputs;

 //Funciones ------------------------------------------------------------ 
  
  const handleSubmit = e => {
    e.preventDefault();
    if (nombre.trim() === ''){
      e.target[0].focus();
      Swal.fire({
        title: 'Cuidado!',
        text: 'Ingrese el nombre de la tarea',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
      return;
    }

    if (descripcion.trim() === ''){
      e.target[1].focus();
      Swal.fire({
        title: 'Cuidado!',
        text: 'Ingrese el la descripcion de la tarea',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
      return;
    }

    Swal.fire({
      title: 'Great!',
      text: "You're doing it right!",
      icon: 'success',
      confirmButtonText: 'OK'
    })

    reset();

    manejarTareas({
      nombre: nombre,
      descripcion: descripcion,
      estado: estado === 'pendiente' ? false : true, 
      prioridad: prioridad,
      id: uuidv4()
    });
  }
  
  
  return (
    <>
      <h3 className="text-center">Agreagar Tarea</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          name="nombre"
          placeholder="Ingrese tarea"
          value={nombre}
          onChange={handleChange}
        />
        <textarea
          name="descripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripcion"
          value={descripcion}
          onChange={handleChange}
        />
        <select
          name="estado"
          className="form-control mb-2"
          value={estado}
          onChange={handleChange}
        >
          <option value="pendiente">pendiente</option>
          <option value="completado">completado</option>
        </select>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            name="prioridad"
            checked={prioridad}
            id="flexCheckDefault"
            onChange={handleChange}
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckDefault">
            Prioritario
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
}

export default Formulario