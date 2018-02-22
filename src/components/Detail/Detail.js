import React from 'react'
import './Detail.css'

export const Detail = ({ id, name, detail, toggle }) => {
  const allPoke = () => {
    return detail.map(poke => {
      return (
        <div>
          <img src={poke.sprites.front_default} />
          <h3>{poke.name}</h3>
          <p>type: {name}</p>
          <p>weight: {poke.weight}</p>
        </div>
      )
    })
  }

  return(
    <div className="Detail Card" onClick={() => toggle(id)}>
      <p>{name}</p>
      {
        detail &&
        allPoke()
      }
    </div>
  )
}
