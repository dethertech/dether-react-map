/* global describe beforeEach it expect test */

/**
 * Dependencies
 */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

/**
 * Components
 */
import Loader from './index'

/**
 * TESTS
 */
test('Loader is rendering properly', () => {
  const component = renderer.create(<Loader />)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})

describe('Loader', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallow(<Loader />)
  })

  it('should render the loader component', () => {
    expect(wrapper.length).toEqual(1)
  })
})
