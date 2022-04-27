const FormNoControlado = () => {
  return (
    <>
      <h2>No controlado</h2>
      <form className="form">
        <input
          type="text"
          placeholder="Ingrese ToDo"
          name="todoName"
        />
      </form>
    </>
  )
}

export default FormNoControlado