import React from 'react'
import './Card.css'

export const Card = ({ name, getPoke, id }) => (
  <div 
    className="Card" 
    id={id} 
    key={name + id} 
    onClick={() => getPoke(id)}>
    <p>{name}</p>
  </div>
)