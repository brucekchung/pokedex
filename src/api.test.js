import React from 'react'
import { getPokeType, getPokemon } from './api'

describe('api calls', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({pokemon: 'bulbasaur'})
    }))
  })

  it('getPokeType should make a fetch request', () => {
    getPokeType()

    expect(window.fetch).toHaveBeenCalled()
  })

  it('getPokeType should return an error if the fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))
    const result = getPokeType()

    expect(result).rejects.toEqual(Error('cannot get types'))
  })

  it('getPokemon should make a fetch request', () => {
    getPokemon('1')

    expect(window.fetch).toHaveBeenCalled()
  })

  it('getPokemon should return an error if the fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))
    const result = getPokemon()

    expect(result).rejects.toEqual(Error('cannot get pokemon'))
  })
})