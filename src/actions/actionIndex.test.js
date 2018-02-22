import React from 'react'
import { 
  sendTypeAction,
  sendClickedAction,
  sendDetailAction 
} from './actionIndex'

describe('actionIndex', () => {
  it('sendTypeAction should send the payload', () => {
    const actual = sendTypeAction('pokemon')
    const expected = {type: 'SEND_TYPE', payload: 'pokemon'}

    expect(actual).toEqual(expected)
  })

  it('sendClickedAction should send the payload', () => {
    const actual = sendClickedAction('2')
    const expected = {type: 'SEND_CLICKED', payload: '2'}

    expect(actual).toEqual(expected)
  })

  it('sendDetailAction should send the payload', () => {
    const actual = sendDetailAction('pokemon')
    const expected = {type: 'SEND_DETAIL', payload: 'pokemon'}

    expect(actual).toEqual(expected)
  })
})