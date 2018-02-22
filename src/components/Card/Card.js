import React from 'react'
import { func, string } from 'prop-types'
import './Card.css'

export const Card = ({ name, getPoke, id }) => (
  <div 
    className="Card" 
    id={id} 
    onClick={() => getPoke(id)}>
    <p>{name}</p>
  </div>
)

Card.propTypes = {
  name: string,
  getPoke: func,
  id: string
}