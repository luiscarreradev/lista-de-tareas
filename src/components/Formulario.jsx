import { useState } from "react";
import Swal from 'sweetalert2';

const Formulario = () => {

  //Estado inicial del formulario ----------------------------------------
  const initialState = {
    nombre: "",
    descripcion: "",
    estado: 'pendiente',
    prioridad: false,

  }

  const [tarea, setTarea] = useState(initialState);

  const { nombre, descripcion, estado, prioridad } = tarea;

 //Funciones ------------------------------------------------------------ 
  const handleChange = e => {
    const {name, value, type, checked} = e.target;
    setTarea((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }))
  };
  
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
    setTarea(initialState);
  }
  
  
  return (
    <>
      <h3>Agreagar Tarea</h3>
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
            Default checkbox
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