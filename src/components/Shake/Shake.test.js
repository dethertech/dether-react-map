/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';



import Shake from './index';



describe('Component Shake', () => {
  const child = <p>Child</p>;
  const component = renderer.create(<Shake toggle={5}>{child}</Shake>);
  const tree = component.toJSON();

  it('should be render without crash', () => {
    expect(tree).toMatchSnapshot();
  });
});
