
import React from 'react';
import renderer from 'react-test-renderer';
import Timer from '../../src/components/timer';

describe('Timer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Timer />).toJSON()
    expect(tree).toMatchSnapshot()
  });
})
