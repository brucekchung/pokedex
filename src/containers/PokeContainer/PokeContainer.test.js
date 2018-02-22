import React from 'react'
import { PokeContainer, mapState, mapDispatch } from './PokeContainer'
import { shallow } from 'enzyme'

describe('PokeContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<PokeContainer />)

    expect(wrapper).toMatchSnapshot()
  })

  it.skip('mapState should return the correct data', () => {

  })

  it.skip('mapDispatch should call dispatch when one of the props are called', () => {
    
  })
})