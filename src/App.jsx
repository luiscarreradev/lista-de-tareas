import Frutas from "./components/Frutas";
import Contador from "./components/Contador";

const App = () => {
  const persona = 'Carlos'
  const saludo = 'Hola mundo';
  const user = true;

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

      <Contador />

      <p className={clasesObjeto.primary}>{saludo}</p>

      {
        user ? <SaludoBienvenida /> : <SaludoDespedida />
      }

      <Frutas frutasApp={frutas}/>

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
