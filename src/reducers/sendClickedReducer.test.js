import React from 'react'
import { sendClickedReducer } from './sendClickedReducer'

describe('sendClickedReducer', () => {
  it('should return the payload when type matches', () => {
    const mockAction = {
      type: 'SEND_CLICKED',
      payload: 'stuff'
    }
    const actual = sendClickedReducer(null, mockAction)
    const expected = 'stuff'

    expect(actual).toEqual(expected)
  })

  it('should return null if type does not match', () => {
    const mockAction = {
      type: 'WRONG_TYPE',
      payload: 'stuff'
    }
    const actual = sendClickedReducer(null, mockAction)
    const expected = null

    expect(actual).toEqual(expected)
  })
})