import React from 'react'
import { func, string, arrayOf, object } from 'prop-types'
import './Detail.css'

export const Detail = ({ id, name, detail, toggle }) => {
  const allPoke = () => {
    return detail.map(poke => {
      return (
        <div key={poke.name}>
          <img src={poke.sprites.front_default} alt="pokemon"/>
          <h3>{poke.name}</h3>
          <p>type: {name}</p>
          <p>weight: {poke.weight}</p>
        </div>
      )
    })
  }

  return (
    <div className="Detail Card" onClick={() => toggle(id)}>
      <p>{name}</p>
      {
        detail &&
        allPoke()
      }
    </div>
  )
}

Detail.propTypes = {
  id: string,
  name: string,
  detail: arrayOf(object),
  toggle: func
}