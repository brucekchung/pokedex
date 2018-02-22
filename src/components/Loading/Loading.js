import React from 'react'
import './Loading.css'
import pikachu from '../../public/pikachu.gif'

export const Loading = () => (
  <div className="loading-gif">
    <img src={pikachu} alt="pikachu" />
  </div>
)
