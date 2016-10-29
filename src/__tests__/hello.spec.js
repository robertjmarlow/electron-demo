import React from 'react';
import renderer from 'react-test-renderer';
import Hello from '../jsx/hello';

test('Says hello', () => {
  const tree = renderer.create(
    <Hello/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
