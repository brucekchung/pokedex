import React from 'react'

export const Card = ({ name, getPoke, id }) => {

  return (
    <div id={id} onClick={() => getPoke(id)}>
      <p>{name}</p>
    </div>
  )
}