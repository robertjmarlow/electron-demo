import React from 'react';
import renderer from 'react-test-renderer';
import OsInfo from '../jsx/osInfo';

jest.mock('os');

test('Displays OS info', () => {
  const tree = renderer.create(
    <OsInfo/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
