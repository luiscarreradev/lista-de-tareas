import { useState } from 'react'

const Contador = () => {

  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  }

  const decrementar = () => {
    setContador(contador - 1);
  }

  return (
    <>
      <h2>Contador</h2>
      <h3>{contador}</h3>
      <button 
        className='btn btn-dark'
        onClick={aumentar}
      >Aumentar</button>
      <button 
        className='btn mx-2 btn-warning'
        onClick={decrementar}
      >Decrementar</button>
    </>
  )
}

export default Contador 