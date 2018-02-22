import React from 'react'
import './Detail.css'

export const Detail = ({ id, name, detail, toggle }) => {
  const allPoke = () => {
    return detail.map((poke, i) => {
      return (
        <div key={i} onClick={() => toggle(id)} >
          <img src={poke.sprites.front_default} />
          <h3>{poke.name}</h3>
          <p>type: {name}</p>
          <p>weight: {poke.weight}</p>
        </div>
      )
    })
  }

  return(
    <div className="Detail Card">
      {
        detail &&
        allPoke()
      }
      <p>{name}</p>
    </div>
  )
}
