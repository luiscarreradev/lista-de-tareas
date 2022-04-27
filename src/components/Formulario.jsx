import React, { useState } from "react";

const Formulario = () => {
  const [tarea, setTarea] = useState({
    todoName: "",
    todoDescription: "",
    todoEstado: "pendiente",
    todoCheckbox: false,
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { todoDescription, todoName, todoCheckbox } = tarea;

    if (!todoDescription.trim() || !todoName.trim() || todoCheckbox === false) {
        setError(true);
        return;
    }

    setError(false);

    setTarea({
      todoName: "",
      todoDescription: "",
      todoEstado: "pendiente",
      todoCheckbox: false,
    });

    console.log("Bien ahi");
  };

  const handleChange = (e) => {

    const { name, value, checked, type } = e.target;

    setTarea({
      ...tarea,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const HayError = () => (
    <div className="alert alert-danger">Campos obligatorios perro!!</div>
  )

  return (
    <>
        {
            error ? <HayError /> : null
        }
      <h2>Controlado</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese tarea"
          name="todoName"
          className="form-control mb-2"
          onChange={handleChange}
          value={tarea.todoName}
        />
        <textarea
          name="todoDescription"
          className="form-control mb-2"
          placeholder="Ingrese descripción de la tarea"
          onChange={handleChange}
          value={tarea.todoDescription}
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          onChange={handleChange}
          value={tarea.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>

        <div className="form-check">
          <input
            name="todoCheckbox"
            className="form-check-input"
            onChange={handleChange}
            type="checkbox"
            checked={tarea.todoCheckbox}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dar prioridad
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
