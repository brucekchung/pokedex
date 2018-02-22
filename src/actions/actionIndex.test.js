import React from 'react'
import { sendTypeAction } from './actionIndex'

describe('actionIndex', () => {
  it('sendTypeAction should send the payload', () => {
    const actual = sendTypeAction('pokemon')
    const expected = {type: 'SEND_TYPE', payload: 'pokemon'}

    expect(actual).toEqual(expected)
  })
})