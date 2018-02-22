import React from 'react'
import { getPokeType } from './api'

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

  it('should return an error if the fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))
    const result = getPokeType()

    expect(result).rejects.toEqual(Error('cannot get types'))
  })
})