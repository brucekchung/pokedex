import React from 'react'
import { sendDetailReducer } from './sendDetailReducer'

describe('sendDetailReducer', () => {
  it('should return the payload when type matches', () => {
    const mockAction = {
      type: 'SEND_DETAIL',
      payload: 'stuff'
    }
    const actual = sendDetailReducer(null, mockAction)
    const expected = 'stuff'

    expect(actual).toEqual(expected)
  })

  it('should return null if type does not match', () => {
    const mockAction = {
      type: 'WRONG_TYPE',
      payload: 'stuff'
    }
    const actual = sendDetailReducer(null, mockAction)
    const expected = null

    expect(actual).toEqual(expected)
  })
})