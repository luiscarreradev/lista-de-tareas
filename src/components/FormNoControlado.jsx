import { useRef } from "react";

const FormNoControlado = () => {

  const formulario = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = new FormData(formulario.current);

    const objectDatos = Object.fromEntries([...datos.entries()]);

    const { todoDescription, todoName } = objectDatos;

    if (!todoDescription.trim() || !todoName.trim()) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    console.log('Validado');
  }



  return (
    <>
      <h2>No controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese tarea"
          name="todoName"
          className="form-control mb-2"
          defaultValue="Tarea 1"
        />
        <textarea
          name="todoDescription"
          className="form-control mb-2"
          placeholder="Ingrese descripción de la tarea"
        />
        <select 
          name="todoEstado"
          className="form-control mb-2"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Agregar
        </button>
      </form>
    </>
  );
}

export default FormNoControlado