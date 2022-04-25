const App = () => {
  const persona = 'Carlos'
  const saludo = 'Hola mundo';
  const user = false;

  const clasesObjeto = {
    primary: "text-primary",
    danger: "text-danger",
  }

  const SaludoBienvenida = () => (
    <h2 className="text-success">Bienvenido!</h2>
  )

  const SaludoDespedida = () => (
    <h2 className="text-danger">Adioooos!</h2>
  )

  const frutas = ["🍉", "🍌", "🍓"];

  const funcionClick = (amigo) => {
    console.log(`Hola ${amigo}`);
  }
  return (
    <div className="container py-3">
      <p className={clasesObjeto.primary}>{saludo}</p>

      {
        user ? <SaludoBienvenida /> : <SaludoDespedida />
      }

      <ul>
        {
          frutas.map((fruta) => <li key={`${fruta}-item`}>{fruta}</li>)
        }
      </ul>

      <button
        className="btn btn-primary"
        onClick={() => funcionClick(persona)}
      >
        Dame Click
      </button>

    </div>
  );
}

export default App;
