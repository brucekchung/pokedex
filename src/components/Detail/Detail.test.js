import React from 'react'
import { Detail } from './Detail'
import { shallow } from 'enzyme'

describe('Detail', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Detail />)

    expect(wrapper).toMatchSnapshot()
  })
})