import React from 'react'

const Frutas = (props) => {
  return (
    <>
      <ul>
          {
            props.frutasApp.map((fruta) => <li key={`${fruta}-item`}>{fruta}</li>)
          }
      </ul>
    </>
  )
}

export default Frutas