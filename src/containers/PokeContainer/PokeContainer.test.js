/* eslint-disable */ 
import React from 'react'
import { PokeContainer, mapState, mapDispatch } from './PokeContainer'
import { shallow } from 'enzyme'

describe('PokeContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<PokeContainer />)

    expect(wrapper).toMatchSnapshot()
  })

  it('mapState should return the correct data', () => {
    const state = {
      type: 'stuff',
      clicked: 'things',
      detail: 'nah'
    }
    const actual = mapState(state)
    const expected = { 
      pokeType: 'stuff',
      clicked: 'things',
      detail: 'nah'
    }

    expect(actual).toEqual(expected)
  })

  it('mapDispatch should call dispatch when one of the props are called', () => {
    const mockDispatch = jest.fn()
    const call = mapDispatch(mockDispatch)

    call.sendType()

    expect(mockDispatch).toHaveBeenCalled()
  })

  it.skip('should make a fetch call when handleClick is called', () => {
    const wrapper = shallow(<PokeContainer />)
    window.fetch = jest.fn()

    wrapper.instance().handleClick()
    expect(window.fetch).toHaveBeenCalled()
  })

  it.skip('test for generateCards?', () => {

  })
})


